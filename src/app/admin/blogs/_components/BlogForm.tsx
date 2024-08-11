"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addBlog, updateBlog } from "../../_actions/blogs";
import { Post } from "@prisma/client";

export default function BlogForm({ blog }: { blog?: Post | null }) {
  const [error, action] = useFormState(
    blog == null ? addBlog : updateBlog.bind(null, blog.id),
    {}
  );

  return (
    <form className="space-y-8" action={action} encType="multipart/form-data">
      <div className="space-y-2">
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={blog?.title || ""}
        />
        {error.title && <div className="text-destructive">{error.title}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="introduction">Introduction</Label>
        <Input
          type="text"
          id="introduction"
          name="introduction"
          defaultValue={blog?.introduction || ""}
          required
        />
        {error.introduction && (
          <div className="text-destructive">{error.introduction}</div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          defaultValue={blog?.content || ""}
          required
        />
        {error.content && (
          <div className="text-destructive">{error.content}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="minutes">Minutes</Label>
        <Input
          type="text"
          id="minutes"
          name="minutes"
          defaultValue={blog?.minutes || ""}
          required
        />
        {error.minutes && (
          <div className="text-destructive">{error.minutes}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="images">Upload Images</Label>
        <Input
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
        />
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
