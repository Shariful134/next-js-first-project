import Link from "next/link";

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p">
      <h1 className="text-2xl font-bold mb-6">My Sidebar</h1>
      <nav className="space-y-4">
        <Link
          href="/"
          className="block px-4 py-2 rounded hover:bg-gray-100/35 "
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="block px-4 py-2 rounded hover:bg-gray-100/35"
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="block px-4 py-2 rounded hover:bg-gray-100/35 "
        >
          Settings
        </Link>
        {/* <Link
          href="/contact"
          className="block px-4 py-2 rounded hover:text-gray-200 "
        >
          Contact
        </Link>
        <Link
          href="/register"
          className="block px-4 py-2 rounded hover:text-gray-200"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="block px-4 py-2 rounded hover:text-gray-200"
        >
          Login
        </Link> */}
      </nav>
    </div>
  );
};

export default SideBar;
