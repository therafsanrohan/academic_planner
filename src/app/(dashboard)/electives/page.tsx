'use client';

import { Layers, Plus, Check } from 'lucide-react';
import { useState } from 'react';

const mockElectiveGroups = [
  {
    id: 'e1',
    name: 'Artificial Intelligence Specialisation',
    required_credits: 9,
    selected_credits: 3,
    courses: [
      { code: 'CSE4411', title: 'Machine Learning', credits: 3, selected: true },
      { code: 'CSE4413', title: 'Deep Learning', credits: 3, selected: false },
      { code: 'CSE4415', title: 'Computer Vision', credits: 3, selected: false },
      { code: 'CSE4417', title: 'Natural Language Processing', credits: 3, selected: false },
    ]
  },
  {
    id: 'e2',
    name: 'Software Engineering Specialisation',
    required_credits: 9,
    selected_credits: 0,
    courses: [
      { code: 'SWE4421', title: 'Software Architecture', credits: 3, selected: false },
      { code: 'SWE4423', title: 'Software Quality Assurance', credits: 3, selected: false },
      { code: 'SWE4425', title: 'Requirements Engineering', credits: 3, selected: false },
    ]
  }
];

export default function ElectivesPage() {
  const [groups, setGroups] = useState(mockElectiveGroups);

  const toggleSelection = (groupId: string, courseCode: string) => {
    setGroups(groups.map(g => {
      if (g.id !== groupId) return g;
      
      const newCourses = g.courses.map(c => {
        if (c.code === courseCode) {
          return { ...c, selected: !c.selected };
        }
        return c;
      });
      
      const selectedCredits = newCourses.filter(c => c.selected).reduce((sum, c) => sum + c.credits, 0);
      
      return { ...g, courses: newCourses, selected_credits: selectedCredits };
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Layers className="h-8 w-8 text-blue-600" />
            Elective Catalogue
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Select the electives you intend to take. These will appear in your My Course Plan.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {groups.map((group) => {
          const isSatisfied = group.selected_credits >= group.required_credits;
          const progressPercent = Math.min(100, (group.selected_credits / group.required_credits) * 100);

          return (
            <div key={group.id} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-xl shadow-slate-200/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{group.name}</h2>
                  <p className="text-sm text-slate-500 mt-1">Select {group.required_credits} credits from this group</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`text-sm font-bold ${isSatisfied ? 'text-green-600' : 'text-blue-600'}`}>
                      {group.selected_credits} / {group.required_credits} Credits
                    </p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Selected</p>
                  </div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${isSatisfied ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                    {Math.round(progressPercent)}%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.courses.map((c) => (
                  <div 
                    key={c.code}
                    onClick={() => toggleSelection(group.id, c.code)}
                    className={`group relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      c.selected 
                        ? 'border-blue-500 bg-blue-50/50 shadow-md shadow-blue-500/10' 
                        : 'border-slate-200 bg-white/50 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="absolute top-4 right-4">
                      {c.selected ? (
                        <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-slate-300 group-hover:border-blue-400 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-colors">
                          <Plus size={14} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className={`font-bold ${c.selected ? 'text-blue-900' : 'text-slate-700'}`}>{c.code}</h3>
                      <p className={`text-sm mt-1 mb-3 line-clamp-2 ${c.selected ? 'text-blue-700/80' : 'text-slate-500'}`}>
                        {c.title}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                        c.selected ? 'bg-blue-200/50 text-blue-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {c.credits} Credits
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
