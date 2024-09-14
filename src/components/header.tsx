import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ReactNode } from "react";
import { HEADER_LINK } from "./data/header-links";
import "./header.css";

export default function Header(): ReactNode {
  return (
    <div className="flex flex-col min-w-full sticky top-0 z-50">
      <div className="flex flex-row items-center gap-2 bg-gray-800 p-4 h-16">
        <label
          htmlFor="sidebar-toggle"
          className="flex flex-row items-center sm:hidden hover:cursor-pointer"
        >
          <Bars3Icon className="size-8 fill-white pr-2" />
          <span className="inline h-fit pr-4 text-2xl font-bold">agus.dev</span>
        </label>
        <Link href="/" className="hidden sm:inline">
          <span className="inline h-fit pr-4 text-2xl font-bold">agus.dev</span>
        </Link>

        <aside className="hidden sm:flex flex-row h-fit gap-4 text-sm">
          {HEADER_LINK.map((link) => (
            <Link
              href={link.target}
              target="_blank"
              className="inline"
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </aside>
      </div>
      <input
        id="sidebar-toggle"
        type="checkbox"
        className="peer/sidebar-toggle hidden"
      />
      <div className="sidebar fixed bg-black bg-opacity-80 top-16 min-h-[150vh] transition-width duration-500 ease-out min-w-0 max-w-0 overflow-hidden peer-checked/sidebar-toggle:min-w-full sm:peer-checked/sidebar-toggle:min-w-0">
        <div className="flex flex-col gap-4 pt-4 text-2xl min-w-max">
          {HEADER_LINK.map((link) => (
            <div key={link.key}>
              <Link href={link.target} target="_blank" className="px-4">
                {link.sidebarIcon}
                <span className="pl-2">{link.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
