import React from "react"
import Link from "next/link"
import Image from "next/image"
import home from "public/img/home.jpg"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:text-left lg:justify-between">
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="M. Fadil Martias" className="text-[80px] leading-[70px]">
          M. Fadil Martias
        </h1>
        <div className="my-10 mb-10 lg:mb-28 space-y-2 text-2xl">
          <div className="flex flex-col">
            <span className="font-light">Web Developer</span>
            <span>Portfolio</span>
          </div>
          <div>
            Saya seorang web developer bang.
          </div>
        </div>
        <div>
          <Link href="/" legacyBehavior>
            <a className="border border-slate-500 bg-slate-700 text-white p-5 px-10">
              GET IN TOUCH
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 h-[350px] lg:h-[700px]">
        <Image src={home} alt="M. Fadil Martias" className="w-full h-full object-cover object-bottom" />
      </div>
    </div>
  )
}
