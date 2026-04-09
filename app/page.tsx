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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {[
            {
              title: "E-Commerce",
              desc: "Full-stack app with auth, cart & payments.",
              link: "https://github.com/",
              color: "bg-purple-900"
            },
            {
              title: "Portfolio",
              desc: "Personal portfolio with animations.",
              link: "https://github.com/",
              color: "bg-blue-900"
            },
            {
              title: "Chat App",
              desc: "Realtime chat using sockets.",
              link: "https://github.com/",
              color: "bg-pink-900"
            },
            {
              title: "Dashboard",
              desc: "Admin dashboard with analytics.",
              link: "https://github.com/",
              color: "bg-indigo-900"
            }
          ].map((project, i) => (

            <div key={i} className="group perspective">

              <div className="relative w-full h-72 transition-transform duration-1200 transform-style preserve-3d group-hover:rotate-y-180">

                {/* FRONT */}
                <div className={`absolute w-full h-full ${project.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold backface-hidden group-hover:shadow-xl group-hover:shadow-purple-500/20`}>
                  {project.title}
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full bg-gray-900 rounded-2xl flex flex-col items-center justify-center text-center px-4 rotate-y-180 backface-hidden">
                  <p className="text-sm mb-4">{project.desc}</p>
                  <a href={project.link} target="_blank" className="text-purple-400 hover:underline">
                    GitHub →
                  </a>
                </div>

              </div>
            </div>

          ))}

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