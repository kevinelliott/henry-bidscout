import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 bg-white">
        {/* Header */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600">Start free. Upgrade when you are ready to scale.</p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free */}
              <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Free</h2>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-gray-900">$0</span>
                    <span className="text-gray-500 mb-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Perfect for getting started and evaluating opportunities.</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 flex-1 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Track up to <strong>5 bids</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Basic dashboard</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Public discovery feed access</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Bid status tracking</span></li>
                  <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">✗</span><span className="text-gray-400">Email deadline alerts</span></li>
                  <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">✗</span><span className="text-gray-400">Win analytics</span></li>
                  <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">✗</span><span className="text-gray-400">Document storage</span></li>
                  <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">✗</span><span className="text-gray-400">Team access</span></li>
                </ul>
                <Link
                  href="/auth/signup"
                  className="block text-center border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Get started free
                </Link>
              </div>

              {/* Pro */}
              <div className="border-2 border-indigo-600 rounded-2xl p-8 flex flex-col relative bg-indigo-50">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  Most popular
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Pro</h2>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-gray-900">$29</span>
                    <span className="text-gray-500 mb-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">For individual contractors actively pursuing government contracts.</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 flex-1 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>Unlimited</strong> bid tracking</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Full analytics dashboard</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Advanced discovery feed with filters</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>Email deadline alerts</strong> (7d, 3d, 1d)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Win rate analytics by category</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>Document storage</strong> per bid</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Contact log for contracting officers</span></li>
                  <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">✗</span><span className="text-gray-400">Team access (1 user)</span></li>
                </ul>
                <Link
                  href="/auth/signup"
                  className="block text-center bg-indigo-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                >
                  Start Pro – $29/mo
                </Link>
              </div>

              {/* Team */}
              <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Team</h2>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-gray-900">$79</span>
                    <span className="text-gray-500 mb-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">For small contracting firms managing a team-wide bid pipeline.</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 flex-1 mb-8">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>Everything in Pro</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>5 team members</strong></span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Shared bid pipeline view</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Role-based access control</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span><strong>CRM export</strong> (CSV, Excel)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Priority email & chat support</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Onboarding call included</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span><span>Team analytics & reporting</span></li>
                </ul>
                <Link
                  href="/auth/signup"
                  className="block text-center border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Start Team – $79/mo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Full feature comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Feature</th>
                    <th className="text-center py-3 px-4 text-gray-600 font-medium">Free</th>
                    <th className="text-center py-3 px-4 text-indigo-600 font-semibold">Pro</th>
                    <th className="text-center py-3 px-4 text-gray-600 font-medium">Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Bids tracked", "5", "Unlimited", "Unlimited"],
                    ["Discovery feed", "✓", "✓", "✓"],
                    ["Dashboard", "Basic", "Full", "Full"],
                    ["Deadline alerts", "—", "Email (7d/3d/1d)", "Email + SMS"],
                    ["Win analytics", "—", "✓", "✓"],
                    ["Document storage", "—", "✓", "✓"],
                    ["Contact log", "—", "✓", "✓"],
                    ["Team members", "1", "1", "5"],
                    ["Shared pipeline", "—", "—", "✓"],
                    ["CRM export", "—", "—", "✓"],
                    ["Priority support", "—", "—", "✓"],
                  ].map(([feature, free, pro, team]) => (
                    <tr key={feature} className="bg-white even:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">{feature}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{free}</td>
                      <td className="py-3 px-4 text-center text-indigo-700 font-medium">{pro}</td>
                      <td className="py-3 px-4 text-center text-gray-700">{team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need a credit card to start?",
                  a: "No. The Free plan requires no credit card. You only need to provide payment details when upgrading to Pro or Team.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. You can cancel your subscription at any time. You will retain access until the end of your billing period.",
                },
                {
                  q: "What types of contracts does BidScout cover?",
                  a: "We track federal, state, and local government procurement opportunities across all categories including construction, IT, professional services, and supplies.",
                },
                {
                  q: "Is my data secure?",
                  a: "Yes. We use Supabase with Row Level Security (RLS) to ensure each user can only access their own data. All data is encrypted in transit and at rest.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
