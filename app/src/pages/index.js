import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="Digital Moving Technologies Logo"
        width={500}
        height={500}
      />
      <h1 className="text-6xl font-bold">Digital Moving Technologies</h1>
    </div>
  );
}
