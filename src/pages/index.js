import * as React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import landingimage from "../images/landingpage.png"
import PostPreview from "../components/PostPreview"
import LargeSocialLinks from "../components/LargeSocialLinks"

// import Flowers from "../images/flowers.png"

import BlogRollPrettier from "../components/BlogRollPrettier"

const IndexPage = props => {
  const posts = props.data.allMarkdownRemark.edges
  //accesses array of node objects

  console.log(props)

  const socials = [
    {
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/640px-YouTube_social_red_square_%282017%29.svg.png",
      name: "YOUTUBE",
      href: "https://www.youtube.com/@JillyannesJourney",
    },
    {
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
      name: "INSTAGRAM",
      href: "https://www.instagram.com/jillyannesjourney/",
    },
    {
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/1200px-Facebook_Logo_2023.png",
      name: "FACEBOOK",
      href: "https://www.facebook.com/JillyannesJourney",
    },
  ]

  return (
    <Layout>
      <div>
        <div className="hero max-h-76 bg-primary">
          <div className="hero-content flex flex-col sm:flex-row text-center">
            <img
              src={landingimage}
              className="max-h-96 max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className="bg-white p-8 -ml-6">
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
        {socials.map(item => (
          <LargeSocialLinks
            imageLink={item.imageLink}
            name={item.name}
            href={item.href}
            key={`social links ${item.name}`}
          />
        ))}
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
