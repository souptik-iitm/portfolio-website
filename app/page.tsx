import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Home, User, BookOpen, Target, MapPin, Cpu, Layout, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-800">
      
      {/* Custom CSS for the blowing flag animation */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-5deg); }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>

      {/* Very faint background glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      {/* Top Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="text-xs font-mono text-zinc-500 hidden md:block">India</div>
        
        {/* Floating Pill Nav */}
        <nav className="pointer-events-auto mx-auto flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white text-xs font-medium transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <User className="w-3.5 h-3.5" /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Layout className="w-3.5 h-3.5" /> Projects
          </Link>
        </nav>

        <div className="text-xs font-mono text-zinc-500 hidden md:block">17:20 IST</div>
      </header>

      <main className="px-6 sm:px-12 max-w-5xl mx-auto pt-32 sm:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row gap-16 md:gap-8 items-start justify-between">
          
          <div className="flex-1 space-y-8">
            {/* Top Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-medium text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Student @ IIT Madras BS
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-xs font-medium text-zinc-400">
                <Target className="w-3 h-3" />
                Data Science & AI
              </div>
            </div>
            
            {/* Big Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-bold tracking-tighter text-white leading-[1.1]">
                Hi, I'm Souptik.<br />
                Building modern<br />AI Systems.
              </h1>
            </div>
            
            {/* Bio */}
            <p className="text-base text-zinc-400 max-w-md leading-relaxed font-medium">
              Data Science student at IIT Madras by day, building algorithms, clean web apps, and machine learning pipelines the rest of the time.
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <Link href="/contact" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-white hover:scale-105 transition-all">
                Work with me <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/about" className="group flex items-center gap-1 px-5 py-2.5 rounded-full border border-zinc-700 bg-transparent text-white text-sm font-medium hover:bg-zinc-900 transition-all">
                About <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Social Icons (Bulletproof SVGs) */}
            <div className="flex items-center gap-4 pt-4">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={`mailto:${personalInfo.socials.email}`} className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Right Profile Image with Floating Glass Tags */}
          <div className="relative mt-12 md:mt-0 shrink-0 md:pl-20">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-2 border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src="/profile.png" alt={personalInfo.name} fill className="object-cover" priority sizes="(max-width: 768px) 224px, 256px" />
              </div>
            </div>

            {/* Tag 1: Animating Indian Flag */}
            <div className="absolute top-8 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-md shadow-xl z-10">
              <span className="animate-wave text-base origin-bottom-left leading-none">🇮🇳</span>
              <span className="text-xs font-semibold text-white">IIT Madras</span>
            </div>

            {/* Tag 2: Location */}
            <div className="absolute bottom-16 -left-8 flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-md shadow-xl z-10">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-white">India</span>
            </div>

            {/* Tag 3: Focus */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-md shadow-xl z-10">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-semibold text-white">Data Science</span>
            </div>
          </div>
        </section>

        {/* 2x2 Dark Minimalist Grid */}
        <section className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"><Target className="w-5 h-5" /></div>
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Currently</div>
                <div className="text-sm font-bold text-white">Student @ IIT Madras</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"><MapPin className="w-5 h-5" /></div>
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Based In</div>
                <div className="text-sm font-bold text-white">India</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"><BookOpen className="w-5 h-5" /></div>
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Studied At</div>
                <div className="text-sm font-bold text-white">IIT Madras BS</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"><Cpu className="w-5 h-5" /></div>
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Building</div>
                <div className="text-sm font-bold text-white">AI Models & Web Apps</div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}