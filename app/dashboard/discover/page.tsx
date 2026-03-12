"use client";

import { useState } from "react";
import Link from "next/link";
import { demoBids } from "@/lib/demo-bids";
import CategoryBadge from "@/components/category-badge";
import DeadlineBadge from "@/components/deadline-badge";
import { formatValueRange } from "@/lib/utils";

export default function DashboardDiscoverPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = demoBids.filter((bid) => {
    const matchesCategory = category === "all" || bid.category === category;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      bid.title.toLowerCase().includes(q) ||
      bid.agency.toLowerCase().includes(q) ||
      bid.description.toLowerCase().includes(q) ||
      bid.location.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", "construction", "IT", "services", "supplies"];
  const categoryLabels: Record<string, string> = {
    all: "All",
    construction: "Construction",
    IT: "IT",
    services: "Services",
    supplies: "Supplies",
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Discover Opportunities</h1>
        <p className="text-gray-500 text-sm mt-1">Browse and search active procurement opportunities</p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, agency, or location..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} opportunit{filtered.length === 1 ? "y" : "ies"} found
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((bid) => (
          <div key={bid.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">{bid.title}</h3>
              <CategoryBadge category={bid.category} />
            </div>
            <p className="text-xs text-gray-500 mb-2">{bid.agency} · {bid.location}</p>
            <p className="text-xs text-gray-600 line-clamp-2 mb-3">{bid.description}</p>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <DeadlineBadge deadline={bid.deadline} />
              <span className="text-xs font-medium text-gray-700">{formatValueRange(bid.value_min, bid.value_max)}</span>
            </div>
            {bid.naics_code && (
              <p className="text-xs text-gray-400 mb-3">NAICS: {bid.naics_code}</p>
            )}
            <div className="flex gap-2">
              <button className="flex-1 text-xs bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Track this bid
              </button>
              <button className="text-xs border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-lg font-medium text-gray-600">No opportunities found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-gray-600">
        <strong className="text-indigo-700">Pro tip:</strong> Upgrade to Pro to get email alerts when new opportunities matching your criteria are posted. {" "}
        <Link href="/pricing" className="text-indigo-600 underline">View plans →</Link>
      </div>
    </div>
  );
}
