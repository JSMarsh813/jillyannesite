import React from "react"
import { Link } from "gatsby"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import { StaticImage } from "gatsby-plugin-image"

const sharedStylingForNavs =
  "rounded-md px-3 py-2 text-base font-semibold custom_hover text-primary"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Work With Me", href: "/workwithme", current: false },
  { name: "Contact", href: "/contact", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* logo image for both navs */}

                  <Link to="/">
                    <StaticImage
                      key="logo"
                      src="../images/jillylogo.png"
                      alt="Logo for Jillyannes"
                      loading="eager"
                      className="block h-8 w-auto hover:invert aspect-[13/3]"
                      tabIndex={0}
                    />
                    {/* aspect ratio will have to be changed if a new logo is made */}

                    {/* <img
                      className="block h-8 w-auto hover:invert"
                      src={logo}
                      alt="Logo for Jillyannes"
                      tabIndex={0}
                    /> */}
                  </Link>
                </div>
                {/* ######### Panel for desktop menu ############# */}
                <div className="hidden sm:ml-6 sm:block absolute right-0 ">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(sharedStylingForNavs)}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ######### Panel for mobile menu ############# */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  className={classNames(`block ${sharedStylingForNavs}`)}
                  aria-label={item.current ? "page" : undefined}
                  to={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
