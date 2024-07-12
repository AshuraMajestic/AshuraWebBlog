type BlogCardProps = {
  id: string;
  title: string;
  content: string;
  introduction: string;
  createdAt: Date;
  username: string;
};
import Image from "next/image";
import IMG from "../../../assets/pp.png";
import Link from "next/link";

export function BlogCard({
  id,
  title,
  introduction,
  createdAt,
  username,
}: BlogCardProps) {
  return (
    <div key={id} className="blog bg-black grid row w-100 my-5 px-8 rounded-xl">
      <div className="row my-4 text-white font-bold text-3xl">
        <h1>{title}</h1>
      </div>
      <div className="row flex flex-row items-center ">
        <Image src={IMG} alt="profile" className="w-9 rounded-full" />
        <p className="ml-2 text-white">{username}</p>
        <p className="ml-5 text-white">
          {createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="row my-3 text-white text-xl">
        <p>{introduction}</p>
      </div>
      <div className="row my-5">
        <Link href={`/blog/${id}`}>
          <button className="px-2 py-2 rounded-md text-white font-semibold">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
{
  /* 
            {myData.length > 0 ? (
              myData.map((post) => (
                
              ))
            ) : (
              <p className="text-white">No blog posts available.</p>
            )}
          </div> */
}
