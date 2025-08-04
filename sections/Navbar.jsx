"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="text-gray-800 shadow-md bg-white md:fixed sticky w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">Dev Kadere</div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-lg hover:text-blue-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
