import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Code2, Sparkles, ArrowRight, ExternalLink, Clock, Send } from "lucide-react";
import { personalInfo, projects } from "../data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 max-w-7xl mx-auto space-y-32">
      
      {/* Top Navigation */}
      <nav aria-label="Main Navigation" className="flex justify-between items-center py-4 px-6 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md sticky top-4 z-50">
        <div className="font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Souptik
        </div>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero & About Section */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-32">
        <div className="lg:col-span-8 space-y-8">
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 animate-fade-in-up">
            Hi, I'm {personalInfo.name}.
          </h1>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
            Data Science & AI Systems Enthusiast
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-200 flex items-center gap-2">
              👋 About Me
            </h3>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Animated Profile Card */}
        <div className="lg:col-span-4 flex justify-center group">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-transparent blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-purple-500/50 transition-colors duration-500">
              
              <div className="flex justify-between items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-700/60 shadow-lg shrink-0">
                  <Image src="/profile.png" alt={personalInfo.name} fill className="object-cover" sizes="64px" priority />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="space-y-8 scroll-mt-32">
        <div>
          <h3 className="text-3xl font-bold text-zinc-100 flex items-center gap-2">🚀 My Work</h3>
          <p className="text-zinc-400 mt-2">A showcase of systems, data pipelines, and technical experiments.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-zinc-600 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-zinc-100">{project.title}</h4>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="text-zinc-500 hover:text-purple-400 transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                  <Clock className="w-3.5 h-3.5" /> {project.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Functional Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto scroll-mt-32 pb-24">
        <div className="glass-card p-8 sm:p-12 rounded-3xl text-center space-y-8 border border-zinc-800">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-zinc-100">Let's Connect 📬</h3>
            <p className="text-zinc-400">Have an idea, project, or opportunity? Send me a message below.</p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 text-left">
            {/* The access key is now securely hidden! */}
            <input type="hidden" name="access_key" value="e4a55b55-72b5-490e-9f72-a83ca7d1016d" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm text-zinc-400 px-1">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Alex" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-zinc-400 px-1">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="alex@example.com" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm text-zinc-400 px-1">Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}