import Link from "next/link";
import { Home, User, Layout, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-800">
      
      {/* Very faint background glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px] -z-10 pointer-events-none"></div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <nav className="pointer-events-auto mx-auto flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <User className="w-3.5 h-3.5" /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-xs font-medium transition-colors">
            <Layout className="w-3.5 h-3.5" /> Projects
          </Link>
        </nav>
      </header>

      <main className="px-6 sm:px-12 max-w-2xl mx-auto pt-32 sm:pt-48 pb-24">
        
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">Work with me</h1>
          <p className="text-zinc-400 text-base">Have an idea, project, or opportunity? Send me a message below.</p>
        </div>

        {/* Minimalist Glass Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 relative overflow-hidden">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            
            {/* Hidden Access Key */}
            <input type="hidden" name="access_key" value="e4a55b55-72b5-490e-9f72-a83ca7d1016d" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" name="name" required className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Your Name" />
              <input type="email" name="email" required className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Email Address" />
            </div>
            
            <textarea name="message" required rows={5} className="w-full px-5 py-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="How can I help you?"></textarea>
            
            <button type="submit" className="group w-full py-4 rounded-2xl bg-white text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}