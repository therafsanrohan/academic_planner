import { Users, BookOpen, AlertCircle, TrendingUp, Search, Plus } from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Platform Overview</h1>
          <p className="text-slate-400 mt-2">Manage academic master data and monitor platform usage.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus size={16} />
          Add Programme
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400">Total Students</h3>
            <Users className="h-5 w-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">1,248</div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <TrendingUp size={12} /> +12% this month
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400">Universities</h3>
            <BookOpen className="h-5 w-5 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">4</div>
          <div className="text-xs text-slate-500">Active institutions</div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400">Master Courses</h3>
            <BookOpen className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">842</div>
          <div className="text-xs text-slate-500">Across all programmes</div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-400">Pending Audits</h3>
            <AlertCircle className="h-5 w-5 text-amber-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">14</div>
          <div className="text-xs text-amber-400">Low confidence extractions</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Extractions */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/80">
              <h2 className="text-lg font-semibold text-white">Recent Document Extractions</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 w-64"
                />
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700/50 text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4 font-medium">Student ID</th>
                  <th className="px-6 py-4 font-medium">Programme</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">011201045</div>
                    <div className="text-xs text-slate-500">2 mins ago</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">BSc in CSE</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-900/30 text-green-400 border border-green-800/50">
                      Auto-Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-400 hover:text-blue-300">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">011211122</div>
                    <div className="text-xs text-slate-500">15 mins ago</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">BBA</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-900/30 text-amber-400 border border-amber-800/50">
                      Needs Audit
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-400 hover:text-blue-300">Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-colors group">
              <div className="text-left">
                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Update Course Master</div>
                <div className="text-xs text-slate-400 mt-1">Upload CSV for batch updates</div>
              </div>
              <Plus size={16} className="text-slate-500 group-hover:text-blue-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-colors group">
              <div className="text-left">
                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Prerequisite Rules</div>
                <div className="text-xs text-slate-400 mt-1">Manage AND/OR constraints</div>
              </div>
              <BookOpen size={16} className="text-slate-500 group-hover:text-blue-400" />
            </button>
          </div>

          <div className="mt-8 bg-blue-900/20 border border-blue-900/50 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-blue-400 mb-2">Soft Delete Architecture</h3>
            <p className="text-xs text-blue-200/70 leading-relaxed">
              Reminder: Never permanently delete courses or programmes. Use the archive function to ensure existing student historical records remain intact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
