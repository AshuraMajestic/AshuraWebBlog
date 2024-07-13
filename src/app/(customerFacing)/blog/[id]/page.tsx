"use server";
import db from "@/db/db";
import BlogDetail from "./_components/BlogDetail";
export default async function BlogShowPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await db.post.findUnique({ where: { id } });
  if (!data) {
    return <>Error</>;
  } else {
    return (
      <BlogDetail
        username={data?.username}
        title={data?.title}
        introduction={data?.introduction}
        content={data?.content}
        minutes={data?.minutes}
        createdAt={data?.createdAt}
      />
    );
  }
}
