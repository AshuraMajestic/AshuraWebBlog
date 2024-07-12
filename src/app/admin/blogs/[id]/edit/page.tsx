import PageHeader from "@/app/admin/_components/PageHeader";

import db from "@/db/db";
import BlogForm from "../../_components/BlogForm";

export default async function EditBlogsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = await db.post.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>Edit Blog</PageHeader>
      <BlogForm blog={blog} />
    </>
  );
}
