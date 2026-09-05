'use client';

import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronRight, UploadCloud, Link as LinkIcon, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, name: 'Personal Details' },
  { id: 2, name: 'Academic Info' },
  { id: 3, name: 'Course Plan' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    university: '',
    department: '',
    batch: '',
    currentTrimester: '',
    totalCredits: '',
    planUrl: ''
  });
  const [loading, setLoading] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate upload/parse
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl text-white shadow-lg shadow-blue-500/30 mb-6">
            <BookOpen size={36} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-indigo-900">
            Welcome to Academic Planner
          </h1>
          <p className="text-lg text-slate-600 mt-3 font-light">Let's set up your academic profile and parse your courses.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1.5 bg-slate-200/60 backdrop-blur-sm rounded-full" />
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out shadow-sm shadow-blue-500/50"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/40 scale-110'
                      : 'bg-white text-slate-400 border-2 border-slate-200/80 shadow-sm'
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle size={24} strokeWidth={2.5} /> : step.id}
                </div>
                <span className={`mt-3 text-xs font-semibold uppercase tracking-wider ${currentStep >= step.id ? 'text-indigo-900' : 'text-slate-500'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl shadow-2xl border border-white rounded-3xl p-8 sm:p-10 transition-all duration-300">
          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. 011211000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Academic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">University Name</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. United International University"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department / Programme</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. BSc in Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. 211"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Trimester</label>
                  <input
                    type="text"
                    name="currentTrimester"
                    value={formData.currentTrimester}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. Spring 2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Total Credit Requirement</label>
                  <input
                    type="number"
                    name="totalCredits"
                    value={formData.totalCredits}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="e.g. 138"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Upload Course Plan</h2>
              <p className="text-base text-slate-600 mb-6 font-light">
                Provide your course plan or transcript to automatically build your academic roadmap.
              </p>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-blue-200/80 rounded-2xl p-10 text-center bg-white/40 hover:bg-white/70 hover:border-blue-400 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                  <UploadCloud className="mx-auto h-16 w-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <p className="text-base font-bold text-slate-900">Click to upload PDF</p>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Course plan or transcript (Max 10MB)</p>
                </div>
                
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200/60" />
                  </div>
                  <div className="relative flex justify-center text-sm font-bold leading-6">
                    <span className="bg-white/80 backdrop-blur-md px-6 text-slate-400 rounded-full">OR</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Paste Public Link</label>
                  <div className="mt-1 relative rounded-xl shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <LinkIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="url"
                      name="planUrl"
                      value={formData.planUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/course-plan.pdf"
                      className="block w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm pl-12 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 flex justify-between pt-8 border-t border-slate-200/60">
            <button
              onClick={prevStep}
              disabled={currentStep === 1 || loading}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                currentStep === 1
                  ? 'text-slate-300 cursor-not-allowed opacity-50'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md active:scale-95'
              }`}
            >
              Back
            </button>
            <button
              onClick={currentStep === steps.length ? handleSubmit : nextStep}
              disabled={loading}
              className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait"
            >
              {loading ? (
                <>
                  <Sparkles size={18} className="animate-spin" /> Processing...
                </>
              ) : currentStep === steps.length ? (
                'Complete Setup'
              ) : (
                <>
                  Continue <ChevronRight size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
          </div>
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
