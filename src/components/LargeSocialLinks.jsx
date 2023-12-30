import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

//switched to individual components due to staticImage
export default function LargeSocialLinks({ imageLink, name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:bg-secondary p-2 rounded-lg text-primary hover:text-white"
    >
      <StaticImage
        src="../images/example.com"
        alt={`${name} logo`}
        loading="lazy"
        className="w-20 rounded-full mx-auto "
      />

      <p className="text-center  font-semibold ">{name} </p>
    </a>
  )
}
