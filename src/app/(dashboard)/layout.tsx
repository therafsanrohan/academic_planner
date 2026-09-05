import Link from 'next/link';
import { BookOpen, Home, List, CalendarDays, AlertTriangle, Settings, FileText } from 'lucide-react';

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
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 border-r border-slate-200/60 bg-white">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 gap-2">
            <div className="bg-blue-900 p-1.5 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight text-blue-950">Academic Planner</span>
          </div>
          <nav className="mt-8 flex-1 px-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
              >
                <item.icon className="mr-3 flex-shrink-0 h-5 w-5 text-slate-400 group-hover:text-blue-900" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-slate-200/60 p-4">
          <div className="flex items-center w-full">
            <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-700">John Doe</p>
              <p className="text-xs font-medium text-slate-500 hover:text-slate-700 cursor-pointer">View profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200/60 safe-area-pb">
        <nav className="flex justify-around">
          {navigation.slice(0, 5).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center w-full py-3 text-slate-500 hover:text-blue-900 transition-colors"
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
              <span className="text-[10px] mt-1 font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
