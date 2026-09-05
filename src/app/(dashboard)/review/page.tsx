'use client';

import { useState } from 'react';
import { AlertTriangle, Check, CheckCircle2, ChevronLeft, Trash2 } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/60 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/documents" className="text-slate-400 hover:text-slate-600 transition-colors">
              <ChevronLeft size={24} />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Review Extracted Plan</h1>
              <p className="text-xs text-slate-500 hidden sm:block">Please verify the AI-extracted data before saving to your profile.</p>
            </div>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors flex items-center gap-2">
            <Check size={16} />
            Confirm & Save
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3 items-start">
          <AlertTriangle className="text-amber-600 h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-amber-900">Review Required</h3>
            <p className="text-sm text-amber-700 mt-1">
              We extracted these courses from your document. Items highlighted with a warning have lower confidence. You can edit any field directly.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-xl border p-5 shadow-sm transition-colors ${
                course.warning ? 'border-amber-300 ring-1 ring-amber-300 ring-opacity-50' : 'border-slate-200/60'
              }`}
            >
              {course.warning && (
                <div className="mb-4 text-xs font-medium text-amber-800 flex items-center gap-1.5 bg-amber-50 inline-flex px-2 py-1 rounded border border-amber-200">
                  <AlertTriangle size={14} />
                  {course.warning}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Code</label>
                  <input
                    type="text"
                    value={course.code}
                    onChange={(e) => handleUpdate(course.id, 'code', e.target.value)}
                    className="w-full text-sm font-semibold text-slate-900 bg-transparent border-b border-slate-200 focus:border-blue-900 focus:outline-none pb-1"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Title</label>
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => handleUpdate(course.id, 'title', e.target.value)}
                    className="w-full text-sm text-slate-900 bg-transparent border-b border-slate-200 focus:border-blue-900 focus:outline-none pb-1"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Credits</label>
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => handleUpdate(course.id, 'credits', e.target.value)}
                    className="w-full text-sm text-slate-900 bg-transparent border-b border-slate-200 focus:border-blue-900 focus:outline-none pb-1"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Status</label>
                  <select
                    value={course.status}
                    onChange={(e) => handleUpdate(course.id, 'status', e.target.value)}
                    className="w-full text-sm text-slate-900 bg-transparent border-b border-slate-200 focus:border-blue-900 focus:outline-none pb-1 cursor-pointer"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Retake">Retake</option>
                    <option value="Not Started">Not Started</option>
                    <option value="Waived">Waived</option>
                  </select>
                </div>
                <div className="sm:col-span-1 flex justify-end">
                  <button 
                    onClick={() => handleRemove(course.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors p-2"
                    title="Remove course"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="sm:col-span-11 mt-2">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Prerequisites</label>
                  <input
                    type="text"
                    value={course.prerequisites}
                    onChange={(e) => handleUpdate(course.id, 'prerequisites', e.target.value)}
                    placeholder="e.g., CSE 1115, MAT 1102"
                    className="w-full text-sm text-slate-900 bg-transparent border-b border-slate-200 focus:border-blue-900 focus:outline-none pb-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="text-sm font-medium text-blue-900 border border-blue-900 rounded-lg px-6 py-2 hover:bg-blue-50 transition-colors">
            + Add Missing Course manually
          </button>
        </div>
      </div>
    </div>
  );
}
