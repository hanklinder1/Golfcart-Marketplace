"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useDemo } from "@/hooks/useDemo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDemo, toggleDemo } = useDemo();

  const prefix = isDemo ? "/demo" : "";

  const links = [
    { href: `${prefix}/marketplace`, label: "Marketplace" },
    { href: `${prefix}/sell`, label: "Sell Your Cart" },
    { href: `${prefix}/dealers`, label: "Dealers" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-white border-b border-sage-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href={isDemo ? "/demo" : "/"}
            className="text-xl font-bold text-sage-800 tracking-tight"
          >
            CartMarket
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sage-600 hover:text-sage-800 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDemo}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                isDemo
                  ? "bg-sky-100 text-sky-700 hover:bg-sky-200"
                  : "bg-sage-100 text-sage-600 hover:bg-sage-200"
              }`}
            >
              {isDemo ? "Exit Demo" : "Try Demo"}
            </button>
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sage-600 hover:text-sage-800 text-sm font-medium transition-colors"
            >
              <User size={16} />
              Sign In
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-sage-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-sage-100 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sage-600 hover:text-sage-800 text-sm font-medium border-b border-sage-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={() => {
                toggleDemo();
                setMobileOpen(false);
              }}
              className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                isDemo
                  ? "bg-sky-100 text-sky-700"
                  : "bg-sage-100 text-sage-600"
              }`}
            >
              {isDemo ? "Exit Demo" : "Try Demo"}
            </button>
            <Link
              href="/login"
              className="text-sage-600 hover:text-sage-800 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
