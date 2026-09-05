'use client';

import { Map as MapIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const mockPrereqMap = [
  {
    code: 'CSE2213',
    title: 'Data Structures',
    status: 'Not Started',
    prerequisites: ['CSE1115'],
    eligibility: 'Prerequisite Pending',
    source: 'Official Curriculum',
    section: 'Core Courses'
  },
  {
    code: 'CSE1115',
    title: 'Object Oriented Programming',
    status: 'In Progress',
    prerequisites: ['CSE1111'],
    eligibility: 'Available Now', // Because CSE1111 is completed
    source: 'Official Curriculum',
    section: 'Core Courses'
  },
  {
    code: 'CSE3311',
    title: 'Database Management Systems',
    status: 'Not Started',
    prerequisites: ['CSE2213'],
    eligibility: 'Prerequisite Pending',
    source: 'Official Curriculum',
    section: 'Core Courses'
  }
];

export default function PrerequisiteMapPage() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <MapIcon className="h-8 w-8 text-indigo-600" />
            Prerequisite Map
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            A focused view of courses that have dependent prerequisites.
          </p>
        </div>
        
        {/* Simple Filter */}
        <div className="flex bg-white/60 backdrop-blur-md rounded-xl p-1.5 border border-slate-200/60 shadow-sm">
          {['All', 'Available Now', 'Prerequisite Pending'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={\`px-4 py-2 rounded-lg text-sm font-bold transition-all \${
                filter === f 
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
              }\`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200/60">
            <thead className="bg-slate-50/80 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Prerequisites</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Eligibility</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-transparent">
              {mockPrereqMap
                .filter(item => filter === 'All' || item.eligibility === filter)
                .map((item) => (
                <tr key={item.code} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800">{item.code}</span>
                      <span className="text-sm text-slate-500">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold \${
                      item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-slate-100 text-slate-700'
                    }\`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      {item.prerequisites.map(p => (
                        <span key={p} className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold font-mono">
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.eligibility === 'Available Now' ? (
                      <span className="text-green-600 font-bold text-sm flex items-center gap-1"><CheckCircle2 size={16}/> Available Now</span>
                    ) : (
                      <span className="text-red-500 font-bold text-sm flex items-center gap-1"><AlertCircle size={16}/> {item.eligibility}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-700">{item.source}</span>
                      <span className="text-xs text-slate-500">{item.section}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
