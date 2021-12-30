import path from "path"

import matter from "gray-matter"

import { formatDate } from "./date"

const DIR = path.join(process.cwd(), "contents/posts")
const EXTENSION = ".md"

/**
 * Markdown のファイル一覧を取得する
 */
const listContentFiles = ({ fs }) => {
  const filenames = fs.readdirSync(DIR)
  return filenames
    .filter((filename) => path.parse(filename).ext === EXTENSION)
}

/**
 * Markdown のファイルの中身をパースして取得する
 */
 const readContentFile = async ({ fs, slug, filename }) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
  }
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8')
  const matterResult = matter(raw)

  const { title, published: rawPublished } = matterResult.data

  return {
    title,
    published: formatDate(rawPublished),
    content: matterResult.content,
    slug,
  }
}

/**
 * Markdown のファイルの中身を全件パースして取得する
 */
 const readContentFiles = async ({ fs }) => {
  const promisses = listContentFiles({ fs })
    .map((filename) => readContentFile({ fs, filename }))

  const contents = await Promise.all(promisses)

  return contents.sort(sortWithProp('published', true))
}

// export 対象に `readContentFiles()` を追加する
export { listContentFiles, readContentFiles, readContentFile }

/**
 * Markdown の投稿をソートするためのヘルパー
 */
 const sortWithProp = (name, reversed) => (a, b) => {
  if (reversed) {
    return a[name] < b[name] ? 1 : -1
  } else {
    return a[name] < b[name] ? -1 : 1
  }
}
