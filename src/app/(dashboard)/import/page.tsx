'use client';

import { UploadCloud, Link as LinkIcon, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ImportPlanPage() {
  const [importMode, setImportMode] = useState<'pdf' | 'url' | 'manual'>('pdf');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleSimulateImport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPreview(true);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-3">
          <UploadCloud className="h-8 w-8 text-indigo-600" />
          Import Course Plan
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium">
          Upload your official university course plan to automatically map your curriculum.
        </p>
      </div>

      {!showPreview ? (
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-indigo-900/5 rounded-3xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200/60">
            <button
              onClick={() => setImportMode('pdf')}
              className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${importMode === 'pdf' ? 'bg-indigo-50/50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <FileText size={18} />
              PDF Upload
            </button>
            <button
              onClick={() => setImportMode('url')}
              className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${importMode === 'url' ? 'bg-indigo-50/50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <LinkIcon size={18} />
              Official URL
            </button>
          </div>

          <div className="p-8">
            <form onSubmit={handleSimulateImport}>
              {importMode === 'pdf' && (
                <div className="border-2 border-dashed border-indigo-200 rounded-2xl p-12 text-center bg-indigo-50/30 hover:bg-indigo-50/60 transition-colors cursor-pointer group">
                  <div className="h-20 w-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <UploadCloud className="h-10 w-10 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-indigo-900">Click to upload or drag and drop</h3>
                  <p className="text-sm text-indigo-700/70 mt-1">PDF format (Max. 10MB)</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              )}

              {importMode === 'url' && (
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700">Official University Link</label>
                  <input 
                    type="url" 
                    placeholder="https://uiu.ac.bd/academics/curriculum..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                  <p className="text-xs text-slate-500 font-medium">We will attempt to scrape and extract the course requirements from this URL.</p>
                </div>
              )}

              <div className="mt-8">
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isProcessing ? 'Extracting Data...' : 'Start Import Process'}
                  {!isProcessing && <ArrowRight size={18} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-green-900/5 rounded-3xl overflow-hidden p-8 text-center">
           <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="h-12 w-12 text-green-600" />
           </div>
           <h2 className="text-2xl font-bold text-slate-900 mb-2">Extraction Successful</h2>
           <p className="text-slate-500 font-medium mb-8">We successfully extracted 42 courses and 8 curriculum sections from your document.</p>
           
           <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 text-left max-h-64 overflow-y-auto">
             <pre className="text-xs text-slate-600 font-mono">
{JSON.stringify({
  status: "Success",
  curriculum: "UIU CSE Summer 232",
  total_credits: 138,
  sections: [
    { name: "Language", courses: 2 },
    { name: "Core Courses", courses: 14 }
  ],
  unmapped_courses: 2
}, null, 2)}
             </pre>
           </div>
           
           <div className="flex gap-4">
             <button onClick={() => setShowPreview(false)} className="flex-1 py-3 px-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
               Cancel
             </button>
             <button className="flex-1 py-3 px-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors">
               Confirm & Save
             </button>
           </div>
        </div>
      )}
    </div>
  );
}
