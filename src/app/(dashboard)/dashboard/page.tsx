import { CheckCircle, Clock, AlertTriangle, BookOpen } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Completed</h3>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">45</span>
            <span className="text-sm text-slate-500">credits</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Remaining</h3>
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">93</span>
            <span className="text-sm text-slate-500">credits</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Retakes</h3>
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">3</span>
            <span className="text-sm text-slate-500">credits</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Progress</h3>
            <BookOpen className="h-5 w-5 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">32%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended for Next Trimester */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recommended for Next Trimester</h2>
          <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
            <ul className="divide-y divide-slate-100">
              <li className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-900">CSE 2217</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      3.0 Credits
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">Data Structures and Algorithms</p>
                </div>
                <button className="text-sm font-medium text-blue-900 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                  Add to Plan
                </button>
              </li>
              <li className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-900">MATH 2011</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      3.0 Credits
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">Calculus II</p>
                </div>
                <button className="text-sm font-medium text-blue-900 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                  Add to Plan
                </button>
              </li>
            </ul>
            <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
              <a href="/planner" className="text-sm font-medium text-blue-900 hover:text-blue-800">
                View Full Trimester Planner &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Alerts & Blockers */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Retake Priority</h2>
            <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-red-900">CSE 1111 (Physics)</h4>
                  <p className="text-sm text-red-700 mt-1">This course is blocking 2 future courses. Prioritise retaking this.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Graduation Target</h2>
            <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">Estimated completion based on 12 credits/trimester:</p>
              <div className="text-xl font-bold text-slate-900">Fall 2027</div>
              <div className="mt-4 w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-900 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>45 completed</span>
                <span>138 total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
