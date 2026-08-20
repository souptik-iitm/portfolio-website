"use client";

import React, { useState } from "react";
import { 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Layers, 
  Send, 
  CheckCircle2,
  Sparkles,
  MapPin,
  Briefcase
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo, skills, projects } from "../data/portfolioData";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please contact me directly via email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 bg-grid-pattern px-4 sm:px-8 md:px-16 py-8">
      
      {/* Navigation */}
      <header className="sticky top-6 z-50 max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-2 font-mono text-sm tracking-tight text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{personalInfo.name}</span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white px-3 py-1.5 rounded-full transition hover:bg-zinc-800">About</a>
          <a href="#projects" className="hover:text-white px-3 py-1.5 rounded-full transition hover:bg-zinc-800">Projects</a>
          <a href="#skills" className="hover:text-white px-3 py-1.5 rounded-full transition hover:bg-zinc-800">Skills</a>
          <a href="#contact" className="bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:bg-zinc-200 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {personalInfo.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I&apos;m {personalInfo.name}. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
              {personalInfo.roleHeadline}
            </span>
          </h1>

          <p className="text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-zinc-200 transition text-sm shadow-lg shadow-white/5"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.socials.email}`} className="hover:text-white transition p-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent blur-2xl"></div>
            <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-zinc-800/80 text-indigo-400 border border-zinc-700">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-500 font-mono">LOCATION</div>
                  <div className="text-sm font-semibold flex items-center gap-1 justify-end text-zinc-200">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" /> {personalInfo.location}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500">FOCUS</div>
                <div className="text-base font-semibold text-white">Data Science & Software</div>
                <div className="text-xs text-zinc-400 mt-1">Building intelligent algorithms and clean web apps.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Stats Row */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-16">
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-medium">Core Stack</div>
              <div className="text-sm font-semibold text-zinc-200">Python, TS & Modern Web</div>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-medium">Architecture</div>
              <div className="text-sm font-semibold text-zinc-200">Modular & Scalable</div>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-medium">Design Aesthetic</div>
              <div className="text-sm font-semibold text-zinc-200">Modern Dark Bento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="text-zinc-400 text-sm mt-1">A showcase of software systems, tools, and technical experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition">{item.title}</h3>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <a href={item.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a href={item.liveUrl} className="hover:text-white transition">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
          <p className="text-zinc-400 text-sm mt-1">Technologies, languages, and tools in my workflow.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, sIdx) => (
            <div key={sIdx} className="glass-card px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:border-zinc-600 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Reach-Out Form */}
      <section id="contact" className="max-w-3xl mx-auto py-16">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Let&apos;s Connect</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Have an idea, project, or opportunity? Drop a message below.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center flex flex-col items-center gap-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              <h3 className="text-lg font-semibold text-emerald-300">Message Sent!</h3>
              <p className="text-zinc-400 text-sm">Thank you for reaching out. I will respond as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">YOUR NAME</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Alex" 
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition placeholder-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="alex@example.com" 
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition placeholder-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">MESSAGE</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="Share details about your idea or opportunity..."
                  className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition placeholder-zinc-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="mt-2 w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto pt-16 pb-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}