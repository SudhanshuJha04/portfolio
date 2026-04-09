"use client";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-between px-8 py-4 z-50">
      <h1 className="font-bold text-xl">Sudhanshu</h1>

      <div className="space-x-6 flex items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Toggle
        </button>
      </div>
    </nav>
  );
}