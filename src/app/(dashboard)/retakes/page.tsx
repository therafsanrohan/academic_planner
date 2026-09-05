import { AlertTriangle, TrendingUp, Info, RefreshCw } from 'lucide-react';

const mockRetakes = [
  { id: 'r1', code: 'CSE 1111', title: 'Physics', credits: 3.0, lastGrade: 'F', attempts: 1, blocks: 2, priority: 'High' },
  { id: 'r2', code: 'MAT 1102', title: 'Calculus I', credits: 3.0, lastGrade: 'D', attempts: 1, blocks: 1, priority: 'Medium' },
];

export default function RetakesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto animate-fade-in-up">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Retake Manager</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Prioritise your retakes to unlock future courses and improve your CGPA.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {mockRetakes.map((course) => (
            <div key={course.id} className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900">{course.code}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold border ${
                      course.priority === 'High' 
                        ? 'bg-rose-50 text-rose-700 border-rose-200 shadow-sm shadow-rose-100' 
                        : 'bg-amber-50 text-amber-700 border-amber-200 shadow-sm shadow-amber-100'
                    }`}>
                      {course.priority} Priority
                    </span>
                  </div>
                  <p className="text-base font-medium text-slate-500">{course.title}</p>
                </div>
                <div className="text-right bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
                  <div className="text-3xl font-black text-rose-600 tracking-tighter">{course.lastGrade}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Last Grade</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-t border-b border-slate-100/60 my-5 bg-white/40 rounded-2xl px-4">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Credits</div>
                  <div className="font-extrabold text-slate-900 text-lg">{course.credits}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Attempts</div>
                  <div className="font-extrabold text-slate-900 text-lg">{course.attempts}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Blocks Future Courses</div>
                  <div className="font-extrabold text-rose-600 text-lg flex items-center gap-1.5 bg-rose-50 px-3 py-1 rounded-lg w-fit border border-rose-100">
                    <AlertTriangle size={16} strokeWidth={2.5} />
                    {course.blocks} courses blocked
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border border-indigo-100 hover:border-indigo-200 hover:from-indigo-100 hover:to-blue-100 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2 active:scale-95">
                  <RefreshCw size={16} strokeWidth={2.5} />
                  Add to Next Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/95 backdrop-blur-3xl rounded-3xl p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              <TrendingUp size={24} className="text-blue-400" />
              CGPA Impact
            </h3>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6 relative z-10 font-medium">
              Retaking courses with a grade of 'F' or 'D' is the fastest way to improve your CGPA. The new grade usually replaces the old one in the calculation.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative z-10 backdrop-blur-sm">
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Current CGPA</span>
                <span className="font-extrabold text-white text-lg">2.84</span>
              </div>
              <div className="w-full bg-slate-800/80 rounded-full h-1.5 mb-3 overflow-hidden">
                <div className="bg-slate-600 h-1.5 rounded-full w-[70%]" />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Est. after Retakes</span>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 text-xl tracking-tight">3.12</span>
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-md border border-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-extrabold text-slate-900 mb-4 flex items-center gap-2 text-lg">
              <Info size={20} className="text-indigo-500" strokeWidth={2.5} />
              Retake Strategy
            </h3>
            <ul className="text-sm font-medium text-slate-600 space-y-4">
              <li className="flex gap-3 leading-relaxed">
                <span className="text-indigo-500 font-bold">•</span>
                Prioritise courses that are prerequisites for multiple future subjects.
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-indigo-500 font-bold">•</span>
                Balance retakes with easier electives to manage your workload.
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-indigo-500 font-bold">•</span>
                Don't take more than 2 retakes in a single trimester.
              </li>
            </ul>
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
