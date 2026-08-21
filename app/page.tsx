import Image from "next/image";
import Link from "next/link";
import { Clock, Send, ExternalLink, ArrowRight } from "lucide-react";
import { personalInfo, projects } from "../data/portfolioData";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      
      {/* Premium Background: Subtle Grid + Glowing Top Orb */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed left-0 right-0 top-[-10%] -z-10 m-auto h-[300px] w-[300px] rounded-full bg-purple-500 opacity-20 blur-[120px]"></div>

      {/* Floating Centered Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav aria-label="Main Navigation" className="flex items-center gap-6 px-8 py-3 rounded-full bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-xl shadow-2xl">
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
          <a href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      <main className="px-6 sm:px-12 md:px-24 max-w-5xl mx-auto pt-32 pb-24 space-y-40">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col-reverse md:flex-row gap-16 items-center justify-between scroll-mt-32">
          
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open for opportunities
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm {personalInfo.name.split(' ')[0]}.
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-400">
                Data Science & AI Systems.
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all">
                Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-5">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">GitHub</a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-zinc-800/50 bg-zinc-900 shadow-2xl">
              <Image src="/profile.png" alt={personalInfo.name} fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500" sizes="(max-width: 768px) 192px, 256px" priority />
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="space-y-12 scroll-mt-32">
          <div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Selected Work</h3>
            <p className="text-zinc-400 mt-2">Pipelines, automations, and intelligent algorithms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 group-hover:translate-x-1 duration-500">
                  <ExternalLink className="w-5 h-5 text-zinc-500" />
                </div>
                
                <div className="z-10">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-3">{project.description}</p>
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
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors before:absolute before:inset-0">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimalist Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto scroll-mt-32">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            <div className="space-y-2 mb-10 text-center">
              <h3 className="text-3xl font-bold text-white tracking-tight">Get in Touch</h3>
              <p className="text-zinc-400 text-sm">Send a message and I'll get back to you soon.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              <input type="hidden" name="access_key" value="e4a55b55-72b5-490e-9f72-a83ca7d1016d" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" name="name" required className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Your Name" />
                <input type="email" name="email" required className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Email Address" />
              </div>
              
              <textarea name="message" required rows={4} className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="How can I help you?"></textarea>
              
              <button type="submit" className="group w-full py-4 rounded-2xl bg-white text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}