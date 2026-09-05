import { CheckCircle, Clock, AlertTriangle, PlayCircle, Filter, ArrowRight } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Course Plan</h1>
          <p className="text-slate-500 mt-1 font-medium">Track your entire academic history and future requirements.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:shadow-sm active:scale-95 transition-all shadow-[0_2px_8px_rgb(0,0,0,0.04)]">
            <Filter size={16} strokeWidth={2.5} />
            Filter
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <table className="min-w-full divide-y divide-slate-100/60">
          <thead className="bg-slate-50/50 backdrop-blur-sm">
            <tr>
              <th scope="col" className="px-8 py-5 text-left text-xs font-extrabold text-slate-400 uppercase tracking-wider">Course</th>
              <th scope="col" className="px-8 py-5 text-left text-xs font-extrabold text-slate-400 uppercase tracking-wider">Details</th>
              <th scope="col" className="px-8 py-5 text-left text-xs font-extrabold text-slate-400 uppercase tracking-wider">Prerequisites</th>
              <th scope="col" className="px-8 py-5 text-left text-xs font-extrabold text-slate-400 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-8 py-5 text-right text-xs font-extrabold text-slate-400 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-slate-100/60">
            {/* Completed Course */}
            <tr className="hover:bg-white/80 transition-colors group">
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="font-bold text-slate-900 text-base">CSE 1115</div>
                <div className="text-sm font-medium text-slate-500 mt-0.5">Object Oriented Programming</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-bold text-slate-900">3.0 Credits</div>
                <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wide">Core</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg inline-block">CSE 1111</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200 shadow-sm shadow-emerald-100">
                  <CheckCircle size={14} strokeWidth={2.5} />
                  Completed
                </span>
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-right text-base font-extrabold text-emerald-600">
                A
              </td>
            </tr>

            {/* Retake Course */}
            <tr className="hover:bg-rose-50/30 transition-colors group">
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="font-bold text-slate-900 text-base">MAT 1102</div>
                <div className="text-sm font-medium text-slate-500 mt-0.5">Calculus I</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-bold text-slate-900">3.0 Credits</div>
                <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wide">Core</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-medium text-slate-400">-</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-100/80 text-rose-800 border border-rose-200 shadow-sm shadow-rose-100">
                  <AlertTriangle size={14} strokeWidth={2.5} />
                  Retake
                </span>
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-right text-base font-extrabold text-rose-600">
                F
              </td>
            </tr>

            {/* Available Course */}
            <tr className="hover:bg-blue-50/50 bg-blue-50/30 transition-colors group">
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="font-bold text-slate-900 text-base">CSE 2217</div>
                <div className="text-sm font-medium text-slate-500 mt-0.5">Data Structures</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-bold text-slate-900">3.0 Credits</div>
                <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wide">Core</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg inline-block">CSE 1115 (Met)</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200 shadow-sm shadow-blue-100">
                  <PlayCircle size={14} strokeWidth={2.5} />
                  Available Now
                </span>
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium text-slate-400">
                -
              </td>
            </tr>

            {/* Blocked Course */}
            <tr className="hover:bg-white/80 transition-colors opacity-60 group grayscale-[30%]">
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="font-bold text-slate-900 text-base">CSE 3313</div>
                <div className="text-sm font-medium text-slate-500 mt-0.5">Algorithms</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-bold text-slate-900">3.0 Credits</div>
                <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wide">Core</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-lg inline-block">CSE 2217 (Missing)</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  <Clock size={14} strokeWidth={2.5} />
                  Prereq Pending
                </span>
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium text-slate-400">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {/* Completed Card */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">CSE 1115</h3>
              <p className="text-sm font-medium text-slate-500">Object Oriented Programming</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
              Completed
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 pt-4 border-t border-slate-100/60 text-sm">
            <div className="text-slate-500 font-medium">3.0 Credits • Core</div>
            <div className="font-extrabold text-emerald-600 text-lg">Grade: A</div>
          </div>
        </div>

        {/* Retake Card */}
        <div className="bg-rose-50/50 backdrop-blur-md border border-rose-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">MAT 1102</h3>
              <p className="text-sm font-medium text-slate-500">Calculus I</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-100/80 text-rose-800 border border-rose-200">
              Retake
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 pt-4 border-t border-rose-200/60 text-sm">
            <div className="text-slate-500 font-medium">3.0 Credits • Core</div>
            <div className="font-extrabold text-rose-600 text-lg">Grade: F</div>
          </div>
        </div>

        {/* Available Card */}
        <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-md border border-blue-200/60 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">CSE 2217</h3>
              <p className="text-sm font-medium text-slate-500">Data Structures</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200">
              Available Now
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 pt-4 border-t border-blue-200/60 text-sm">
            <div className="text-slate-500 font-medium">3.0 Credits • Core</div>
            <div className="text-indigo-700 font-bold flex items-center gap-1 active:scale-95 transition-transform">
              Add to Plan <ArrowRight size={14} strokeWidth={2.5} />
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
