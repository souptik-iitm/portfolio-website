import Link from "next/link";
import Image from "next/image";
import { Home, User, Layout } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-800 pb-24 overflow-x-hidden">
      
      {/* Background Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 pointer-events-none">
        <div className="text-xs font-mono text-zinc-500 hidden md:block">India</div>
        <nav className="pointer-events-auto mx-auto flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Home className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Home</span>
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-zinc-800 text-white text-xs font-medium transition-colors">
            <User className="w-3.5 h-3.5" /> <span className="hidden sm:inline">About</span>
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Layout className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Projects</span>
          </Link>
        </nav>
        <div className="text-xs font-mono text-zinc-500 hidden md:block">Profile</div>
      </header>

      <main className="px-4 sm:px-12 max-w-5xl mx-auto pt-32 sm:pt-48">
        
        {/* Apple-style Hero Heading */}
        <div className="max-w-3xl space-y-6 mb-16">
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-extrabold tracking-tighter text-white leading-[1.1]">
            About Me.
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 font-medium tracking-tight leading-relaxed max-w-2xl">
            I'm a Data Science student blending algorithms, creativity, and a touch of nature.
          </p>
        </div>

        {/* Apple Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Box 1: Academics (Col span 2) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] bg-zinc-900/30 border border-zinc-800/50 p-8 sm:p-10 group hover:bg-zinc-900/50 transition-colors duration-500">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="text-4xl sm:text-5xl">🎓</div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">The Academic Journey</h2>
                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                  I recently cleared my qualifiers and am actively pursuing the <a href="https://study.iitm.ac.in/ds/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all font-semibold">IIT Madras BS in Data Science</a> program. My focus is deeply rooted in building strong foundational logic for modern Machine Learning applications.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: Tech Stack (Col span 1) */}
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900/30 border border-zinc-800/50 p-8 sm:p-10 group hover:bg-zinc-900/50 transition-colors duration-500">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="text-4xl sm:text-5xl">💻</div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-3">Tech Stack</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Heavy focus on Python, Pandas, and analytics within my highly customized <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white font-semibold transition-all">VS Code</a> and Zsh local terminal environments.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Gardening with Image (Col span 1) */}
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800/50 group min-h-[300px]">
            {/* unoptimized tag prevents Next.js image host errors */}
            <Image src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop" alt="Container garden plants" fill unoptimized className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-3xl mb-3">🪴</div>
              <h2 className="text-xl font-bold text-white tracking-tight mb-2">Plant Parent</h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Managing a container garden of Jade, Adeniums, Jasmine, and Money plants.
              </p>
            </div>
          </div>

          {/* Box 4: Cooking with Image (Col span 2) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] bg-zinc-900/30 border border-zinc-800/50 p-8 sm:p-10 group hover:bg-zinc-900/50 transition-colors duration-500 flex flex-col-reverse sm:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="text-4xl sm:text-5xl mb-6">🍳</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">Culinary Explorer</h2>
              <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                When I step away from the keyboard, I'm usually experimenting with regional recipes. I love whipping up stir-fried noodles and testing out Kikkoman soy sauce marinades for chicken and mutton.
              </p>
            </div>
            <div className="relative w-full sm:w-56 h-48 sm:h-full rounded-3xl overflow-hidden border border-zinc-700/50 shrink-0">
              <Image src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop" alt="Stir fry cooking" fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}