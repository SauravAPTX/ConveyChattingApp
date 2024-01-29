import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeModeToggle } from "./themeModeToggle";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const loginSectionRef = React.useRef<HTMLDivElement | null>(null);

  const menus = [
    { title: "Features", path: "/features" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Login/Signup", path: "/login" },
  ];

  const handleLoginClick = () => {
    if (loginSectionRef.current) {
      loginSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false);
    }
  };

  const { theme } = useTheme();
  const navbarColor = theme === "light" ? "bg-white" : "bg-black";
  const navbarOpacity = isMenuOpen===false ? "opacity-70" : "opacity-100";

  return (<ThemeProvider 
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange>
    <nav className={`${navbarColor} ${navbarOpacity} sticky top-0 z-[1]  w-full border-b md:border-0`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-600">Convey</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className=" hover:text-indigo-600">
                {item.title === "Login/Signup" ? (
                  <a href={item.path} onClick={handleLoginClick}>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.path}>{item.title}</Link>
                )}
              </li>
            ))}<ThemeModeToggle/>
          </ul>
          <button
            className="block md:hidden bg-purple-600 text-white py-2 px-4 mt-4 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </nav>
    </ThemeProvider>
  );
}
