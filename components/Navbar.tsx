"use client"; 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname(); 

  type LinkClassFunction = (path: string) => string;

  const linkClass: LinkClassFunction = (path) =>
    pathname === path
      ? "text-blue-500"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/cmp" className={linkClass("/cmp")}>
          Camp
        </Link>
        <Link href="/info" className={linkClass("/info")}>
          Info
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/login" className={linkClass("/login")}>
          Login
        </Link>
        <Link href="/register" className={linkClass("/register")}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
