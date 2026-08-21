import Link from "next/link";
import { Home, User, Layout, ExternalLink, Clock } from "lucide-react";
import { projects } from "../../data/portfolioData";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-800">
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <nav className="pointer-events-auto mx-auto flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <User className="w-3.5 h-3.5" /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-white text-xs font-medium transition-colors">
            <Layout className="w-3.5 h-3.5" /> Projects
          </Link>
        </nav>
      </header>

      <main className="px-6 sm:px-12 max-w-5xl mx-auto pt-32 sm:pt-48 pb-24">
        <h1 className="text-4xl font-bold text-white mb-12">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-all duration-500 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 group-hover:translate-x-1 duration-500">
                <ExternalLink className="w-5 h-5 text-zinc-500" />
              </div>
              
              <div className="z-10">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="z-10 flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider rounded-full bg-zinc-950/50 border border-zinc-800/50 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Clock className="w-3.5 h-3.5" /> {project.readTime}
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors">
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}