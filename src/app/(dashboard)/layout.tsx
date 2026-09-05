'use client';

import Link from 'next/link';
import { BookOpen, Home, List, CalendarDays, AlertTriangle, Settings, FileText, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'My Course Plan', href: '/courses', icon: List },
  { name: 'Next Trimester', href: '/planner', icon: CalendarDays },
  { name: 'Retakes', href: '/retakes', icon: AlertTriangle },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none fixed" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none fixed" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-violet-400/10 rounded-full blur-[120px] pointer-events-none fixed" />

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 border-r border-white/40 bg-white/60 backdrop-blur-xl shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-40">
        <div className="flex flex-col flex-grow pt-6 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 gap-3 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-indigo-900">
              Academic Planner
            </span>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 translate-x-1' 
                      : 'text-slate-600 hover:text-indigo-700 hover:bg-white/80 hover:shadow-sm'
                  }`}
                >
                  <item.icon 
                    className={`mr-3.5 flex-shrink-0 h-5 w-5 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'
                    }`} 
                    aria-hidden="true" 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-slate-200/50 p-5 bg-white/40">
          <div className="flex items-center w-full group cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-bold group-hover:scale-105 transition-transform shadow-sm">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-bold text-slate-800">John Doe</p>
              <p className="text-xs font-semibold text-slate-500 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                View profile <Sparkles size={12} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col flex-1 relative z-10">
        <main className="flex-1 pb-24 lg:pb-12">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-slate-200/60 safe-area-pb shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
        <nav className="flex justify-around px-2 py-2">
          {navigation.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full py-2 px-1 rounded-xl transition-all ${
                  isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <div className={`p-1.5 rounded-lg transition-colors ${isActive ? 'bg-blue-50' : ''}`}>
                  <item.icon className="h-6 w-6" aria-hidden="true" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] mt-1 font-semibold ${isActive ? 'text-blue-700' : ''}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
