"use client";
import { useSearchParams } from "next/navigation";

interface PageProps {
  params: {
    title: string;
  };
}

export default function NewsDetail({ params: { title } }: PageProps) {
  const searchParams = useSearchParams();
  const info = searchParams.get("info");
  return (
    <>
      <div>Title: {title}</div>
      <div>info: {info}</div>
    </>
  );
}
