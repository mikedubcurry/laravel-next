import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full p-8">
      <Link href="/" className="text-3xl font-bold">
        Digital Moving Technologies
      </Link>
      <div className="flex flex-col w-1/6 gap-4">
        <ul className="flex flex-row items-center justify-between w-full gap-2">
          <li className="w-full">
            <Link
              className="bg-blue-300 p-2 rounded-lg text-gray-700 flex justify-center items-center w-full"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="bg-blue-300 p-2 rounded-lg text-gray-700 flex justify-center items-center w-full"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row items-center justify-between w-full gap-2">
          <li className="w-full">
            <Link
              className="bg-orange-300 p-2 rounded-lg text-gray-700 flex justify-center items-center w-full"
              href="/login"
            >
              Login
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="bg-blue-500 p-2 rounded-lg text-gray-200 flex justify-center items-center w-full"
              href="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
