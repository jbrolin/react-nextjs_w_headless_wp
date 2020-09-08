import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/NextLayout';
import Navigation from '../components/Navigation'
import { Fragment } from 'react'

export default () => (
  <Fragment>
    <Head>
      <title>Page title!</title>
      <meta name="description" content="This meta description will show up in search results." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation/>
    <Layout>
    <h1>This is a server-side rendered React.js app</h1>
    <p>Posts page, fetches data from headless WP site</p>
    <style jsx>{`
        h1,
        a,
        p {
          font-family: 'Arial';
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  </Fragment>
)