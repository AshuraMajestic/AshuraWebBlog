import Link from "next/link";
import { BlogCard } from "./_components/BlogsCard";

import db from "@/db/db";

const blogFetcher = () => {
  return db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export default async function HomePage() {
  const blogs = await blogFetcher();
  if (!blogs) {
    <p className="text-white mt-20">No blog posts available.</p>;
  }
  return (
    <div className="container sm:mx-auto md:mx-auto lg:mx-auto home-style mt-24 z-0">
      <div className="grid lg:grid-cols-3 md:grid-cols-5 lg:gap-x-4 sm:grid-cols-1  w-full">
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-3">
          <h1 className="uppercase font-bold text-4xl my-8 heading">
            CODING ARTICLES
          </h1>
          <div className="blogs grid max-sm:max-auto">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
