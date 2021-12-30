/**
 * このブログはGoto Hayatoの「Next.js を使った Jamstack なブログの始め方」を丸パクリして作られています。
 * 感謝します。
 * https://gotohayato.com/content/517/
 */


import fs from "fs"

import Link from "next/link"

import Layout from "../components/Layout"
import { readContentFiles } from "../lib/content-loader"

export default function Home(props) {
  const { posts, hasArchive } = props
  return (
    <Layout title="">
      {posts.map((post) => <div key={post.slug} className="post-teaser">
        <h2><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span className="pub">{post.published}</span></div>
      </div>)}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
      ) : ``}

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none
        }

        .pub {
          margin-right: 10px;
          color: red;
          justify-content: right;
        }

        .home-archive {
          margin: 3em;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </Layout>
  )
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const MAX_COUNT = 5
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    }
  }
}
