import React from "react"

export default function LargeSocialLinks({ imageLink, name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:bg-secondary rounded-lg text-primary hover:text-white"
    >
      <img
        className="w-24 rounded-full "
        src={imageLink}
        alt={`${name} logo`}
      />
      <p className="text-center  font-semibold ">{name} </p>
    </a>
  )
}
