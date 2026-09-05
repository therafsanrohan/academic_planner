'use client';

import { useState } from 'react';
import { BookOpen, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

const mockSections = [
  {
    id: 's1',
    name: 'Language',
    requirement_rule: 'Complete all courses',
    required_credits: 6,
    completed_credits: 3,
    in_progress_credits: 0,
    retake_credits: 0,
    courses: [
      { code: 'ENG1011', title: 'English I', credits: 3, status: 'Completed', eligibility: 'Done' },
      { code: 'ENG1013', title: 'English II', credits: 3, status: 'Not Started', eligibility: 'Available Now' },
    ]
  },
  {
    id: 's2',
    name: 'Core Courses',
    requirement_rule: 'Complete all courses',
    required_credits: 9,
    completed_credits: 3,
    in_progress_credits: 3,
    retake_credits: 0,
    courses: [
      { code: 'CSE1111', title: 'Structured Programming', credits: 3, status: 'Completed', eligibility: 'Done' },
      { code: 'CSE1112', title: 'Structured Programming Lab', credits: 1, status: 'Completed', eligibility: 'Done' },
      { code: 'CSE1115', title: 'Object Oriented Programming', credits: 3, status: 'In Progress', eligibility: 'Available Now' },
      { code: 'CSE2213', title: 'Data Structures', credits: 3, status: 'Not Started', eligibility: 'Prerequisite Pending' },
    ]
  }
];

export default function OfficialPlanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Official Course Plan
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            UIU CSE Summer 232 • Organized by Curriculum Requirements
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {mockSections.map((section) => {
          const completionPercentage = Math.round((section.completed_credits / section.required_credits) * 100);
          
          return (
            <div key={section.id} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-xl shadow-blue-900/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{section.name}</h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">Rule: {section.requirement_rule}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {section.completed_credits} / {section.required_credits} Credits
                    </p>
                    <p className="text-xs text-slate-500 font-medium">Completed</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm shadow-sm">
                    {completionPercentage}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-6 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200/60 bg-white/50">
                <table className="min-w-full divide-y divide-slate-200/60">
                  <thead className="bg-slate-50/80 backdrop-blur-sm">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Course</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Credits</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-transparent">
                    {section.courses.map((c) => (
                      <tr key={c.code} className="hover:bg-white/80 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800">{c.code}</span>
                            <span className="text-xs text-slate-500">{c.title}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-sm font-semibold text-slate-700">
                          {c.credits}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          {c.status === 'Completed' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                              <CheckCircle2 size={12} className="mr-1" /> Completed
                            </span>
                          ) : c.status === 'In Progress' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                              <Circle size={12} className="mr-1 fill-current" /> In Progress
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                              Not Started
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                           {c.eligibility === 'Done' ? (
                              <span className="text-green-600 font-bold text-xs flex items-center gap-1"><CheckCircle2 size={14}/> Done</span>
                           ) : c.eligibility === 'Available Now' ? (
                              <span className="text-blue-600 font-bold text-xs flex items-center gap-1">Available Now</span>
                           ) : (
                              <span className="text-red-500 font-bold text-xs flex items-center gap-1"><AlertCircle size={14}/> Prerequisite Pending</span>
                           )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
