interface BlogPageProps {
  params: {
    title: string;
  };
}

export default function BlogPage({ params: { title } }: BlogPageProps) {
  return <div>My Post: {title}</div>;
}
