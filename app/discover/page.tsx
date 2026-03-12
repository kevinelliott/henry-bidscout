import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BidCard from "@/components/bid-card";
import { demoBids } from "@/lib/demo-bids";

export const revalidate = 3600;

export default function DiscoverPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string };
}) {
  const category = searchParams.category || "all";
  const page = parseInt(searchParams.page || "1", 10);
  const perPage = 6;

  const filtered = category === "all"
    ? demoBids
    : demoBids.filter((b) => b.category === category);

  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const bids = filtered.slice((page - 1) * perPage, page * perPage);

  const categories = ["all", "construction", "IT", "services", "supplies"];
  const categoryLabels: Record<string, string> = {
    all: "All Categories",
    construction: "Construction",
    IT: "IT",
    services: "Services",
    supplies: "Supplies",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200 py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Opportunities</h1>
            <p className="text-gray-600 mb-6">Browse active government procurement opportunities. No account required.</p>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/discover?category=${cat}&page=1`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {categoryLabels[cat]}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing {bids.length} of {total} opportunities
              </p>
              <Link
                href="/auth/signup"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign up to track bids →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bids.map((bid) => (
                <BidCard key={bid.id} bid={bid} showSignUpCta />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {page > 1 && (
                  <Link
                    href={`/discover?category=${category}&page=${page - 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                  >
                    ← Previous
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/discover?category=${category}&page=${p}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      p === page
                        ? "bg-indigo-600 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
                {page < totalPages && (
                  <Link
                    href={`/discover?category=${category}&page=${page + 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-12 px-4 bg-indigo-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to start tracking these opportunities?</h2>
            <p className="text-indigo-200 mb-6">Create a free account to save bids, set deadline alerts, and manage your pipeline.</p>
            <Link
              href="/auth/signup"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Create free account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
