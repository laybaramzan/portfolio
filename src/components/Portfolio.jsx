import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Layout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const Smartphone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const Globe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Send = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Linkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Code2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "https://kaveolah.com/",
      image: "/images/kaveolah.png", // put image in public/images
    },
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "https://laiba-ramzan.myshopify.com/",
      image: "/images/clifton.png", // put image in public/images
      password: "clifton",
    },
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "https://belforart.com/",
      image: "/images/belfor.png", // put image in public/images
      password: "belfor@123",
    },
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "https://printdecor-com-au.myshopify.com/",
      image: "/images/printdecor.png", // put image in public/images
      password: "1122",
    },
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "https://gamebreaker-com.myshopify.com/",
      image: "/images/gamebreaker.png", // put image in public/images
      password: "biweam",
    },
    {
      title: "Modern E-Commerce",
      desc: "A high-performance Shopify store with custom Liquid sections.",
      tech: ["Shopify", "Liquid", "CSS3", "JS", "HTML"],
      link: "fmvx1v-fw.myshopify.com",
      image: "/images/orthorejuv.png", // put image in public/images
    },
    {
      title: "React Website",
      desc: "Frontend of doctor's appointment booking website",
      tech: ["React", "Tailwind"],
      link: "https://doctors-appointment-booking-website.vercel.app/",
      image: "/images/prescripto.png", // put image in public/images
    },
    {
      title: "React Website",
      desc: "Frontend of online book store website",
      tech: ["React", "Tailwind"],
      link: "https://my-online-bookstore-phi.vercel.app/",
      image: "/images/shopper.png", // put image in public/images
    },
    {
      title: "Luxury Brand Site",
      desc: "Frontend of gift purchasing website",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://gift-shop-website.vercel.app/",
      image: "/images/gifto.png", // put image in public/images
    },
    {
      title: "Luxury Brand Site",
      desc: "Frontend of dummy website for a company",
      tech: ["HTML", "Bootstrap"],
      link: "https://company-website-iota-eight.vercel.app/",
      image: "/images/company.png", // put image in public/images
    },
  ];

  const skills = [
    { name: "React", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Shopify", level: "95%" },
    { name: "WordPress", level: "90%" },
    { name: "UI/UX Design", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "Bootstrap", level: "85%" },
    { name: "JSX", level: "95%" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            LR.
          </motion.div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            {["About", "Projects", "Skills", "Experience", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-blue-400"
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm mb-6 inline-block">
              Available for Freelance
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
              Laiba{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ramzan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Frontend Developer Building modern, responsive, and user-friendly
              web experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 italic text-blue-400">
                / About Me
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I specialize in bridging the gap between design and code. With
                expertise in <span className="text-white">React</span> and{" "}
                <span className="text-white">Tailwind</span>, I build interfaces
                that aren't just functional, but emotional.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether it's a high-converting{" "}
                <span className="text-white">Shopify store</span> or a custom{" "}
                <span className="text-white">WordPress experience</span>, I
                focus on performance, accessibility, and pixel-perfect UI/UX
                design.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Layout />, label: "UI/UX Design" },
                { icon: <Code2 />, label: "Web Dev" },
                { icon: <Smartphone />, label: "Responsive" },
                { icon: <Globe />, label: "SEO Optimized" },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center"
                >
                  <div className="text-blue-400 mb-4">{box.icon}</div>
                  <span className="font-semibold">{box.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 italic text-purple-400">
                / Projects
              </h2>
              <p className="text-gray-400">A selection of my recent works.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                    {project.password && (
                      <p className="text-sm text-gray-300 mb-2">
                        Password:{" "}
                        <span className="font-bold text-white">
                          {project.password}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-6 text-sm">{project.desc}</p>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center italic text-pink-400">
            / My Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                <span className="text-lg font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 italic text-blue-400">
            / Experience
          </h2>
          <div className="space-y-12">
            {[
              {
                role: "Shopify Developer",
                company: "Slashcart Pvt Limited",
                date: "March 2025 - Present",
                desc: "Developing E-commerce solutions for international clients using Liquid, JS, HTML, CSS.",
              },
              {
                role: "Frontend Web Intern",
                company: "Cravetech",
                date: "3 Months",
                desc: "Collaborated on building responsive UI components and optimizing website performance.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-blue-500 rounded-full" />
                <span className="text-sm text-gray-500 mb-2 block">
                  {exp.date}
                </span>
                <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                <p className="text-blue-400 mb-4">{exp.company}</p>
                <p className="text-gray-400">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="flex flex-col items-center gap-8">
              <form
                action="https://formspree.io/f/mreozdqd"
                method="POST"
                className="w-full max-w-md space-y-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />

                <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                  Send Message <Send size={18} />
                </button>
              </form>

              <div className="flex gap-6 mt-8">
                <a
                  href="https://github.com/laybaramzan"
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/laiba-ramzan972/"
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="laibaramzan972@gmail.com"
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Laiba Ramzan. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
