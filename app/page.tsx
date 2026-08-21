import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Code2, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { personalInfo, projects } from "../data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 max-w-7xl mx-auto space-y-24">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 sm:pt-12">
        
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to Collaborations & Projects
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100">
            Hi, I'm {personalInfo.name}.
          </h1>
          
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
            Data Science & AI<br />Systems Enthusiast
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition">GitHub</a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition">LinkedIn</a>
              <a href={`mailto:${personalInfo.socials.email}`} className="text-sm font-medium text-zinc-400 hover:text-white transition">Email</a>
            </div>
          </div>
        </div>

        {/* Profile Card (Right Side) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent blur-2xl opacity-50"></div>
            <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 flex flex-col justify-between">
              
              <div className="flex justify-between items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700/60 shadow-lg shrink-0">
                  <Image 
                    src="/profile.png" 
                    alt={personalInfo.name} 
                    fill 
                    className="object-cover" 
                    sizes="64px" 
                    priority 
                  />
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
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400"><Briefcase className="w-5 h-5" /></div>
            <div className="font-semibold text-zinc-200">Core Stack</div>
          </div>
          <div className="text-sm text-zinc-400">Python, TS & Modern Web</div>
        </div>
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400"><Code2 className="w-5 h-5" /></div>
            <div className="font-semibold text-zinc-200">Architecture</div>
          </div>
          <div className="text-sm text-zinc-400">Modular & Scalable</div>
        </div>
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400"><Sparkles className="w-5 h-5" /></div>
            <div className="font-semibold text-zinc-200">Design Aesthetic</div>
          </div>
          <div className="text-sm text-zinc-400">Modern Dark Bento</div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-zinc-100">Featured Projects</h3>
          <p className="text-zinc-400 mt-1">A showcase of software systems, tools, and technical experiments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-zinc-600 transition">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition">{project.title}</h4>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white"><ExternalLink className="w-5 h-5" /></a>
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}