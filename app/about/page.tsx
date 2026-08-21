import Link from "next/link";
import { Home, User, Layout } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-800">
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <nav className="pointer-events-auto mx-auto flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white text-xs font-medium transition-colors">
            <User className="w-3.5 h-3.5" /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Layout className="w-3.5 h-3.5" /> Projects
          </Link>
        </nav>
      </header>

      <main className="px-6 sm:px-12 max-w-3xl mx-auto pt-32 sm:pt-48 pb-24">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
          <p>{personalInfo.bio}</p>
          <p>I am passionate about building scalable software and exploring the frontiers of machine learning. Whether I am writing Python scripts or managing my container gardens, I love processes that require patience, growth, and optimization.</p>
        </div>
      </main>
    </div>
  );
}