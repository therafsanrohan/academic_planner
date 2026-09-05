import Link from 'next/link';
import { BookOpen, ChevronRight, LayoutDashboard, Target, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900 overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-violet-400/20 rounded-full blur-[120px] pointer-events-none" />

      <header className="px-6 lg:px-12 h-24 flex items-center justify-between sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-indigo-900">
            Academic Planner
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-8">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors hidden sm:block">
            Log in
          </Link>
          <Link href="/signup" className="group relative inline-flex items-center justify-center text-sm font-semibold text-white px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 sm:py-32 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/60 text-blue-800 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-blue-600" />
            <span>The intelligent way to manage your degree.</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Plan smarter. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Graduate with clarity.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-slate-600 max-w-2xl mx-auto mb-12 animate-fade-in-up font-light" style={{ animationDelay: '200ms' }}>
            Transform your static transcript into a dynamic roadmap. Automatically track completed credits, identify blocking retakes, and map out your perfect trimester in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              href="/signup"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Build My Plan Free
              <ChevronRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500 font-medium animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> No credit card required</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-500" /> Setup in 60 seconds</div>
          </div>
        </div>

        {/* Features Grid */}
        <div id="how-it-works" className="mt-32 sm:mt-40 w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Three simple steps to take absolute control of your academic journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-5 p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <BookOpen size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Parse Your Record</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Simply upload your transcript or course plan. Our intelligent engine instantly extracts your requirements and builds your profile.
              </p>
            </div>
            
            <div className="group flex flex-col gap-5 p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <LayoutDashboard size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. Gain Instant Clarity</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Access a beautiful dashboard showing exactly what you've completed, what's pending, and which critical courses are blocking your progress.
              </p>
            </div>
            
            <div className="group flex flex-col gap-5 p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-100/50 transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Target size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. Build the Perfect Plan</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Use the interactive planner to select courses for next trimester. We automatically validate prerequisites and credit limits in real-time.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-200/60 bg-white/50 backdrop-blur-md relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <BookOpen size={20} />
          <span className="font-bold tracking-tight">Academic Planner</span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Academic Planner. All rights reserved.</p>
      </footer>
      
      {/* Add global styles for animations in a real app, assuming Tailwind config handles these or they fall back gracefully */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
}
