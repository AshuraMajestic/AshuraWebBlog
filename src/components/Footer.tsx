import Image from "next/image";
import pp from "../assets/pp.png";

export default function Footer() {
  return (
    <footer className=" shadow-lg hidden sm:block md:block bottom-0 w-full z-50">
      <section className="grid grid-cols-5 ">
        <div className="hidden md:block lg:block md:col-span-1 lg:col-span-1 "></div>
        <div className="sm:col-span-5 md:col-span-3 lg:col-span-3   flex items-center">
          <div className="container mx-auto flex items-center justify-between h-24 z-100">
            <div className="flex items-center">
              <Image className="h-16 w-16 rounded-full pp" src={pp} alt="" />
              <span className="ml-4 logo-text uppercase font-black">
                Ashura
                <br />
                Blogs
              </span>
              <div className="horizontal mx-3"></div>
              <span className="sub-text">Copyright © 2024 @ashuramajestic</span>
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
