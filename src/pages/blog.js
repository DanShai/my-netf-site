import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </div>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByPath {
    site {
      siteMetadata {
        title
        author
      }
    }

    allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }    
    markdownRemark {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
