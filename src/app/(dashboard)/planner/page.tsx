'use client';

import { useState } from 'react';
import { Plus, X, AlertTriangle, BookOpen, Clock, Settings, Save } from 'lucide-react';

const mockEligibleCourses = [
  { id: 'c1', code: 'CSE 2217', title: 'Data Structures', credits: 3.0, type: 'Core', prereqs: 'CSE 1115' },
  { id: 'c2', code: 'MATH 2011', title: 'Calculus II', credits: 3.0, type: 'Core', prereqs: 'MAT 1102' },
  { id: 'c3', code: 'EEE 2113', title: 'Electrical Circuits', credits: 3.0, type: 'Core', prereqs: 'PHY 1101' },
  { id: 'c4', code: 'ENG 1111', title: 'English Communication', credits: 3.0, type: 'General', prereqs: 'None' },
  { id: 'c5', code: 'CSE 1111', title: 'Physics (Retake)', credits: 3.0, type: 'Retake', prereqs: 'None' },
];

export default function PlannerPage() {
  const [selectedCourses, setSelectedCourses] = useState<typeof mockEligibleCourses>([]);
  const [targetCredits, setTargetCredits] = useState(12);
  const [targetTrimester, setTargetTrimester] = useState('Spring 2026');

  const totalCredits = selectedCourses.reduce((sum, c) => sum + c.credits, 0);
  const isOverLimit = totalCredits > targetCredits;
  const hasRetakes = selectedCourses.some(c => c.type === 'Retake');

  const toggleCourse = (course: typeof mockEligibleCourses[0]) => {
    if (selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 h-full">
      {/* Left Column: Eligible Courses */}
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Next Trimester Planner</h1>
          <p className="text-sm text-slate-500 mt-1">Select courses for {targetTrimester}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Eligible Courses</h2>
            <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {mockEligibleCourses.length} available
            </div>
          </div>

          <div className="space-y-3">
            {mockEligibleCourses.map((course) => {
              const isSelected = selectedCourses.some(c => c.id === course.id);
              return (
                <div 
                  key={course.id}
                  onClick={() => toggleCourse(course)}
                  className={`border rounded-xl p-4 cursor-pointer transition-all flex items-center justify-between group ${
                    isSelected ? 'border-blue-500 bg-blue-50/50 ring-1 ring-blue-500' : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900">{course.code}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        course.type === 'Retake' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {course.credits} Cr • {course.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{course.title}</p>
                    <p className="text-xs text-slate-400 mt-1">Prereqs: {course.prereqs}</p>
                  </div>
                  <div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      {isSelected ? <X size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: The Plan */}
      <div className="lg:w-96 flex flex-col gap-6">
        <div className="bg-slate-900 rounded-2xl shadow-xl p-6 text-white sticky top-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Your Plan</h2>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Settings size={20} />
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-end border-b border-slate-700 pb-4">
              <div className="text-slate-400 text-sm">Target Trimester</div>
              <select 
                value={targetTrimester}
                onChange={(e) => setTargetTrimester(e.target.value)}
                className="bg-transparent border-none text-right font-semibold text-white focus:ring-0 p-0"
              >
                <option value="Spring 2026" className="text-black">Spring 2026</option>
                <option value="Summer 2026" className="text-black">Summer 2026</option>
                <option value="Fall 2026" className="text-black">Fall 2026</option>
              </select>
            </div>
            
            <div className="flex justify-between items-end border-b border-slate-700 pb-4">
              <div className="text-slate-400 text-sm">Target Credits</div>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  value={targetCredits}
                  onChange={(e) => setTargetCredits(Number(e.target.value))}
                  className="bg-transparent border-none text-right font-semibold text-white focus:ring-0 p-0 w-12"
                />
                <span className="text-slate-400 text-sm">Cr</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between items-end mb-2">
                <div className="text-slate-400 text-sm">Selected Credits</div>
                <div className={`font-bold text-2xl ${isOverLimit ? 'text-red-400' : 'text-white'}`}>
                  {totalCredits} <span className="text-sm font-normal text-slate-400">/ {targetCredits}</span>
                </div>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full transition-all ${isOverLimit ? 'bg-red-500' : 'bg-blue-500'}`} 
                  style={{ width: `${Math.min((totalCredits / targetCredits) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {isOverLimit && (
            <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-3 flex gap-3 mb-6">
              <AlertTriangle className="text-red-400 h-5 w-5 flex-shrink-0" />
              <p className="text-xs text-red-200 leading-relaxed">
                You have exceeded your target credit limit. Advising approval may be difficult.
              </p>
            </div>
          )}

          {hasRetakes && !isOverLimit && (
            <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-3 flex gap-3 mb-6">
              <Clock className="text-amber-400 h-5 w-5 flex-shrink-0" />
              <p className="text-xs text-amber-200 leading-relaxed">
                You have included retakes. Good job prioritising these.
              </p>
            </div>
          )}

          <div className="space-y-2 mb-8 min-h-[150px]">
            {selectedCourses.length === 0 ? (
              <div className="text-center text-slate-500 text-sm py-10 flex flex-col items-center gap-2">
                <BookOpen size={24} className="opacity-50" />
                No courses selected yet
              </div>
            ) : (
              selectedCourses.map(c => (
                <div key={c.id} className="flex justify-between items-center text-sm py-2 border-b border-slate-800 last:border-0">
                  <div className="flex flex-col">
                    <span className="font-semibold">{c.code}</span>
                    <span className="text-xs text-slate-400 truncate w-40">{c.title}</span>
                  </div>
                  <div className="text-slate-300 font-medium">{c.credits} Cr</div>
                </div>
              ))
            )}
          </div>

          <button 
            disabled={selectedCourses.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3.5 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Save size={18} />
            Save Draft Plan
          </button>
          
          <p className="text-[10px] text-slate-500 text-center mt-4">
            Saving this plan does not officially register you for courses. You must still register via the university portal.
          </p>
        </div>
      </div>
    </div>
  );
}
