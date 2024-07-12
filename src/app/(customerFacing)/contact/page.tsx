"use client";
import React from "react";

import img from "./_assets/pp.png";
import icon1light from "./_assets/instagramlight.svg";
import icon1dark from "./_assets/instagramdark.svg";
import icon2 from "./_assets/gmail.svg";
import icon3light from "./_assets/githublight.svg";
import icon3dark from "./_assets/githubdark.svg";
import { useTheme } from "@/components/ThemeContext";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const { theme } = useTheme();
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ashuramajestic@gmail.com";
  };
  return (
    <div className="container mx-auto contact-style min-h-screen">
      <section className="grid grid-cols-7 min-h-screen">
        <div className="col-span-1 md:col-span-2 lg:col-span-2"></div>
        <div className="main-title  col-span-5 md:col-span-3 lg:col-span-3 flex flex-col items-center justify-center">
          <div className=" text text-3xl mb-3">Feel Free to contact me</div>
          <div>
            <Image
              src={img}
              className="pp h-60 w-60 rounded-full"
              alt="ashura majestic"
            />
          </div>
          <div className="grid grid-cols-5 links w-full">
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="col-span-5 lg:col-span-3 grid grid-cols-3 mt-2">
              <div className="flex justify-center items-center">
                <Link
                  href={`https://www.instagram.com/ashuramajestic/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Intagram Ashura Majestic"
                    src={theme === "dark" ? icon1dark : icon1light}
                    className="col-1"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center pt-1">
                <a
                  href="mailto:ashuramajestic@gmail.com"
                  onClick={handleEmailClick}
                >
                  <Image alt="" src={icon2} className="col-1" />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href={`https://github.com/AshuraMajestic`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="Github Ashura"
                    src={theme === "dark" ? icon3dark : icon3light}
                    className="col-1"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2"></div>
      </section>
    </div>
  );
}
