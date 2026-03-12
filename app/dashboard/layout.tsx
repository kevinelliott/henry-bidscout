import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-56 bg-white border-r border-gray-200 flex-col">
        <div className="p-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <span className="font-bold text-gray-900">BidScout</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>📊</span> Overview
          </Link>
          <Link
            href="/dashboard/bids"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>📋</span> My Bids
          </Link>
          <Link
            href="/dashboard/discover"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>🔍</span> Discover
          </Link>
          <Link
            href="/dashboard/alerts"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>⏰</span> Alerts
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span>⚙️</span> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link
            href="/discover"
            className="block text-xs text-gray-400 hover:text-gray-600"
          >
            Public discover →
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top nav */}
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <span className="font-bold text-gray-900">BidScout</span>
          </Link>
          <div className="flex gap-3 text-sm">
            <Link href="/dashboard/bids" className="text-gray-600">Bids</Link>
            <Link href="/dashboard/discover" className="text-gray-600">Discover</Link>
            <Link href="/dashboard/settings" className="text-gray-600">Settings</Link>
          </div>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
