import Link from 'next/link';
import { BookOpen, Users, Database, FileText, Settings, ShieldAlert, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/admin', icon: Database },
  { name: 'Universities & Programmes', href: '#', icon: BookOpen },
  { name: 'Course Management', href: '#', icon: FileText },
  { name: 'Students', href: '#', icon: Users },
  { name: 'Extraction Audit', href: '#', icon: ShieldAlert },
  { name: 'Settings', href: '#', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-300 font-sans">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 border-r border-slate-800 bg-slate-950">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 gap-2 mb-8">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <ShieldAlert size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">Admin Console</span>
          </div>
          
          <div className="px-6 mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Management</p>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <item.icon className="mr-3 flex-shrink-0 h-5 w-5 text-slate-500 group-hover:text-blue-400" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-slate-800 p-4">
          <button className="flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors">
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5" aria-hidden="true" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur flex items-center justify-between px-8">
          <h2 className="text-sm font-medium text-slate-400">Academic Planner Administration</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm">Super Admin</span>
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              SA
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
