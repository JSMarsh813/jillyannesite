import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Youtube() {
  return (
    <a
      href="https://www.youtube.com/@nourishedbyketo/"
      target="_blank"
      rel="noreferrer"
      className="hover:bg-secondary p-2 rounded-lg text-primary hover:text-white"
    >
      <StaticImage
        src="../../images/youtube.webp"
        alt="Youtube Logo"
        loading="lazy"
        placeholder="blurred"
        className="w-20 rounded-full mx-auto "
      />

      <p className="text-center font-semibold ">YOUTUBE</p>
    </a>
  )
}
