"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"

export default function Navbar() {
  const [state, setState] = React.useState(false)
  const loginSectionRef = React.useRef<HTMLDivElement | null>(null);

  const menus = [
    { title: "Features", path: "/features" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Login/Signup", path: "/#login" },
  ]

  const handleLoginClick = () => {
    if (loginSectionRef.current) {
      loginSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setState(false);
  };

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-600">Convey</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                {item.title === "Login/Signup" ? (
                  <a href={item.path} onClick={handleLoginClick}>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.path}>{item.title}</Link>
                )}
              </li>
            ))}
            <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  )
}