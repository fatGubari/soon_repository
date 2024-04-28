import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ms;p-24 ${inter.className}`}
    >
      <h1 className="font-medium sm:text-9xl text-center animate-ping text-5xl">Soon</h1>
    </main>
  );
}
