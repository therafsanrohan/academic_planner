import Link from 'next/link';
import { BookOpen, ChevronRight, LayoutDashboard, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-slate-200/60 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 p-2 rounded-lg text-white">
            <BookOpen size={24} />
          </div>
          <span className="font-semibold text-xl tracking-tight text-blue-950">Academic Planner</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium bg-blue-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-800 transition-colors">
            Sign up
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-blue-950 mb-6 leading-tight">
            Plan smarter. <br className="hidden sm:block" /> Graduate with clarity.
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
            Academic Planner turns your course plan and transcript into a clear academic roadmap, helping you track credits, retakes, prerequisites, and your next trimester.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-full bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 transition-all flex items-center gap-2"
            >
              Build My Academic Plan
              <ChevronRight size={20} />
            </Link>
            <a href="#how-it-works" className="text-base font-semibold leading-6 text-slate-900 hover:text-blue-900 transition-colors">
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div id="how-it-works" className="mt-32 w-full max-w-5xl text-left">
          <div className="grid sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-900">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-950">1. Upload your plan</h3>
              <p className="text-slate-600 leading-relaxed">
                Upload your course plan PDF or transcript. Our intelligent parser extracts your requirements in seconds.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-900">
                <LayoutDashboard size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-950">2. Review Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                See exactly what you've completed, what's remaining, and which courses are blocking your graduation.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-900">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-semibold text-blue-950">3. Plan Next Trimester</h3>
              <p className="text-slate-600 leading-relaxed">
                Build an optimal schedule. We'll automatically check prerequisites and warn you about credit limits.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-center text-sm text-slate-500 border-t border-slate-200/60">
        <p>&copy; {new Date().getFullYear()} Academic Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}
