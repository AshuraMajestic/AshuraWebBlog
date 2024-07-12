"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logoLight from "../assets/logolight.png";
import logoDark from "../assets/logodark.png";
import Image from "next/image";
import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <header className="shadow-lg fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex items-center h-24">
        <a href="/" className="flex items-center justify-center">
          <Image className="h-16 w-16" src={logo} alt="Ashura Blogs Logo" />
          <span className="ml-4 logo-Text uppercase font-black">
            Ashura
            <br />
            Blogs
          </span>
        </a>
        <div className="flex items-center ml-auto md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`fixed top-0 right-0  h-full w-4/5 p-4 flex flex-col items-center justify-center transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform md:contents font-semibold text-base lg:text-lg md:static md:flex-row md:bg-transparent md:transform-none`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4  focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center md:flex-row md:mx-auto">
            <li
              className={`p-5 xl:p-8 ${pathname === "/" ? "active-link" : ""}`}
            >
              <Link href="/" onClick={closeMenu}>
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`p-5 xl:p-8 ${
                pathname === "/aboutme" ? "active-link" : ""
              }`}
            >
              <Link href="/aboutme" onClick={closeMenu}>
                <span>About Me</span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center mt-4 md:mt-0">
            <DarkModeToggle
              className="transition"
              isChecked={theme === "dark"}
              handleToggle={toggleTheme}
            />
            <button
              className={`border rounded-full font-bold px-8 py-2 ml-4 ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link href="/contact" onClick={closeMenu}>
                <span>Contact me</span>
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
