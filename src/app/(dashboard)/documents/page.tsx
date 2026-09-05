'use client';

import { useState } from 'react';
import { UploadCloud, Link as LinkIcon, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DocumentsPage() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [url, setUrl] = useState('');

  const handleSimulatedUpload = async () => {
    setIsUploading(true);
    
    // Simulate API call to our mock extract endpoint
    try {
      const formData = new FormData();
      formData.append('url', url || 'simulated-file');
      
      const res = await fetch('/api/extract', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        // In a real app, we might store the ID in a session or pass via URL state
        router.push('/review');
      }
    } catch (e) {
      console.error(e);
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto animate-fade-in-up">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Documents & Imports</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Upload course plans or transcripts to automatically update your academic profile.</p>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-10 relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        
        <h2 className="text-xl font-extrabold text-slate-900 mb-6 relative z-10">Import New Document</h2>
        
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {/* File Upload */}
          <div 
            onClick={handleSimulatedUpload}
            className={`border-2 border-dashed rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer flex flex-col justify-center items-center h-full ${
              isUploading 
                ? 'border-indigo-300 bg-indigo-50/50 pointer-events-none opacity-90' 
                : 'border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/30 hover:shadow-inner'
            }`}
          >
            {isUploading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-16 w-16 bg-white shadow-sm rounded-full flex items-center justify-center mb-5 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-100"></div>
                  <Loader2 className="h-8 w-8 text-indigo-600 animate-spin relative z-10" strokeWidth={3} />
                </div>
                <p className="text-base font-bold text-slate-900">Analyzing Document...</p>
                <p className="text-sm font-medium text-slate-500 mt-1">Extracting courses and prerequisites</p>
              </div>
            ) : (
              <div className="flex flex-col items-center group">
                <div className="h-16 w-16 bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-300 rounded-full flex items-center justify-center mb-5">
                  <UploadCloud className="h-7 w-7 text-indigo-500" strokeWidth={2.5} />
                </div>
                <p className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">Click to upload PDF</p>
                <p className="text-sm font-medium text-slate-500 mt-2">Course plan or transcript (Max 10MB)</p>
              </div>
            )}
          </div>

          {/* URL Upload */}
          <div className="flex flex-col justify-center py-2">
            <div className="relative mb-8 md:hidden">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-slate-50/80 backdrop-blur-sm px-6 text-slate-500 font-bold tracking-widest uppercase">OR</span>
              </div>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Paste Public Link</label>
              <div className="relative mb-5 group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" strokeWidth={2.5} />
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/course-plan.pdf"
                  className="block w-full rounded-xl border border-slate-300/80 bg-white pl-11 px-4 py-3.5 text-slate-900 font-medium placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none shadow-sm"
                />
              </div>
              <button
                onClick={handleSimulatedUpload}
                disabled={!url || isUploading}
                className="w-full bg-slate-900 hover:bg-indigo-600 text-white rounded-xl py-3.5 font-bold transition-all disabled:opacity-50 disabled:grayscale disabled:hover:bg-slate-900 flex justify-center items-center gap-2 active:scale-95 shadow-md hover:shadow-indigo-500/25"
              >
                Import from URL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Uploads */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 mb-6">Previous Uploads</h2>
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <ul className="divide-y divide-slate-100/80">
            <li className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-5">
                <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-2xl group-hover:scale-105 group-hover:bg-indigo-100 transition-all">
                  <FileText className="h-7 w-7 text-indigo-600" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">Fall_2025_Transcript.pdf</p>
                  <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Uploaded on Oct 12, 2025</p>
                </div>
              </div>
              <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm w-fit">
                <CheckCircle size={14} strokeWidth={2.5} />
                Processed
              </span>
            </li>
            <li className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-5">
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-2xl group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                  <LinkIcon className="h-7 w-7 text-amber-600" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">CS_Department_Curriculum.pdf</p>
                  <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Imported from URL on Aug 4, 2025</p>
                </div>
              </div>
              <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 shadow-sm w-fit">
                <AlertCircle size={14} strokeWidth={2.5} />
                Needs Review
              </span>
            </li>
          </ul>
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
