'use client';

import { useState } from 'react';
import { AlertTriangle, Check, CheckCircle2, ChevronLeft, Trash2, Plus } from 'lucide-react';
import Link from 'next/link';

// Mock data that would normally come from the API/context
const initialExtractedData = [
  {
    id: 'mock-1',
    code: 'CSE 1111',
    title: 'Structured Programming Language',
    credits: 3.0,
    status: 'Completed',
    prerequisites: '',
    confidence: 0.98,
  },
  {
    id: 'mock-2',
    code: 'MAT 1102',
    title: 'Calculus I',
    credits: 3.0,
    status: 'Retake',
    prerequisites: '',
    confidence: 0.85,
  },
  {
    id: 'mock-4',
    code: 'CSE 2217',
    title: 'Data Structures',
    credits: 3.0,
    status: 'Not Started',
    prerequisites: 'CSE 1115',
    confidence: 0.72,
    warning: 'Could not clearly confirm the prerequisite. Please review before saving.',
  },
];

export default function ReviewPlanPage() {
  const [courses, setCourses] = useState(initialExtractedData);

  const handleUpdate = (id: string, field: string, value: string) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handleRemove = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 animate-fade-in-up">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white sticky top-0 z-20 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/documents" className="bg-slate-100 hover:bg-white text-slate-500 hover:text-indigo-600 p-2.5 rounded-xl transition-all shadow-sm border border-slate-200 hover:border-indigo-200">
              <ChevronLeft size={24} strokeWidth={2.5} />
            </Link>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Review Extracted Plan</h1>
              <p className="text-xs font-medium text-slate-500 hidden sm:block mt-1">Please verify the AI-extracted data before saving to your profile.</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 active:translate-y-0">
            <Check size={18} strokeWidth={3} />
            Confirm & Save
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-amber-50/80 backdrop-blur-md border border-amber-200/80 rounded-2xl p-5 mb-10 flex gap-4 items-start shadow-sm shadow-amber-100/50">
          <div className="bg-amber-100 p-2 rounded-xl">
            <AlertTriangle className="text-amber-600 h-6 w-6 flex-shrink-0" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-900">Review Required</h3>
            <p className="text-sm font-medium text-amber-700 mt-1.5 leading-relaxed">
              We extracted these courses from your document. Items highlighted with a warning have lower confidence. You can edit any field directly.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white/60 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${
                course.warning 
                  ? 'border-2 border-amber-300 ring-4 ring-amber-100/50' 
                  : 'border border-white hover:border-indigo-100'
              }`}
            >
              {/* Decorative gradient for warning items */}
              {course.warning && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              )}
              
              {course.warning && (
                <div className="mb-6 text-xs font-bold text-amber-800 flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm inline-flex px-3 py-1.5 rounded-lg border border-amber-200 shadow-sm">
                  <AlertTriangle size={16} strokeWidth={2.5} />
                  {course.warning}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start relative z-10">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Code</label>
                  <input
                    type="text"
                    value={course.code}
                    onChange={(e) => handleUpdate(course.id, 'code', e.target.value)}
                    className="w-full text-base font-extrabold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => handleUpdate(course.id, 'title', e.target.value)}
                    className="w-full text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Credits</label>
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => handleUpdate(course.id, 'credits', e.target.value)}
                    className="w-full text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Status</label>
                  <select
                    value={course.status}
                    onChange={(e) => handleUpdate(course.id, 'status', e.target.value)}
                    className="w-full text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all cursor-pointer shadow-sm appearance-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Retake">Retake</option>
                    <option value="Not Started">Not Started</option>
                    <option value="Waived">Waived</option>
                  </select>
                </div>
                <div className="sm:col-span-1 flex justify-end items-end h-full pt-6">
                  <button 
                    onClick={() => handleRemove(course.id)}
                    className="bg-white border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-all p-3 rounded-xl shadow-sm"
                    title="Remove course"
                  >
                    <Trash2 size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="sm:col-span-11 mt-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Prerequisites</label>
                  <input
                    type="text"
                    value={course.prerequisites}
                    onChange={(e) => handleUpdate(course.id, 'prerequisites', e.target.value)}
                    placeholder="e.g., CSE 1115, MAT 1102"
                    className="w-full text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm placeholder:text-slate-300 placeholder:font-medium"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center pb-10">
          <button className="text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-xl px-8 py-4 hover:bg-indigo-100 transition-all flex items-center gap-2 shadow-sm">
            <Plus size={18} strokeWidth={3} />
            Add Missing Course Manually
          </button>
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
