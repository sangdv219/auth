import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton asChild>
            <Button
              variant="secondary"
              size="lg"
              type="button"
              className="bg-white text-gray-900 py-4 px-8 rounded-lg cursor-pointer"
            >
              <Link href="/auth/login">Sign in_____</Link>
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
