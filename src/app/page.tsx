import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-1">
      <Button>Click me</Button>
      <Button size={"lg"}>Click me</Button>
    </main>
  );
}
