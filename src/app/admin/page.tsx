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
