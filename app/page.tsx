"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm Sudhanshu
        </motion.h1>
        <div 
          className="absolute top-1/2 left-1/2 
          w-[700px] h-[400px] 
          -translate-x-1/2 -translate-y-1/2 
          rounded-full blur-3xl opacity-70"
          style={{ animation: "glowAnimation 12s ease-in-out infinite" }}
        ></div>
        <TypeAnimation
          sequence={[
            "Software Developer",
            1000,
            "Web Developer",
            1000,
            "React Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-2xl text-gray-400 mb-6"
        />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 md:px-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-3xl">
          I'm a passionate software developer focused on building modern, responsive web applications. I enjoy solving real-world problems and continuously learning new technologies to improve my skills.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 md:px-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="bg-gray-900 p-6 rounded-2xl 
        hover:scale-105 hover:shadow-2xl 
        hover:shadow-purple-500/20 
        transition duration-300">
          <h3 className="text-xl font-semibold mb-2">E-Commerce Website</h3>
          <p className="text-gray-400 mb-4">
            Full-stack app with authentication, cart, and payments.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-blue-400">Live</a>
            <a href="#" className="text-gray-400">GitHub</a>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-4">
          Feel free to reach out for opportunities.
        </p>
        <a href="mailto:your@email.com" className="text-blue-400">
          Send Email
        </a>
      </motion.section>
    </main>
  );
}