import Link from "next/link";
import StatusBadge from "@/components/status-badge";
import DeadlineBadge from "@/components/deadline-badge";
import CategoryBadge from "@/components/category-badge";
import { formatValueRange } from "@/lib/utils";

// Demo bids for the dashboard
const demoDashboardBids = [
  {
    id: "1",
    title: "City Road Resurfacing District 4",
    agency: "City of Oakland Public Works",
    category: "construction",
    value_min: 800000,
    value_max: 1200000,
    deadline: "2026-03-18",
    status: "pursuing",
    notes: "Strong local preference. Need to submit by EOD March 17.",
  },
  {
    id: "2",
    title: "DoD IT Modernization – Enterprise Cloud",
    agency: "Department of Defense",
    category: "IT",
    value_min: 2000000,
    value_max: 5000000,
    deadline: "2026-03-13",
    status: "submitted",
    notes: "Proposal submitted. Awaiting evaluation.",
  },
  {
    id: "3",
    title: "School District Janitorial Services",
    agency: "Sacramento Unified School District",
    category: "services",
    value_min: 150000,
    value_max: 150000,
    deadline: "2026-03-15",
    status: "researching",
    notes: "Need to review bonding requirements.",
  },
  {
    id: "4",
    title: "County Fleet Maintenance",
    agency: "Alameda County",
    category: "services",
    value_min: 200000,
    value_max: 200000,
    deadline: "2026-04-01",
    status: "pursuing",
    notes: "Met with procurement officer 3/5.",
  },
  {
    id: "5",
    title: "Municipal Website Redesign",
    agency: "City of Fresno",
    category: "IT",
    value_min: 120000,
    value_max: 120000,
    deadline: "2026-03-16",
    status: "researching",
    notes: "",
  },
  {
    id: "6",
    title: "VA Medical Center Supplies",
    agency: "Department of Veterans Affairs",
    category: "supplies",
    value_min: 300000,
    value_max: 300000,
    deadline: "2026-04-05",
    status: "won",
    notes: "Awarded! Contract starts April 15.",
  },
];

export default function BidsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Bids</h1>
          <p className="text-gray-500 text-sm mt-1">Track and manage your bid pipeline</p>
        </div>
        <Link
          href="/dashboard/discover"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          + Add bid
        </Link>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["All", "Researching", "Pursuing", "Submitted", "Won", "Lost"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              tab === "All"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bids table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Bid</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Category</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Value</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Deadline</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {demoDashboardBids.map((bid) => (
                <tr key={bid.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900 line-clamp-1">{bid.title}</p>
                    <p className="text-xs text-gray-400">{bid.agency}</p>
                  </td>
                  <td className="px-4 py-3">
                    <CategoryBadge category={bid.category} />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                    {formatValueRange(bid.value_min, bid.value_max)}
                  </td>
                  <td className="px-4 py-3">
                    <DeadlineBadge deadline={bid.deadline} />
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={bid.status} />
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/bids/${bid.id}`}
                      className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
        <span>6 bids total</span>
        <span>·</span>
        <span>1 won</span>
        <span>·</span>
        <span>1 submitted</span>
        <span>·</span>
        <span>2 pursuing</span>
        <span>·</span>
        <span>2 researching</span>
      </div>
    </div>
  );
}
