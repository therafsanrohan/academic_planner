'use client';

import { useState } from 'react';
import { UploadCloud, Link as LinkIcon, FileText, CheckCircle, AlertCircle } from 'lucide-react';
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
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Documents & Imports</h1>
        <p className="text-sm text-slate-500 mt-1">Upload course plans or transcripts to automatically update your academic profile.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Import New Document</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* File Upload */}
          <div 
            onClick={handleSimulatedUpload}
            className={`border-2 border-dashed border-slate-300 rounded-xl p-8 text-center transition-colors cursor-pointer ${
              isUploading ? 'bg-slate-50 opacity-70 pointer-events-none' : 'hover:bg-slate-50'
            }`}
          >
            {isUploading ? (
              <div className="animate-pulse">
                <div className="mx-auto h-12 w-12 text-blue-900/50 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="w-6 h-6 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></span>
                </div>
                <p className="text-sm font-medium text-slate-900">Analyzing Document...</p>
                <p className="text-xs text-slate-500 mt-1">Extracting courses and prerequisites</p>
              </div>
            ) : (
              <>
                <UploadCloud className="mx-auto h-12 w-12 text-blue-900 mb-4" />
                <p className="text-sm font-medium text-slate-900">Click to upload PDF</p>
                <p className="text-xs text-slate-500 mt-1">Course plan or transcript (Max 10MB)</p>
              </>
            )}
          </div>

          {/* URL Upload */}
          <div className="flex flex-col justify-center">
            <div className="relative mb-6 md:hidden">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-slate-900">OR</span>
              </div>
            </div>

            <label className="block text-sm font-medium text-slate-700 mb-2">Paste Public Link</label>
            <div className="relative rounded-md shadow-sm mb-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LinkIcon className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/course-plan.pdf"
                className="block w-full rounded-md border border-slate-300 pl-10 px-3 py-2.5 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
              />
            </div>
            <button
              onClick={handleSimulatedUpload}
              disabled={!url || isUploading}
              className="w-full bg-blue-900 text-white rounded-md py-2.5 font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Import from URL
            </button>
          </div>
        </div>
      </div>

      {/* Previous Uploads */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Previous Uploads</h2>
        <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
          <ul className="divide-y divide-slate-100">
            <li className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Fall_2025_Transcript.pdf</p>
                  <p className="text-xs text-slate-500">Uploaded on Oct 12, 2025</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <CheckCircle size={12} />
                Processed
              </span>
            </li>
            <li className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <LinkIcon className="h-6 w-6 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">CS_Department_Curriculum.pdf</p>
                  <p className="text-xs text-slate-500">Imported from URL on Aug 4, 2025</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <AlertCircle size={12} />
                Needs Review
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
