import { CheckCircle, Clock, AlertTriangle, PlayCircle, Filter } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Course Plan</h1>
          <p className="text-sm text-slate-500 mt-1">Track your entire academic history and future requirements.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Details</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Prerequisites</th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {/* Completed Course */}
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-semibold text-slate-900">CSE 1115</div>
                <div className="text-sm text-slate-500">Object Oriented Programming</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-900">3.0 Credits</div>
                <div className="text-xs text-slate-500">Core</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">CSE 1111</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  <CheckCircle size={12} />
                  Completed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-900">
                A
              </td>
            </tr>

            {/* Retake Course */}
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-semibold text-slate-900">MAT 1102</div>
                <div className="text-sm text-slate-500">Calculus I</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-900">3.0 Credits</div>
                <div className="text-xs text-slate-500">Core</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">-</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                  <AlertTriangle size={12} />
                  Retake
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-900">
                F
              </td>
            </tr>

            {/* Available Course */}
            <tr className="hover:bg-slate-50 transition-colors bg-blue-50/30">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-semibold text-slate-900">CSE 2217</div>
                <div className="text-sm text-slate-500">Data Structures</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-900">3.0 Credits</div>
                <div className="text-xs text-slate-500">Core</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">CSE 1115 (Met)</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  <PlayCircle size={12} />
                  Available Now
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-500">
                -
              </td>
            </tr>

            {/* Blocked Course */}
            <tr className="hover:bg-slate-50 transition-colors opacity-60">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-semibold text-slate-900">CSE 3313</div>
                <div className="text-sm text-slate-500">Algorithms</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-900">3.0 Credits</div>
                <div className="text-xs text-slate-500">Core</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">CSE 2217 (Missing)</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  <Clock size={12} />
                  Prerequisite Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-500">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {/* Completed Card */}
        <div className="bg-white border border-slate-200/60 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-slate-900">CSE 1115</h3>
              <p className="text-sm text-slate-500">Object Oriented Programming</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Completed
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 text-sm">
            <div className="text-slate-500">3.0 Credits • Core</div>
            <div className="font-medium text-slate-900">Grade: A</div>
          </div>
        </div>

        {/* Retake Card */}
        <div className="bg-white border border-red-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-slate-900">MAT 1102</h3>
              <p className="text-sm text-slate-500">Calculus I</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Retake
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 text-sm">
            <div className="text-slate-500">3.0 Credits • Core</div>
            <div className="font-medium text-slate-900">Grade: F</div>
          </div>
        </div>

        {/* Available Card */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-slate-900">CSE 2217</h3>
              <p className="text-sm text-slate-500">Data Structures</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Available Now
            </span>
          </div>
          <div className="flex justify-between items-end mt-4 text-sm">
            <div className="text-slate-500">3.0 Credits • Core</div>
            <div className="text-blue-900 font-medium">Add to Plan &rarr;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
