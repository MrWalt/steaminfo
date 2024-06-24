"use client";

import Link from "next/link";

import {
  NewspaperIcon,
  UserCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Lookup User",
    href: "/lookup",
    icon: <UserCircleIcon className="h-6 w-6" />,
  },
  {
    name: "Search Items",
    href: "/items",
    icon: <KeyIcon className="h-6 w-6" />,
  },
  {
    name: "News",
    href: "/news",
    icon: <NewspaperIcon className="h-6 w-6" />,
  },
];

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-1 text-md">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`hover:bg-primary-500 flex gap-2 px-8 py-4 items-center transition-colors ${
              pathname === link.href ? "bg-primary-500 text-accent-400" : ""
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
