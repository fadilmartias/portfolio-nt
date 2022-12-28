import React from "react";
import Image from "next/image";
import about from "public/img/about.jpg"

const AboutMe = () => (
    <section id="about-me" className="flex gap-5 flex-col lg:flex-row lg:justify-between">
        <div className="space-y-5 text-center lg:text-left grid place-content-center ">
            <h1 className="text-5xl">
                <span>Developer</span> <br />
                <span class="font-bold">Biography</span>
            </h1>
            <p>Aku developer</p>
            <p>Aku gamer</p>
        </div>

        <div className="mt-10 lg:mt-0 w-full lg:w-1/2 h-[700px]">
            <Image src={about} alt="about fadil" className="w-full h-full object-cover"/>
        </div>
    </section>
)

export default AboutMe