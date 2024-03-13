import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  console.log("Executing");
  return (
    <main>
      <Header />
      <p>
        <Link href="/about"> About</Link>
      </p>
    </main>
  );
}
