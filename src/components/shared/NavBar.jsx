import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-blue-600 text-white py-5 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link className="text-2xl font-bold" href="/">
          My Site
        </Link>
        <div className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
