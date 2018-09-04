import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'


class BlogPost extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark

    return (
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            {
              posts.edges.map(post  => 
                <div key={post.node.id}  className=" box">
              <h1>{post.node.frontmatter.title}</h1>
              <p>
                {post.node.frontmatter.date}
              </p>
                <small>
                  Posted by {post.node.frontmatter.author} on{' '}
                  {post.node.frontmatter.date}
                </small>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <Link to={post.node.frontmatter.path} className="button special"> Read More</Link>
              
              </div>
              )
            }
          </div>
        </section>

    </div>
    )
  }

}


export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
  }
`
export default BlogPost

