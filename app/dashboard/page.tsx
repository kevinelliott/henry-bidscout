import Link from "next/link";

// Dashboard overview with demo stats
export default function DashboardPage() {
  const stats = [
    { label: "Bids Tracked", value: "12", change: "+3 this week", icon: "📋", color: "bg-blue-50 text-blue-700" },
    { label: "Deadlines This Week", value: "4", change: "2 urgent", icon: "⏰", color: "bg-yellow-50 text-yellow-700" },
    { label: "Win Rate", value: "34%", change: "+8% vs last quarter", icon: "🏆", color: "bg-green-50 text-green-700" },
    { label: "Total Value Pursuing", value: "$4.2M", change: "Across 7 active bids", icon: "💰", color: "bg-purple-50 text-purple-700" },
  ];

  const recentBids = [
    { id: "1", title: "City Road Resurfacing District 4", agency: "City of Oakland", deadline: "2026-03-18", status: "pursuing", value: "$800K–$1.2M" },
    { id: "2", title: "DoD IT Modernization", agency: "Department of Defense", deadline: "2026-03-13", status: "submitted", value: "$2M–$5M" },
    { id: "3", title: "School District Janitorial", agency: "Sacramento USD", deadline: "2026-03-15", status: "researching", value: "$150K/yr" },
    { id: "4", title: "County Fleet Maintenance", agency: "Alameda County", deadline: "2026-04-01", status: "pursuing", value: "$200K" },
  ];

  const statusClasses: Record<string, string> = {
    researching: "bg-blue-100 text-blue-700",
    pursuing: "bg-indigo-100 text-indigo-700",
    submitted: "bg-yellow-100 text-yellow-700",
    won: "bg-green-100 text-green-700",
    lost: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Your bid pipeline overview</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-xl mb-3 ${stat.color}`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm font-medium text-gray-700">{stat.label}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent bids */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Bids</h2>
            <Link href="/dashboard/bids" className="text-sm text-indigo-600 hover:text-indigo-700">View all →</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentBids.map((bid) => (
              <div key={bid.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <Link href={`/dashboard/bids/${bid.id}`} className="text-sm font-medium text-gray-900 hover:text-indigo-600 line-clamp-1">
                      {bid.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-0.5">{bid.agency}</p>
                    <p className="text-xs text-gray-400 mt-1">Deadline: {bid.deadline} · {bid.value}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${statusClasses[bid.status] || "bg-gray-100 text-gray-600"}`}>
                    {bid.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions + upcoming deadlines */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link
                href="/dashboard/bids"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <span className="text-xl">➕</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Add new bid</p>
                  <p className="text-xs text-gray-500">Track a new opportunity</p>
                </div>
              </Link>
              <Link
                href="/dashboard/discover"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <span className="text-xl">🔍</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Browse opportunities</p>
                  <p className="text-xs text-gray-500">Discover new contracts</p>
                </div>
              </Link>
              <Link
                href="/dashboard/alerts"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <span className="text-xl">🔔</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Configure alerts</p>
                  <p className="text-xs text-gray-500">Set deadline notifications</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">⚠️ Upcoming Deadlines</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">DoD IT Modernization</span>
                <span className="text-red-600 font-semibold text-xs">Today</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">School District Janitorial</span>
                <span className="text-orange-600 font-semibold text-xs">3 days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">City Road Resurfacing</span>
                <span className="text-yellow-600 font-semibold text-xs">6 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
