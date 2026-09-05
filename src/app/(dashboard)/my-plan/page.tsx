'use client';

import { List, Search, Filter, CheckCircle2, AlertCircle, Clock, RotateCcw, HelpCircle } from 'lucide-react';
import { useState } from 'react';

// Mock Data matching the spec
const mockPlan = [
  {
    id: '1',
    include_in_plan: true,
    plan_order: 1,
    target_trimester: 'Next',
    course_code: 'CSE1111',
    course_title: 'Structured Programming',
    prereq_1: '-',
    prereq_2: '-',
    eligibility: 'Available Now',
    credits: 3,
    status: 'In Progress',
    next_action: 'Complete',
    source: 'Official Curriculum',
    section: 'Core Courses',
    personal_note: 'Try to get section A',
    original_notes: ''
  },
  {
    id: '2',
    include_in_plan: true,
    plan_order: 2,
    target_trimester: 'Next',
    course_code: 'CSE1115',
    course_title: 'Object Oriented Programming',
    prereq_1: 'CSE1111',
    prereq_2: '-',
    eligibility: 'Prerequisite Pending', // Because 1111 is in progress
    credits: 3,
    status: 'Planned',
    next_action: 'Clear Prereq',
    source: 'Official Curriculum',
    section: 'Core Courses',
    personal_note: '',
    original_notes: ''
  },
  {
    id: '3',
    include_in_plan: false,
    plan_order: 0,
    target_trimester: 'Later',
    course_code: 'CSE4411',
    course_title: 'Machine Learning',
    prereq_1: 'MAT201',
    prereq_2: '-',
    eligibility: 'Needs Review',
    credits: 3,
    status: 'Not Started',
    next_action: 'Select as Elective',
    source: 'Elective Catalogue',
    section: 'AI Specialisation',
    personal_note: '',
    original_notes: ''
  }
];

export default function MyPlanPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const renderStatus = (status: string) => {
    switch (status) {
      case 'Completed': return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Completed</span>;
      case 'In Progress': return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">In Progress</span>;
      case 'Retake': return <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Retake</span>;
      case 'Planned': return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">Planned</span>;
      default: return <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">Not Started</span>;
    }
  };

  const renderEligibility = (eligibility: string) => {
    switch (eligibility) {
      case 'Done': return <span className="text-green-600 font-bold text-xs flex items-center gap-1"><CheckCircle2 size={12}/> Done</span>;
      case 'Available Now': return <span className="text-blue-600 font-bold text-xs flex items-center gap-1"><CheckCircle2 size={12}/> Available</span>;
      case 'Prerequisite Pending': return <span className="text-red-500 font-bold text-xs flex items-center gap-1"><AlertCircle size={12}/> Pending</span>;
      case 'Retake': return <span className="text-amber-500 font-bold text-xs flex items-center gap-1"><RotateCcw size={12}/> Retake</span>;
      default: return <span className="text-slate-500 font-bold text-xs flex items-center gap-1"><HelpCircle size={12}/> Review</span>;
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <List className="h-8 w-8 text-blue-600" />
            My Course Plan
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            The unified master table. Official requirements, selected electives, and unmapped courses.
          </p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search code or title..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl overflow-hidden">
        {/* Horizontal scroll for massive table */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-max divide-y divide-slate-200/60 w-full table-fixed">
            <thead className="bg-slate-50/80 backdrop-blur-sm sticky top-0 z-10">
              <tr>
                {/* Column widths fixed for readability */}
                <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-20">In Plan?</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-16">Order</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-24">Target</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-24">Code</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-48">Title</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-20">Pre 1</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-20">Pre 2</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-28">Eligibility</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-16">Cr</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-28">Status</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Source/Section</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-40">Personal Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-transparent">
              {mockPlan.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <input type="checkbox" checked={row.include_in_plan} readOnly className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center text-sm font-semibold text-slate-700 bg-amber-50/30">
                    {row.plan_order > 0 ? row.plan_order : ''}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-600 bg-amber-50/30">
                    {row.target_trimester}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap font-bold text-slate-800">
                    {row.course_code}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700 truncate font-medium">
                    {row.course_title}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center text-xs font-mono font-bold text-slate-500">
                    {row.prereq_1}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center text-xs font-mono font-bold text-slate-500">
                    {row.prereq_2}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className={`p-1.5 rounded-md inline-block ${row.eligibility.includes('Pending') ? 'bg-red-50' : row.eligibility.includes('Available') ? 'bg-green-50' : 'bg-slate-50'}`}>
                       {renderEligibility(row.eligibility)}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center text-sm font-semibold text-slate-700">
                    {row.credits}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {renderStatus(row.status)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-700">{row.source}</span>
                      <span className="text-[10px] uppercase text-slate-500 tracking-wider">{row.section}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-slate-600 italic bg-amber-50/30 truncate">
                    {row.personal_note || <span className="text-slate-300">Click to add...</span>}
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
