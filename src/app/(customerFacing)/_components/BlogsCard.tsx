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

function createSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}
export function BlogCard({
  id,
  title,
  introduction,
  createdAt,
  username,
}: BlogCardProps) {
  const slug = createSlug(title);
  return (
    <div key={id} className="blog bg-black grid row w-100 my-5 px-8 rounded-xl">
      <div className="row my-4 text-white font-bold text-3xl">
        <h1>{title}</h1>
      </div>
      <div className="row flex flex-row items-center ">
        <Image src={IMG} alt="profile" className="w-9 rounded-full" />
        <p className="ml-2 text-white">Ashura Majestic</p>
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
        <Link href={`/blog/${id}/${slug}`}>
          <button className="px-3 py-2 rounded-xl font-semibold">
            Read Full Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
