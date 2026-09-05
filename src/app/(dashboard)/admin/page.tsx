'use client';

import { ShieldCheck, Database, FileCheck, Users, Activity, ListChecks } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'curricula', name: 'Curricula & Master Data', icon: Database },
  { id: 'imports', name: 'Review Imports', icon: FileCheck },
  { id: 'users', name: 'Student Profiles', icon: Users },
  { id: 'logs', name: 'Audit Logs', icon: Activity },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('curricula');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-rose-600" />
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Manage institutions, review imports, and maintain verified course plans.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all \${
                activeTab === tab.id 
                  ? 'bg-rose-50 text-rose-700 shadow-sm border border-rose-100' 
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent'
              }\`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-rose-600' : 'text-slate-400'} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-3xl p-6 lg:p-8 min-h-[500px]">
          {activeTab === 'curricula' && (
            <div className="animate-fade-in-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900">Verified Curricula</h2>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
                  Add New Curriculum
                </button>
              </div>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200 bg-white">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Institution & Dept</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Batch</th>
                      <th className="px-6 py-3 text-center text-xs font-bold text-slate-500 uppercase">Credits</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">UIU - CSE</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">Summer 232</td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-slate-600">138</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                          <ListChecks size={12} className="mr-1" /> Verified
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-indigo-600 cursor-pointer hover:text-indigo-800">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'imports' && (
            <div className="animate-fade-in-up">
               <h2 className="text-xl font-bold text-slate-900 mb-6">Pending Student Imports</h2>
               <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
                 No pending imports requiring manual review at this time.
               </div>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div className="animate-fade-in-up">
               <h2 className="text-xl font-bold text-slate-900 mb-6">Student Profiles</h2>
               <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
                 Student management interface goes here.
               </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="animate-fade-in-up">
               <h2 className="text-xl font-bold text-slate-900 mb-6">Audit Logs</h2>
               <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500">
                 System activity and data modification logs will appear here.
               </div>
            </div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      \`}} />
    </div>
  );
}
