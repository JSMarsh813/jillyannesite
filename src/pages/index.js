import * as React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PostPreview from "../components/PostPreview"
import { StaticImage } from "gatsby-plugin-image"
import Facebook from "../components/socials/facebook"
import Instagram from "../components/socials/instagram"
import Youtube from "../components/socials/youtube"

import BlogRollPrettier from "../components/BlogRollPrettier"

const IndexPage = props => {
  const posts = props.data.allMarkdownRemark.edges
  //accesses array of node objects

  return (
    <Layout>
      <div>
        <div className="hero max-h-76 bg-primary">
          <div className="hero-content flex flex-col sm:flex-row text-center">
            <StaticImage
              alt=""
              loading="eager"
              height="340"
              src="../images/landingpage.png"
              className="rounded-lg shadow-2xl"
            ></StaticImage>

            <div className="bg-white p-8 -ml-6 z-40">
              <h1 className="text-3xl font-extrabold">Hi. I'm Jilly!</h1>
              <p className="py-6 text-xl font-extrabold">
                Follow my journey to
                <span className="block"> optimal health!</span>
              </p>

              <div className="flex justify-around font-bold text-secondary text-lg">
                <Link className="custom_hover p-2 rounded-full" to="/about">
                  About
                </Link>

                <Link className="custom_hover p-2 rounded-full" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-center tracking-widest text-secondary font-black text-3xl my-12">
          LATEST POSTS
        </h2>

        <section>
          <BlogRollPrettier props={posts} />
        </section>

        <div
          className="text-center h-36 flex justify-center items-center"
          style={{
            backgroundImage: `url(${`https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`,
          }}
        >
          <Link
            className="bg-secondary/70 text-2xl text-white py-4 px-8 text-center font-bold border-b-8 border-primary/40 custom_hover"
            to="/blog"
          >
            View More Posts
          </Link>
        </div>
      </section>

      {/* ###############  SOCIALS ################ */}
      <section className="tracking-widest  text-4xl bg-primary text-center text-white pt-10 pb-8 font-semibold">
        <h4 className="pb-10">CATCH UP WITH ME </h4>
      </section>

      <section className="flex flex-wrap gap-4 relative -top-14 justify-center">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Youtube></Youtube>
        {/*         
        {socials.map(item => (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="hover:bg-secondary p-2 rounded-lg text-primary hover:text-white"
          >
            <StaticImage
              src={item.imageLink}
              alt={`${item.name} logo`}
              key={`social links ${item.name}`}
              className="w-20 rounded-full mx-auto "
            />

            <p className="text-center  font-semibold ">{item.name} </p>
          </a>
        ))} */}
      </section>
    </Layout>
  )
}

export default IndexPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export const IndexPageQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage

            featuredimagealt
          }
        }
      }
    }
  }
`
