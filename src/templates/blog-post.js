import React, { useState } from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/content"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  image,
  imagealt,
  helmet,
  fields,
  id,
}) => {
  const PostContent = contentComponent || Content

  const baseUrl = `http://nourishedbyketo.com`

  const [disqusIsVisible, setDisqusVisibility] = useState(false)

  // Set Disqus visibility state on click.
  const showCommentsClick = event => {
    setDisqusVisibility(true)
  }

  let disqusConfig = {
    url: `${baseUrl + fields}`,
    identifier: id,
    title: title,
  }

  return (
    <section className="section bg-primary py-6 text-black">
      {helmet || ""}

      <div className=" px-4 max-w-screen-lg mx-auto">
        <div className="bg-white">
          <div className="border-2 border-secondary px-4">
            <header className="bg-secondary p-2">
              <h1 className="text-5xl font-semibold md:tracking-tight text-center py-4 text-white">
                {title}
              </h1>

              <span className="block text-center text-white">{date}</span>

              <p className="text-2xl text-center text-white">{description}</p>
            </header>

            {image && (
              <div
                className="featured-thumbnail m-auto pt-10 max-w-md
                "
              >
                <LazyLoadImage
                  effect="blur"
                  alt={imagealt ? imagealt : ""}
                  src={image} // use normal <img> attributes as props
                />
              </div>
            )}

            <PostContent className="text-xl" content={content} />

            {/* ############## TAGS ##########*/}
            {tags && tags.length ? (
              <div
                className="mt-2 border-t-4 
              border-dashed border-secondary"
              >
                <ul className="taglist flex flex-wrap py-6 space-x-4">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        className="px-3 py-2 rounded-sm  bg-secondary text-white
                        hover:underline"
                      >
                        {`#${tag}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {!disqusIsVisible && (
              <div className="flex center items-center justify-center">
                <button
                  className="button bg-secondary p-2 rounded-md border-b-2 mb-2 px-4 border-primary hover:bg-primary text-white "
                  onClick={showCommentsClick}
                >
                  Load Comments
                </button>
              </div>
            )}

            {disqusIsVisible && (
                <CommentCount config={disqusConfig} placeholder={"..."} />
              ) && <Disqus config={disqusConfig} />}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        image={post.frontmatter.featuredimage}
        imagealt={post.frontmatter.featuredimagealt}
        id={post.id}
        fields={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage
        featuredimagealt
      }
      fields {
        slug
      }
    }
  }
`
