import  Link  from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full p-8">
      <Link href="/" className="text-3xl font-bold">
        Digital Moving Technologies
      </Link>
      <ul className="flex flex-row items-center justify-between">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex flex-row items-center justify-between">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
    </nav>
  );
}
