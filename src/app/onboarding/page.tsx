'use client';

import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronRight, UploadCloud, Link as LinkIcon } from 'lucide-react';

const steps = [
  { id: 1, name: 'Personal Details' },
  { id: 2, name: 'Academic Info' },
  { id: 3, name: 'Course Plan' },
];

export default function OnboardingPage() {
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

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-900 p-3 rounded-xl text-white mb-4">
            <BookOpen size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-950">Welcome to Academic Planner</h1>
          <p className="text-slate-600 mt-2">Let's set up your academic profile</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full" />
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-900 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    currentStep >= step.id
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-400 border-2 border-slate-200'
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle size={20} /> : step.id}
                </div>
                <span className={`mt-2 text-xs font-medium ${currentStep >= step.id ? 'text-blue-900' : 'text-slate-500'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm border border-slate-200/60 rounded-2xl p-8">
          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Personal Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Academic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">University Name</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Department / Programme</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Current Trimester</label>
                  <input
                    type="text"
                    name="currentTrimester"
                    value={formData.currentTrimester}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Total Credit Requirement</label>
                  <input
                    type="number"
                    name="totalCredits"
                    value={formData.totalCredits}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Upload Course Plan</h2>
              <p className="text-sm text-slate-600 mb-4">
                Provide your course plan or transcript to automatically build your academic roadmap.
              </p>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloud className="mx-auto h-12 w-12 text-blue-900 mb-4" />
                  <p className="text-sm font-medium text-slate-900">Click to upload PDF</p>
                  <p className="text-xs text-slate-500 mt-1">Course plan or transcript (Max 10MB)</p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-slate-900">OR</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Paste Public Link</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <LinkIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="url"
                      name="planUrl"
                      value={formData.planUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/course-plan.pdf"
                      className="block w-full rounded-md border border-slate-300 pl-10 px-3 py-2 shadow-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between pt-6 border-t border-slate-100">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentStep === 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Back
            </button>
            <button
              onClick={currentStep === steps.length ? () => console.log('Submit', formData) : nextStep}
              className="px-6 py-2 rounded-md text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              {currentStep === steps.length ? 'Complete Setup' : 'Continue'}
              {currentStep !== steps.length && <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
