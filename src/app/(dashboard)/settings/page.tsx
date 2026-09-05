'use client';

import { Settings, User, Book, Save, Download, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [targetCredits, setTargetCredits] = useState(12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <Settings className="h-8 w-8 text-blue-600" />
          Settings
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium">
          Manage your personal profile, curriculum preferences, and data exports.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Details */}
          <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-indigo-500" />
              Personal Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Student ID</label>
                <input type="text" defaultValue="011232000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800" />
              </div>
            </div>
          </div>

          {/* Academic Profile */}
          <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Book className="h-5 w-5 text-indigo-500" />
              Academic Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Institution</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800">
                  <option>United International University (UIU)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Department</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800">
                  <option>Computer Science & Engineering</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Active Curriculum Batch</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800">
                  <option>UIU CSE Summer 232 (138 Credits)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Target Credits Per Trimester</label>
                <input 
                  type="number" 
                  value={targetCredits} 
                  onChange={(e) => setTargetCredits(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-800" 
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-lg shadow-blue-500/30">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Data Exports</h2>
            <p className="text-sm text-slate-500 mb-6">Download your personal backup data as a JSON file. This includes your completed courses and mapped curriculum.</p>
            
            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors border border-slate-200">
              <Download size={18} />
              Export Backup (JSON)
            </button>
          </div>

          <div className="bg-red-50/50 backdrop-blur-xl border border-red-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-red-900 mb-4">Danger Zone</h2>
            <p className="text-sm text-red-700/80 mb-6">Sign out of your account. Ensure you have saved any pending plan changes.</p>
            
            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-100 hover:bg-red-200 text-red-700 font-bold transition-colors border border-red-200">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
