"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./_styles/slider.css";

import Typed from "typed.js";

// Styles
import "./_styles/font.css";
import "./_styles/About.css";

// Carousel Images
import slide_image_1 from "./_assets/1.png";
import slide_image_2 from "./_assets/2.jpg";
import slide_image_3 from "./_assets/3.jpg";
import slide_image_4 from "./_assets/4.jpg";
import slide_image_5 from "./_assets/5.jpg";
import slide_image_6 from "./_assets/6.jpg";
import slide_image_7 from "./_assets/7.jpg";

//  Skills svgs
import icon1 from "./_assets/python.svg";
import icon2 from "./_assets/c.svg";
import icon3 from "./_assets/java.svg";
import icon4 from "./_assets/javascript.svg";
import icon5 from "./_assets/nodejs.svg";
import icon6 from "./_assets/django.svg";
import icon7 from "./_assets/react.svg";
import icon8 from "./_assets/tailwind.svg";
import icon9 from "./_assets/html.svg";
import icon10 from "./_assets/css.svg";
import icon11light from "./_assets/expresslight.svg";
import icon11dark from "./_assets/expressdark.svg";
import icon12 from "./_assets/bootstrap.svg";
import icon13 from "./_assets/firebase.svg";
import icon14 from "./_assets/mongodb.svg";
import icon15light from "./_assets/gitlight.svg";
import icon15dark from "./_assets/gitdark.svg";
import icon16light from "./_assets/githublight.svg";
import icon16dark from "./_assets/githubdark.svg";
import icon17light from "./_assets/figmalight.svg";
import icon17dark from "./_assets/figmadark.svg";
import icon18 from "./_assets/canva.svg";
import icon19 from "./_assets/illustrator.svg";
import icon20 from "./_assets/vs.svg";
import icon21 from "./_assets/android.svg";

import prismalight from "./_assets/prismalight.svg";
import prismadark from "./_assets/prismadark.svg";
import nextjslight from "./_assets/next-jslight.svg";
import nextjsdark from "./_assets/next-jsdark.svg";

import mysql from "./_assets/mysql.svg";
import cockroachdb from "./_assets/cockroachdb.svg";
import postgresql from "./_assets/postgresql.svg";

import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";

export default function AboutMe() {
  const typedRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const options = {
      strings: [
        "A FULL STACK DEVELOPER",
        "A SOFTWARE ENGINEER",
        "AN APPLICATION DEVELOPER",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  const handleClick = (page: string) => () => {
    if (page === "workout") {
      window.open("https://workoutbudddy.netlify.app/", "_blank");
    }
    if (page === "weather") {
      window.open("https://weather-with-ashura.onrender.com/", "_blank");
    }
    if (page === "love") {
      window.open("https://lovecalculator-mzln.onrender.com/", "_blank");
    }
    if (page === "ecomm") {
      window.open("https://ekart-i3i1.onrender.com/", "_blank");
    }
    if (page === "git-smartmartpos") {
      window.open("https://github.com/AshuraMajestic/SmartMartPos", "_blank");
    }
  };

  return (
    <div className="container mx-auto about-style min-h-screen">
      <section className="grid grid-cols-5 min-h-screen">
        <div className="col-span-1"></div>
        <div className="main-title col-span-3 flex flex-col items-center justify-center">
          <h1 className="text-7xl text-uppercase  row title pb-2 tracking-wide">
            Ashura Majestic
          </h1>
          <div className="line row"></div>
          <div className="swipe-container">
            <span
              ref={typedRef}
              className="swipe-text text-4xl row text-uppercase sub-title"
            ></span>
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>
      <section className="grid grid-cols-5 min-h-screen">
        <div className="col-span-1"></div>
        <div className="col-span-3 flex flex-col items-center  justify-center">
          <div className="bg-content about-box w-full px-8 rounded-lg">
            <p className="text-3xl pt-24 pb-20 text tracking-wide">
              I am Abhishek Kushwaha aka Ashura Majestic, I am Still learning and started working on
              my Dreams. This is a website Created Just for Fun as I want to
              Start Uploading some blogs and also show case my works.
            </p>
            <div className="text-end">
              <p className="text-2xl pb-4 text tracking-wide">
                <span>-</span> Software Engineer
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>
      <section className="min-h-screen flex pt-24">
        <div className="w-full container">
          <div className="h-full">
            <div className="mb-12 row grid grid-cols-10">
              <div className="col-span-1"></div>
              <div className="col-span-8">
                <p className=" text-6xl text heading">Projects</p>
              </div>
              <div className="col-span-1"></div>
            </div>
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
               
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("git-smartmartpos")}
                >
                  <Image
                    alt="img"
                    src={slide_image_7}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                    <h1 className="text-xl font-bold">SmartMartPos</h1>
                    <p className="text-sm">
                      A Android application which helps retail consumer to enter
                      store and buy anything easily.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("workout")}
                >
                  <Image
                    alt="img"
                    src={slide_image_2}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 ">
                    <h1 className="text-xl text-white font-bold">
                      Workout Buddy
                    </h1>
                    <p className="text-sm text-white">
                      A Website Designed and Developed which help you to stay healthy and Fit.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("weather")}
                >
                  <Image
                    alt="img"
                    src={slide_image_3}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                    <h1 className="text-xl font-bold">Weather With Ashura</h1>
                    <p className="text-sm">
                      A website which uses api to show Weather info.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("contact")}
                >
                  <Image
                    alt="img"
                    src={slide_image_4}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 ">
                    <h1 className="text-xl text-white font-bold">
                      Contact Ashura Page
                    </h1>
                    <p className="text-sm text-white">
                      A Website made for learning Development.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("ecomm")}
                >
                  <Image
                    alt="img"
                    src={slide_image_5}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                    <h1 className="text-xl font-bold">Artekart</h1>
                    <p className="text-sm">
                      A website having admin panel and user side for shopping
                      and ecomm needs.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="h-60 relative"
                  onClick={handleClick("love")}
                >
                  <Image
                    alt="img"
                    src={slide_image_6}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                    <h1 className="text-xl font-bold">Love Meter</h1>
                    <p className="text-sm">
                      My First Website created to learn and visualize the api
                      and js concepts.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 min-h-screen pt-24">
        <div className="hidden lg:block lg:col-span-1"></div>
        <div className="col-span-5 lg:col-span-3 ">
          <div className="heading text text-6xl">Skills</div>
          <div className="heading text text-3xl my-10">
            Programming Languages
          </div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid  items-center justify-center ">
              <Image className="icons row" src={icon1} alt="python" />
              <h5 className="row text-center text-xl text">Python</h5>
            </div>
            <div className="col-span grid items-center justify-center ">
              <Image className="icons row" src={icon2} alt="c" />
              <h5 className="row text-center text-xl text">C</h5>
            </div>
            <div className="col-span grid items-center justify-center ">
              <Image className="icons row" src={icon3} alt="java" />
              <h5 className="row text-center text-xl text">Java</h5>
            </div>
            <div className="col-span grid items-center justify-center ">
              <Image className="icons row" src={icon4} alt="javascript" />
              <h5 className="row text-center text-xl text">JavaScript</h5>
            </div>
          </div>
          <div className="heading text-3xl my-10 text">Web Technologies</div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid items-center justify-center ">
              <Image className="icons row" src={icon5} alt="NodeJS" />
              <h5 className="row text-center  text-xl text">Python</h5>
            </div>
            <div className="col-span grid items-center justify-center ">
              <Image className="icons row" src={icon6} alt="django" />
              <h5 className="row text-center  text-xl text">Django</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon7} alt="react" />
              <h5 className="row text-center  text-xl text">ReactJS</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon8} alt="tailwindcss" />
              <h5 className="row text-center  text-xl text">Tailwind</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image className="icons row" src={icon9} alt="Html" />
              <h5 className="row text-center  text-xl text">Html</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image className="icons row" src={icon10} alt="css" />
              <h5 className="row text-center  text-xl text">CSS</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image
                className="icons row"
                src={theme === "dark" ? icon11dark : icon11light}
                alt="Express"
              />
              <h5 className="row text-center  text-xl text">ExpressJS</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image className="icons row" src={icon12} alt="Bootstrap" />
              <h5 className="row text-center  text-xl text">Bootstrap</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image
                className="icons row"
                src={theme === "dark" ? prismadark : prismalight}
                alt="Prisma"
              />
              <h5 className="row text-center  text-xl text">Prisma</h5>
            </div>
            <div className="col-span  grid items-center justify-center  mt-10">
              <Image
                className="icons row"
                src={theme === "dark" ? nextjsdark : nextjslight}
                alt="Nextjs"
              />
              <h5 className="row text-center  text-xl text">NextJS</h5>
            </div>
          </div>
          <div className="heading text text-3xl my-10">Databases</div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid  items-center justify-center ">
              <Image className="icons row" src={icon13} alt="Firebase" />
              <h5 className="row text-center  text-xl text">Firebase</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon14} alt="MongoDB" />
              <h5 className="row text-center  text-xl text">MongoDB</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image
                className="icons row"
                src={cockroachdb}
                alt="CockroachDb"
              />
              <h5 className="row text-center  text-xl text">CockroachDB</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={postgresql} alt="Postgresql" />
              <h5 className="row text-center  text-xl text">PostgreSQL</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={mysql} alt="MySql" />
              <h5 className="row text-center  text-xl text">MySQL</h5>
            </div>
          </div>
          <div className="heading text text-3xl my-10">Version Control</div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid  items-center justify-center ">
              <Image
                className="icons row"
                src={theme === "dark" ? icon15dark : icon15light}
                alt="Git"
              />
              <h5 className="row text-center text-xl text">Git</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image
                src={theme === "dark" ? icon16dark : icon16light}
                className="icons row"
                alt="GitHub"
              />
              <h5 className="row text-center  text-xl text">GitHub</h5>
            </div>
          </div>
          <div className="heading text text-3xl my-10">Design Tools</div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid  items-center justify-center ">
              <Image
                className="icons row"
                src={theme === "dark" ? icon17dark : icon17light}
                alt="Figma"
              />
              <h5 className="row text-center  text-xl text">Figma</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon18} alt="Canva" />
              <h5 className="row text-center  text-xl text">Canva</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon19} alt="Illustrator" />
              <h5 className="row text-center  text-xl text">Illustrator</h5>
            </div>
          </div>
          <div className="heading text text-3xl my-10">IDE</div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="col-span grid  items-center justify-center ">
              <Image className="icons row" src={icon20} alt="VS code" />
              <h5 className="row text-center  text-xl text">VS code</h5>
            </div>
            <div className="col-span  grid items-center justify-center ">
              <Image className="icons row" src={icon21} alt="studio" />
              <h5 className="row text-center  text-xl text">Android Studio</h5>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1"></div>
      </section>
      <div className="line mt-24 w-full"></div>
      <div className="text-center my-5  text-2xl">
        “You cannot be a 100% Engineer.”
      </div>
    </div>
  );
}
