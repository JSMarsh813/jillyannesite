import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "WORK WITH ME", href: "/workwithme" },
    { name: "CONTACT", href: "/contact" },
  ]

  const socials = [
    {
      name: "YOUTUBE",
      href: "https://www.youtube.com/@JillyannesJourney",
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/jillyannesjourney/",
    },
    {
      name: "FACEBOOK",
      href: "https://www.facebook.com/JillyannesJourney",
    },
  ]

  return (
    <footer
      className="px-4 py-6 border-t-4 border-secondary"
      style={{ backgroundColor: "#F3FCFD" }}
    >
      <section className="flex gap-14 text-secondary font-bold tracking-widest">
        <ul>
          <li className="text-primary text-lg" key="footer-jilly">
            JILLY{" "}
          </li>

          {navigation.map(item => (
            <li key={`li ${item.name}`}>
              <Link
                key={item.name}
                className="block custom_hover"
                aria-label={item.current ? "page" : undefined}
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          <li className="text-primary text-lg" key="footer-connect">
            CONNECT{" "}
          </li>

          {socials.map(item => (
            <li key={`li ${item.name}`}>
              <a
                key={item.name}
                className="block custom_hover"
                aria-label={item.current ? "page" : undefined}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-primary font-bold mt-4">
        © {new Date().getFullYear()} &middot; All Rights Reserved
      </p>
    </footer>
  )
}
