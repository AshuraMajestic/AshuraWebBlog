"use server";
import db from "@/db/db";
import BlogDetail from "./../_components/BlogDetail";
export default async function BlogShowPage({
  params: { id, slug },
}: {
  params: { id: string; slug: string };
}) {
  const data = await db.post.findUnique({ where: { id } });
  if (!data) {
    return <>Error</>;
  } else {
    return (
      <BlogDetail
        username={"krutvapatel"}
        title={data?.title}
        introduction={data?.introduction}
        content={data?.content}
        minutes={data?.minutes}
        createdAt={data?.createdAt}
      />
    );
  }
}
