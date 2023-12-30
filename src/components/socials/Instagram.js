import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Instagram() {
  return (
    <a
      href="https://www.instagram.com/nourishedbyketo/"
      target="_blank"
      rel="noreferrer"
      className="hover:bg-secondary p-2 rounded-lg text-primary hover:text-white"
    >
      <StaticImage
        src="../../images/instagram.webp"
        loading="lazy"
        alt="instagram logo"
        className="w-20 rounded-full mx-auto "
      />

      <p className="text-center font-semibold ">INSTAGRAM</p>
    </a>
  )
}
