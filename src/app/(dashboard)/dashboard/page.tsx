import { CheckCircle, Clock, AlertTriangle, BookOpen, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Overview</h1>
          <p className="text-slate-500 mt-1 font-medium">Track your academic progress and next steps.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-10">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-500 group-hover:text-emerald-600 transition-colors">Completed</h3>
            <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-600">
              <CheckCircle className="h-5 w-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">45</span>
            <span className="text-sm font-semibold text-slate-400">credits</span>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors">Remaining</h3>
            <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600">
              <Clock className="h-5 w-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">93</span>
            <span className="text-sm font-semibold text-slate-400">credits</span>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-500 group-hover:text-rose-600 transition-colors">Retakes</h3>
            <div className="p-2.5 bg-rose-100 rounded-xl text-rose-600">
              <AlertTriangle className="h-5 w-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">3</span>
            <span className="text-sm font-semibold text-slate-400">credits</span>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-500 group-hover:text-indigo-600 transition-colors">Progress</h3>
            <div className="p-2.5 bg-indigo-100 rounded-xl text-indigo-600">
              <BookOpen className="h-5 w-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">32%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-1.5 rounded-full" style={{ width: '32%' }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Recommended for Next Trimester */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recommended for Next Trimester</h2>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ul className="divide-y divide-slate-100/60">
              <li className="p-6 flex items-center justify-between hover:bg-white/80 transition-colors group">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-slate-900 text-lg">CSE 2217</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200">
                      3.0 Credits
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">Data Structures and Algorithms</p>
                </div>
                <button className="text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 hover:scale-105 active:scale-95 px-5 py-2.5 rounded-xl transition-all border border-indigo-100">
                  Add to Plan
                </button>
              </li>
              <li className="p-6 flex items-center justify-between hover:bg-white/80 transition-colors group">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-slate-900 text-lg">MATH 2011</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200">
                      3.0 Credits
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">Calculus II</p>
                </div>
                <button className="text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 hover:scale-105 active:scale-95 px-5 py-2.5 rounded-xl transition-all border border-indigo-100">
                  Add to Plan
                </button>
              </li>
            </ul>
            <div className="bg-slate-50/50 p-5 border-t border-slate-100/60 text-center backdrop-blur-sm">
              <Link href="/planner" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
                View Full Trimester Planner <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Alerts & Blockers */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-rose-500" /> Action Required
            </h2>
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl border border-rose-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-rose-600 flex-shrink-0 self-start">
                  <AlertTriangle className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-rose-900 mb-1">CSE 1111 (Physics)</h4>
                  <p className="text-sm font-medium text-rose-700/80 leading-relaxed">This course is blocking 2 future courses. Prioritise retaking this next trimester.</p>
                  <button className="mt-4 text-xs font-bold text-rose-700 bg-white hover:bg-rose-50 px-4 py-2 rounded-xl transition-colors shadow-sm border border-rose-100">
                    Schedule Retake
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-indigo-500" /> Graduation Target
            </h2>
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="text-sm font-medium text-slate-500 mb-3">Estimated completion (12 credits/trim):</p>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 inline-block">
                Fall 2027
              </div>
              <div className="mt-6 w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" style={{ width: '32%' }}></div>
              </div>
              <div className="flex justify-between mt-3 text-xs font-bold text-slate-400">
                <span>45 completed</span>
                <span>138 total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}
