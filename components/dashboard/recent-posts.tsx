"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentPosts = [
  {
    title: "Getting Started with Next.js",
    status: "Published",
    views: 1234,
    date: "2024-03-20",
  },
  {
    title: "The Art of Writing",
    status: "Draft",
    views: 0,
    date: "2024-03-19",
  },
  {
    title: "10 Tips for Better Content",
    status: "Published",
    views: 856,
    date: "2024-03-18",
  },
  {
    title: "Understanding SEO",
    status: "Published",
    views: 654,
    date: "2024-03-17",
  },
];

export function RecentPosts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentPosts.map((post) => (
          <TableRow key={post.title}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.status}</TableCell>
            <TableCell>{post.views}</TableCell>
            <TableCell>{post.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}