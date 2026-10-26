"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-md px-4 py-2 font-medium transition-colors duration-300 ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}; 

export default Navlink;