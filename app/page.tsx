"use client";
import Image from "next/image";
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent blur-2xl opacity-50"></div>
            <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 flex flex-col justify-between">
              
              <div className="flex justify-between items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700/60 shadow-lg shrink-0">
                  <Image 
                    src="/profile.png" 
                    alt="Souptik Pramanik" 
                    fill 
                    className="object-cover" 
                    sizes="64px" 
                    priority 
                  />
                </div>