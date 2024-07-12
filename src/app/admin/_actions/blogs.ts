"use server";

import db from "@/db/db";
import { z } from "zod";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const addSchema = z.object({
  title: z.string().min(1),
  introduction: z.string().min(1),
  content: z.string().min(1),
  minutes: z.string().min(1),
});

export async function addBlog(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await db.post.create({
    data: {
      title: data.title,
      introduction: data.introduction,
      content: data.content,
      minutes: data.minutes,
    },
  });
  revalidatePath("/");
  revalidatePath("/blogs");
  redirect("/admin/blogs");
}

export async function updateBlog(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const blog = await db.post.findUnique({ where: { id } });

  if (blog == null) return notFound();

  await db.post.update({
    where: { id },
    data: {
      title: data.title,
      introduction: data.introduction,
      content: data.content,
      minutes: data.minutes,
    },
  });
  revalidatePath("/");
  revalidatePath("/blogs");
  redirect("/admin/blogs");
}

export async function deleteBlog(id: string) {
  const blog = await db.post.delete({ where: { id } });
  if (blog == null) return notFound();
  revalidatePath("/");
  revalidatePath("/blogs");
}
