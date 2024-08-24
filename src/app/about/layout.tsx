interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  console.log("Layout rendered");

  return (
    <div>
      <aside>About Sidebar</aside>
      <div>{children}</div>
    </div>
  );
}
