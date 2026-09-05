'use client';

import { Archive, AlertCircle, ArrowRight, Trash2 } from 'lucide-react';

const mockUnmappedData = [
  {
    id: 'u1',
    extractedCode: 'CSE-111',
    extractedTitle: 'Intro to Comp',
    extractedCredits: 3,
    status: 'Completed',
    grade: 'A',
    importDate: '2023-09-12'
  },
  {
    id: 'u2',
    extractedCode: 'MAT-101',
    extractedTitle: 'Calculus I',
    extractedCredits: 3,
    status: 'Completed',
    grade: 'B+',
    importDate: '2023-09-12'
  }
];

export default function UnmappedDataPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Archive className="h-8 w-8 text-amber-500" />
            Preserved Unmapped Data
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium max-w-3xl">
            These courses were found in your imported files but did not perfectly match the active curriculum (UIU CSE Summer 232). 
            They are preserved here safely. You can manually map them to official courses to count them toward graduation.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-bold text-amber-800">Review Required</h3>
          <p className="text-sm text-amber-700 mt-1">
            Courses in this list are <span className="font-bold">NOT</span> counted in your Dashboard progress or GPA until they are reviewed and mapped.
          </p>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200/60">
            <thead className="bg-slate-50/80 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Imported Course</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Original Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Import Date</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-transparent">
              {mockUnmappedData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800">{item.extractedCode}</span>
                      <span className="text-sm text-slate-500">{item.extractedTitle}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-slate-700">
                    {item.extractedCredits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                        {item.status}
                      </span>
                      {item.grade && (
                        <span className="text-xs font-bold text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded">
                          Grade: {item.grade}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {item.importDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <button className="text-slate-400 hover:text-red-600 transition-colors p-1" title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold transition-colors shadow-sm">
                        Map to Official
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {mockUnmappedData.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Archive className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                    <p className="text-slate-500 font-medium">No unmapped data found.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
