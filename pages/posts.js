import Navigation from '../components/Navigation'
import Layout from '../components/NextLayout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( 'https://teclab.se/wp/wp-json/wp/v2/posts' )
      
      // http://localhost:8888/wp-react/wp-json/wp/v2/posts' )

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Layout>
            <h1>Posts pages from our headless WP-site</h1>
            <ul>
            {
                this.props.posts.map( post => {
                return (
                    <li key={ post.id }>
                        <Link href={ `/posts/${ post.slug }` }>
                            <a href={ `/posts/${ post.slug }` }>
                                { post.title.rendered }
                            </a>
                        </Link>
                    </li>
                )
                })
            }
            </ul>
            <style jsx>{`
            h1,
            a {
            font-family: 'Arial';
            }

            ul {
            padding: 0;
            }

            li {
            list-style: none;
            margin: 5px 0;
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
  }
}
