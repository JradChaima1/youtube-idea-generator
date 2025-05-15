import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <Hero />
      </SignedOut>
    </div>
  );
}

