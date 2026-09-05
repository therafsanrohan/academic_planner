'use client';

import { useState } from 'react';
import { Plus, X, AlertTriangle, BookOpen, Clock, Settings, Save, Check } from 'lucide-react';

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
    <div className="p-6 lg:p-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 h-full animate-fade-in-up">
      {/* Left Column: Eligible Courses */}
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Next Trimester Planner</h1>
          <p className="text-slate-500 mt-1 font-medium">Select courses for {targetTrimester}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Eligible Courses</h2>
            <div className="text-xs font-bold text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
              {mockEligibleCourses.length} available
            </div>
          </div>

          <div className="space-y-4">
            {mockEligibleCourses.map((course) => {
              const isSelected = selectedCourses.some(c => c.id === course.id);
              return (
                <div 
                  key={course.id}
                  onClick={() => toggleCourse(course)}
                  className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 flex items-center justify-between group shadow-sm hover:shadow-md border ${
                    isSelected 
                      ? 'border-indigo-300 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 ring-2 ring-indigo-500/20 shadow-indigo-100' 
                      : 'border-white bg-white/80 hover:border-indigo-200 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-bold text-slate-900 text-lg">{course.code}</span>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${
                        course.type === 'Retake' 
                          ? 'bg-rose-50 text-rose-700 border-rose-200' 
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {course.credits} Cr • {course.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">{course.title}</p>
                    <p className="text-xs font-semibold text-slate-400 mt-2 flex items-center gap-1">
                      <Clock size={12} /> Prereqs: {course.prereqs}
                    </p>
                  </div>
                  <div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isSelected 
                        ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white scale-110 shadow-indigo-500/30' 
                        : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-105 border border-slate-200'
                    }`}>
                      {isSelected ? <Check size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={2.5} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: The Plan */}
      <div className="lg:w-[420px] flex flex-col gap-6">
        <div className="bg-slate-900/95 backdrop-blur-3xl rounded-3xl shadow-2xl p-8 text-white sticky top-8 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-center mb-8 relative z-10">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Your Plan</h2>
            <button className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-xl">
              <Settings size={20} />
            </button>
          </div>

          <div className="space-y-6 mb-8 relative z-10">
            <div className="flex justify-between items-center border-b border-white/10 pb-5">
              <div className="text-slate-400 text-sm font-medium">Target Trimester</div>
              <select 
                value={targetTrimester}
                onChange={(e) => setTargetTrimester(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg text-right font-bold text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1.5 cursor-pointer outline-none transition-all"
              >
                <option value="Spring 2026" className="text-slate-900 font-medium">Spring 2026</option>
                <option value="Summer 2026" className="text-slate-900 font-medium">Summer 2026</option>
                <option value="Fall 2026" className="text-slate-900 font-medium">Fall 2026</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center border-b border-white/10 pb-5">
              <div className="text-slate-400 text-sm font-medium">Target Credits</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                <input 
                  type="number" 
                  value={targetCredits}
                  onChange={(e) => setTargetCredits(Number(e.target.value))}
                  className="bg-transparent border-none text-right font-bold text-white focus:ring-0 p-0 w-12 outline-none"
                />
                <span className="text-slate-400 text-sm font-bold">Cr</span>
              </div>
            </div>

            <div className="pt-4 bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex justify-between items-end mb-3">
                <div className="text-slate-400 text-sm font-medium">Selected Credits</div>
                <div className={`font-extrabold text-3xl tracking-tight transition-colors ${isOverLimit ? 'text-rose-400' : 'text-white'}`}>
                  {totalCredits} <span className="text-base font-medium text-slate-400">/ {targetCredits}</span>
                </div>
              </div>
              <div className="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden shadow-inner">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out shadow-lg ${isOverLimit ? 'bg-gradient-to-r from-rose-500 to-rose-400' : 'bg-gradient-to-r from-indigo-500 to-blue-500'}`} 
                  style={{ width: `${Math.min((totalCredits / targetCredits) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {isOverLimit && (
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 flex gap-4 mb-6 relative z-10 backdrop-blur-sm">
              <div className="bg-rose-500/20 p-2 rounded-xl h-fit">
                <AlertTriangle className="text-rose-400 h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
              </div>
              <p className="text-sm font-medium text-rose-200/90 leading-relaxed">
                You have exceeded your target credit limit. Advising approval may be difficult.
              </p>
            </div>
          )}

          {hasRetakes && !isOverLimit && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex gap-4 mb-6 relative z-10 backdrop-blur-sm">
              <div className="bg-amber-500/20 p-2 rounded-xl h-fit">
                <Clock className="text-amber-400 h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
              </div>
              <p className="text-sm font-medium text-amber-200/90 leading-relaxed">
                You have included retakes. Good job prioritising these.
              </p>
            </div>
          )}

          <div className="space-y-3 mb-8 min-h-[150px] relative z-10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Selected Courses</h3>
            {selectedCourses.length === 0 ? (
              <div className="text-center text-slate-500 text-sm py-12 flex flex-col items-center gap-3 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                <BookOpen size={28} className="opacity-40" strokeWidth={1.5} />
                <span className="font-medium">No courses selected yet</span>
              </div>
            ) : (
              selectedCourses.map(c => (
                <div key={c.id} className="flex justify-between items-center text-sm py-3 px-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-base">{c.code}</span>
                    <span className="text-xs font-medium text-slate-400 truncate w-44">{c.title}</span>
                  </div>
                  <div className="text-indigo-300 font-bold bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">{c.credits} Cr</div>
                </div>
              ))
            )}
          </div>

          <button 
            disabled={selectedCourses.length === 0}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white rounded-2xl py-4 font-bold text-base transition-all disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 active:translate-y-0 relative z-10"
          >
            <Save size={20} strokeWidth={2.5} />
            Save Draft Plan
          </button>
          
          <p className="text-[11px] font-medium text-slate-500 text-center mt-5 px-4 relative z-10">
            Saving this plan does not officially register you for courses. You must still register via the university portal.
          </p>
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
