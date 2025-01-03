"use client";
import Image from "next/image";
import logoLight from "../assets/logolight.png";
import logoDark from "../assets/logodark.png";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;
  return (
    <footer className=" shadow-lg hidden sm:block md:block bottom-0 w-full z-50">
      <section className="grid grid-cols-5 ">
        <div className="hidden md:block lg:block md:col-span-1 lg:col-span-1 "></div>
        <div className="sm:col-span-5 md:col-span-3 lg:col-span-3   flex items-center">
          <div className="container mx-auto flex items-center justify-between h-24 z-100">
            <div className="flex items-center">
              <Image className="h-16 w-20 rounded-full pp" src={logo} alt="" />
              <span className="ml-4 logo-text uppercase font-black">
                Krutva
                <br />
                Blogs
              </span>
              <div className="horizontal mx-3"></div>
              <span className="sub-text">Copyright © 2024 @krutvapatel
              </span>
            </div>
            <div className="flex items-center">
              <span className="sub-text text-right">
                Designed
                <br />
                By
              </span>
              <div className="horizontal mx-3"></div>
              <span className="logo-text uppercase font-black text">
                Krutva <br />
                patel
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:block md:col-span-1 lg:col-span-1"></div>
      </section>
    </footer>
  );
}
