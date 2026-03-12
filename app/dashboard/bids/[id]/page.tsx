import Link from "next/link";
import StatusBadge from "@/components/status-badge";
import CategoryBadge from "@/components/category-badge";
import DeadlineBadge from "@/components/deadline-badge";
import { formatValueRange } from "@/lib/utils";

// Static demo bid data for individual bid detail pages
const demoBidDetails: Record<string, {
  id: string;
  title: string;
  agency: string;
  category: string;
  value_min: number;
  value_max: number;
  deadline: string;
  status: string;
  source_url: string;
  description: string;
  notes: string;
  contact_name: string;
  contact_email: string;
  created_at: string;
  documents: { id: string; name: string; url: string }[];
  timeline: { date: string; event: string; note: string }[];
}> = {
  "1": {
    id: "1",
    title: "City Road Resurfacing District 4",
    agency: "City of Oakland Public Works",
    category: "construction",
    value_min: 800000,
    value_max: 1200000,
    deadline: "2026-03-18",
    status: "pursuing",
    source_url: "https://www.oaklandca.gov/bids",
    description: "Mill and overlay resurfacing of approximately 12 lane-miles of residential and collector streets. Includes ADA ramp upgrades and pavement markings. Local contractor preference applies.",
    notes: "Strong local preference — good fit for our Oakland operations. Need to submit by EOD March 17. Bond required: 10% bid bond, 100% performance bond.",
    contact_name: "Maria Chen",
    contact_email: "mchen@oaklandca.gov",
    created_at: "2026-03-01",
    documents: [
      { id: "d1", name: "RFP_Oakland_Resurfacing_D4.pdf", url: "#" },
      { id: "d2", name: "Site_Survey_Notes.docx", url: "#" },
      { id: "d3", name: "Draft_Proposal_v2.pdf", url: "#" },
    ],
    timeline: [
      { date: "2026-03-01", event: "Discovered", note: "Found on Oakland procurement portal" },
      { date: "2026-03-03", event: "Researching", note: "Downloaded RFP, reviewed requirements" },
      { date: "2026-03-07", event: "Site visit", note: "Walked District 4 streets with crew" },
      { date: "2026-03-10", event: "Pursuing", note: "Decision made to submit; assigned to proposal team" },
    ],
  },
  "2": {
    id: "2",
    title: "DoD IT Modernization – Enterprise Cloud",
    agency: "Department of Defense",
    category: "IT",
    value_min: 2000000,
    value_max: 5000000,
    deadline: "2026-03-13",
    status: "submitted",
    source_url: "https://sam.gov",
    description: "Full modernization of legacy IT systems to cloud-native architecture. Includes migration of 200+ applications, data center consolidation, and ongoing managed services for 3 years.",
    notes: "Proposal submitted on 3/12. Strong technical approach, competitive pricing. Evaluation period expected 4-6 weeks.",
    contact_name: "James Wright",
    contact_email: "james.wright@dod.mil",
    created_at: "2026-02-15",
    documents: [
      { id: "d1", name: "SOW_DoD_IT_Modernization.pdf", url: "#" },
      { id: "d2", name: "Technical_Volume_v3.pdf", url: "#" },
      { id: "d3", name: "Price_Volume_Final.xlsx", url: "#" },
    ],
    timeline: [
      { date: "2026-02-15", event: "Discovered", note: "SAM.gov alert" },
      { date: "2026-02-20", event: "Researching", note: "Reviewed PWS and evaluation criteria" },
      { date: "2026-02-28", event: "Pursuing", note: "Go/No-go decision: GO" },
      { date: "2026-03-12", event: "Submitted", note: "Proposal uploaded to portal" },
    ],
  },
};

export default function BidDetailPage({ params }: { params: { id: string } }) {
  const bid = demoBidDetails[params.id] || {
    id: params.id,
    title: "Bid Not Found",
    agency: "Unknown",
    category: "services",
    value_min: 0,
    value_max: 0,
    deadline: "2026-04-01",
    status: "researching",
    source_url: "",
    description: "This bid could not be found in the demo data.",
    notes: "",
    contact_name: "",
    contact_email: "",
    created_at: "2026-03-01",
    documents: [],
    timeline: [],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard/bids" className="hover:text-gray-700">My Bids</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{bid.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">{bid.title}</h1>
            <p className="text-gray-500 text-sm">{bid.agency}</p>
          </div>
          <div className="flex items-center gap-2">
            <CategoryBadge category={bid.category} />
            <StatusBadge status={bid.status} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500 text-xs mb-1">Contract Value</p>
            <p className="font-semibold text-gray-900">{formatValueRange(bid.value_min, bid.value_max)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Deadline</p>
            <DeadlineBadge deadline={bid.deadline} />
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Added</p>
            <p className="text-gray-700">{bid.created_at}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-1">Source</p>
            {bid.source_url ? (
              <a href={bid.source_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                View source ↗
              </a>
            ) : (
              <span className="text-gray-400">—</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{bid.description}</p>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-gray-900">Internal Notes</h2>
              <button className="text-xs text-indigo-600 hover:text-indigo-700">Edit</button>
            </div>
            {bid.notes ? (
              <p className="text-sm text-gray-600 leading-relaxed">{bid.notes}</p>
            ) : (
              <p className="text-sm text-gray-400 italic">No notes yet. Click edit to add notes.</p>
            )}
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Documents</h2>
              <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700">
                + Upload
              </button>
            </div>
            {bid.documents.length > 0 ? (
              <div className="space-y-2">
                {bid.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📄</span>
                      <span className="text-sm text-gray-700">{doc.name}</span>
                    </div>
                    <a href={doc.url} className="text-xs text-indigo-600 hover:underline">Download</a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No documents uploaded yet.</p>
            )}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Status Timeline</h2>
            {bid.timeline.length > 0 ? (
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-4">
                  {bid.timeline.map((item, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 border-2 border-indigo-300 flex-shrink-0 z-10" />
                      <div className="pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{item.event}</span>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No timeline events yet.</p>
            )}
          </div>
        </div>

        {/* Contact sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Contact Log</h2>
            {bid.contact_name ? (
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Contracting Officer</p>
                  <p className="text-sm font-medium text-gray-900">{bid.contact_name}</p>
                </div>
                {bid.contact_email && (
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href={`mailto:${bid.contact_email}`} className="text-sm text-indigo-600 hover:underline">
                      {bid.contact_email}
                    </a>
                  </div>
                )}
                <button className="w-full mt-2 text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                  + Log contact
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-400 italic mb-3">No contact added yet.</p>
                <button className="w-full text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                  + Add contact
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">Update Status</h2>
            <div className="space-y-2">
              {["researching", "pursuing", "submitted", "won", "lost", "passed"].map((s) => (
                <button
                  key={s}
                  className={`w-full text-sm px-3 py-2 rounded-lg border transition-colors text-left capitalize ${
                    s === bid.status
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700 font-medium"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
