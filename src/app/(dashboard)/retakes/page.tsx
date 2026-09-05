import { AlertTriangle, TrendingUp, Info } from 'lucide-react';

const mockRetakes = [
  { id: 'r1', code: 'CSE 1111', title: 'Physics', credits: 3.0, lastGrade: 'F', attempts: 1, blocks: 2, priority: 'High' },
  { id: 'r2', code: 'MAT 1102', title: 'Calculus I', credits: 3.0, lastGrade: 'D', attempts: 1, blocks: 1, priority: 'Medium' },
];

export default function RetakesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Retake Manager</h1>
        <p className="text-sm text-slate-500 mt-1">Prioritise your retakes to unlock future courses and improve your CGPA.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {mockRetakes.map((course) => (
            <div key={course.id} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{course.code}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold ${
                      course.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {course.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{course.title}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">{course.lastGrade}</div>
                  <div className="text-xs text-slate-500">Last Grade</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-slate-100 my-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Credits</div>
                  <div className="font-semibold text-slate-900">{course.credits}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Attempts</div>
                  <div className="font-semibold text-slate-900">{course.attempts}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs text-slate-500 mb-1">Blocks Future Courses</div>
                  <div className="font-semibold text-red-600 flex items-center gap-1">
                    <AlertTriangle size={14} />
                    {course.blocks} courses blocked
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-50 text-blue-900 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Add to Next Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-blue-900 rounded-2xl p-6 text-white shadow-md">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <TrendingUp size={20} />
              CGPA Impact
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Retaking courses with a grade of 'F' or 'D' is the fastest way to improve your CGPA. The new grade usually replaces the old one in the calculation.
            </p>
            <div className="bg-blue-950/50 rounded-xl p-4">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-blue-200">Current CGPA</span>
                <span className="font-bold text-white">2.84</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-200">Est. after Retakes</span>
                <span className="font-bold text-green-400">3.12</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
              <Info size={16} className="text-slate-400" />
              Retake Strategy
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li>• Prioritise courses that are prerequisites for multiple future subjects.</li>
              <li>• Balance retakes with easier electives to manage your workload.</li>
              <li>• Don't take more than 2 retakes in a single trimester.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
