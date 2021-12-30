import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children, posts } = props
  const siteTitle = "てれぐのーしす"
  
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <hr></hr>

      <tw>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </tw>

      <footer>
        <div>Armeria</div>
      </footer>
      <style jsx>{`
        .page {
          padding: 2em 1em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 4em;
        }

        .site-title a {
          color: inherit;
          text-decoration: none;
        }

        footer {
          min-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          color: gray;
          font-size: 12px;
          padding-bottom: 2em;
          display: flex;
          justify-content: right;
        }

        tw {
          min-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          color: gray;
          font-size: 12px;
          padding-bottom: 1em;
          display: flex;
          justify-content: right;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans JP', -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
          color: #696969;
          background: #f0ffff; 
        }

        img,
        iframe {
          max-width: 100%;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
            color: #800000;
        }

        hr {
          margin-top: 2em;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Layout

/* 
<a class="twitter-timeline" data-width="320" data-height="300" data-theme="dark" href="https://twitter.com/Armeria_s?ref_src=twsrc%5Etfw">Tweets by Armeria_s</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
*/
