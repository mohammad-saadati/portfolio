"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "درباره", id: "about" },
  { label: "تجربه", id: "experience" },
  { label: "خدمات", id: "services" },
  { label: "قیمت‌گذاری", id: "pricing" },
  { label: "تماس", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold text-white">
          <span className="text-primary">منتورتو</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
