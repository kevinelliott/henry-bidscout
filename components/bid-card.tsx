import Link from "next/link";
import { DemoBid } from "@/lib/demo-bids";
import CategoryBadge from "./category-badge";
import DeadlineBadge from "./deadline-badge";
import { formatValueRange } from "@/lib/utils";

interface BidCardProps {
  bid: DemoBid;
  showSignUpCta?: boolean;
}

export default function BidCard({ bid, showSignUpCta = false }: BidCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">{bid.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{bid.agency}</p>
        </div>
        <CategoryBadge category={bid.category} />
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{bid.description}</p>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <DeadlineBadge deadline={bid.deadline} />
        <span className="text-sm font-medium text-gray-700">
          {formatValueRange(bid.value_min, bid.value_max)}
        </span>
        {bid.location && (
          <span className="text-xs text-gray-500">📍 {bid.location}</span>
        )}
      </div>

      {bid.naics_code && (
        <p className="text-xs text-gray-400 mb-4">NAICS: {bid.naics_code}</p>
      )}

      <div className="flex items-center justify-between">
        {showSignUpCta ? (
          <Link
            href="/auth/signup"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Track this bid →
          </Link>
        ) : (
          <span className="text-xs text-gray-400">Demo opportunity</span>
        )}
      </div>
    </div>
  );
}
