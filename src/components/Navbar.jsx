import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/ourlogo.png";
import { navItems } from "../constants/index.jsx";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-3" src={logo} alt="Logo" />
            <span
              className={`text-xl text-purple-200 tracking-tight ${styles.textShadow}`}
            >
              Our Story
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="transition duration-300 hover:text-purple-300"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-300 to-purple-900 py-2 px-3 rounded-md"
            >
              Unlock Page
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed text-center right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 transition duration-300 hover:text-purple-300"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-300 to-purple-900"
              >
                Unlock Page
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
