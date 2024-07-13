# Making AshuraWebBlog using Prisma and Nextjs

# Steps:
###  Step 1: Intilaizing app 
###  Step 2: Intilaizing database
###  Step 3: Making admin side
###  Step 4: Designing admin side
###  Step 5: Admin Authentication
###  Step 6: Frontend 

## Step 1: Intilaizing app 

```code
mkdir ashurawebblog
cd ashurawebblog
npx create-next-app@latest .
```

you will get somthing like this

```code 
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
Creating a new Next.js app in D:\Projects\Full_Stack_Project\ashurablog.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next
```

Give yes to all and your next js project is ready, you can see it using `npm run dev`


## Step 2: Intilaizing database

We will be Using Prisma with postgres in cockroachdb

```code
npm install --save-dev ts-node
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```

Change your DATABASE_URL in .env according to your database configuration

### Now we will create model for the blog

Go to `prisma/schema.prisma` and make the models
```javascript
model Post {
  id           String   @id @default(uuid())
  title        String
  introduction String
  content      String
  minutes      String
  username     String   @default("AshuraMajestic")
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

Now create a `db/db.ts` folder in src directory and add following code
```javascript
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

```

Now install and add everything needed

```code
 npx prisma generate
 npx prisma migrate dev --name init
```

## Step 3: Making admin side

First install shadcn ui for our admin frontend

```code 
npx shadcn-ui@latest init
```

Now we will change our `layout.tsx` in the src/app folder
```javascript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashura Web Blog",
  description:
    "A Web Blog created to share various blogs related to the computer programming",
  authors: [
    {
      name: "Ashura Majestic",
      url: "https://github.com/AshuraMajestic",
    },
    {
      name: "Krutva Patel",
      url: "https://www.linkedin.com/in/krutva-patel-0a9498257",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
```

Now open `tailwind.config.ts` and addd following lines 

```javascript
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
          },
  },
}
}
```

Now edit the `page.tsx`

```javascript


export default function Home() {
  return <>HEllO</>;
}

```

### Now we are ready to go and start our admin side

now lets start

```code 
cd src
cd app
mkdir admin
cd admin 
type nul > layout.tsx
type nul > page.tsx
```

### now add the following code in `layout.tsx`

```javascript
import { Nav, NavLink } from "@/components/Nav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">DashBoard</NavLink>
        <NavLink href="/admin/blogs">Blogs</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}

```

### now Edit the following code in `page.tsx`

```javascript
export default function AdminDashboard() {
  return <>Dahsboard</>;
}

```

### now go to Components folder and add `Nav.tsx` and add the code below

```javascript

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}

```

##  Step 4: Designing admin side

Go to `admin/page.tsx` adn add following code
```javascript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db";

async function getBlogsData() {
  const data = await db.post.aggregate({
    _count: true,
  });
  return {
    blogs: data._count,
  };
}
export default async function AdminDashboard() {
  const [blogCount] = await Promise.all([getBlogsData()]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Blogs"
        body={blogCount.blogs.toString()}
      ></DashboardCard>
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  body: string;
};
function DashboardCard({ title, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
```

Install cards ui from shadcn to use

```code
npx shadcn-ui@latest add card
```


Add a `loading.tsx` in admin directory for loading animation

```javascript
import { Loader2 } from "lucide-react";
import React from "react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  );
}

```

Now install  shadcn ui for designign

```code
npm install zod --save-dev
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
npx shadcn-ui@latest add button
npx shadcn-ui@latest add table

```

Now add a `blogs` in admin directory and then add `page.tsx` in the post directory then we will add some code in it for posting our blog 

```javascript 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { MoreVertical } from "lucide-react";

import PageHeader from "../_components/PageHeader";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DeleteDropdownItem } from "./_components/BlogActions";

export default function AdminBlogsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/blogs/new">Add Blogs</Link>
        </Button>
      </div>
      <BlogsTable />
    </>
  );
}

async function BlogsTable() {
  const blogs = await db.post.findMany({
    select: {
      id: true,
      title: true,
      minutes: true,
      username: true,
    },
    orderBy: { username: "asc" },
  });

  if (blogs.length === 0) return <p>No blogs found</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Minutes</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell>{blog.title}</TableCell>
            <TableCell>{blog.minutes}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/blogs/${blog.id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DeleteDropdownItem id={blog.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

```

Now make a new directory in `admin` directory named `_components` and add  `PageHeader.tsx` in it

```javascript
import { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl mb-4">{children}</h1>;
}

```

Now make a new directory in blogs directory named `new` and add  `page.tsx` in it

```javascript
import PageHeader from "../../_components/PageHeader";
import BlogForm from "../_components/BlogForm";

export default function NewBlogPage() {
  return (
    <>
      <PageHeader>Add Blog</PageHeader>
      <BlogForm />
    </>
  );
}

```

Now make another directory named `_componenets` in the `blogs` directory

Add `BlogForm.tsx` in `blogs/_components`

```javascript
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
    <form className="space-y-8" action={action}>
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
```

Add `BlogActions.tsx` in `blogs/_components`

```javascript
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
```

Now go to `admin` folder and add a directory named `_actions`

Add new file in it `blogs.ts`

```javascript
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

```

Now add `[id]/edit` directory in blogs and add a file `page.tsx` in it
```javascript
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

```

Now our admin side is ready to go 

## Step 5: Admin Authentication

For admin Authentication make a `middleware.ts` in `src` directory

Add ther following Code

```javascript
import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isValidPassword";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}
async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (authHeader == null) {
    return false;
  }
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(password, process.env.ADMIN_PASSWORD as string))
  );
}

export const config = {
  matcher: "/admin/:path*",
};

```

Now add a `isValidPassword.ts` in `src/libs` directory

```ts
export async function isValidPassword(password: string, hashPassword: string) {
  return (await hashedPassword(password)) === hashPassword;
}

async function hashedPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );
  return Buffer.from(arrayBuffer).toString("base64");
}

```

Now you will be only able to go to admin side if you enter a password

Now you have to add both password and username in the .env folder

```.environment

ADMIN_USERNAME=Hello
ADMIN_PASSWORD=huhuoihuiodhws483809i===
```

- You can get hashed password by making the middleware.ts return false 
- Then You Have to add console.log(hashedPassword(password)) in the isValidPassword() file and then when you enter ther password in the page you will get hashewd version and you can then use it for yourself 
- Dont forget to call the function of isValidPassword

 
## Step 6: Frontend
Design as you needed 