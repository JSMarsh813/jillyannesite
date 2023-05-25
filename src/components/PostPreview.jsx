import React from "react"
import Flowers from "../images/flowers.png"

export default function PostPreview() {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 px-4 pt-8"
      style={{
        backgroundImage: `url(${Flowers})`,
        backgroundPosition: "top",
        backgroundSize: "100% 190px",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div class="max-w-[370px] mx-auto mb-10">
        <div class="rounded overflow-hidden mb-8">
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
            alt="image"
            class="w-full"
          />
        </div>
        <div>
          <span
            class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
          >
            Dec 22, 2023
          </span>
          <h3>
            <a
              href="javascript:void(0)"
              class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
            >
              Meet AutoManage, the best AI management tools
            </a>
          </h3>
          <p class="text-base text-body-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  )
}
