"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { startTransition, useTransition } from "react";

import { useRouter } from "next/navigation";
import { deleteBlog } from "../../_actions/blogs";

export function DeleteDropdownItem({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      // variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteBlog(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
}
