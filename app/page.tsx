import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-1 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span>247 active bids tracked right now</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Stop missing bids.<br />
            <span className="text-indigo-600">Start winning contracts.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            BidScout monitors thousands of government procurement opportunities, alerts you to deadlines, and helps small contractors compete and win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Start tracking bids free
            </Link>
            <Link
              href="/discover"
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Browse opportunities
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Free plan available. No credit card required.</p>
        </div>
      </section>

      {/* Live counter banner */}
      <section className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">247</p>
            <p className="text-indigo-200 text-sm">Active bids tracked</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$2.4B</p>
            <p className="text-indigo-200 text-sm">Contract value monitored</p>
          </div>
          <div>
            <p className="text-3xl font-bold">38%</p>
            <p className="text-indigo-200 text-sm">Average win rate improvement</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1,200+</p>
            <p className="text-indigo-200 text-sm">Contractors using BidScout</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to win more contracts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From discovery to submission, BidScout keeps your team organized and focused on the opportunities that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery Feed</h3>
              <p className="text-gray-600 text-sm">Browse thousands of federal, state, and local procurement opportunities filtered by category, value, and location.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-yellow-50 border border-yellow-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">⏰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deadline Alerts</h3>
              <p className="text-gray-600 text-sm">Never miss a submission deadline. Get email alerts 7 days, 3 days, and 1 day before each bid closes.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-green-50 border border-green-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Win Tracking</h3>
              <p className="text-gray-600 text-sm">Track your bid pipeline from research to award. Analyze win rates by category, agency, and contract value.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">📁</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Storage</h3>
              <p className="text-gray-600 text-sm">Store RFPs, proposals, and supporting documents for each bid. Keep your team aligned with shared notes and contact logs.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Share bid pipeline with your team. Assign tasks, add notes, and track contact logs with contracting officers.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm">Understand your pipeline health. See total contract value pursuing, win rates, and upcoming deadlines at a glance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Trusted by contractors across industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left">
              <p className="text-gray-700 text-sm mb-4">"BidScout helped us go from missing 40% of relevant bids to submitting on nearly every one. We won two major contracts in Q1."</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">MR</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Marcus R.</p>
                  <p className="text-xs text-gray-500">CEO, RoadBuilders Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left">
              <p className="text-gray-700 text-sm mb-4">"The deadline alert feature alone is worth it. We stopped scrambling at the last minute and started submitting polished proposals."</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">SJ</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Sandra J.</p>
                  <p className="text-xs text-gray-500">Principal, Jantech Services</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-left">
              <p className="text-gray-700 text-sm mb-4">"Finally a tool built for small contractors, not enterprise. Simple, effective, and the pricing makes sense for our size."</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">DK</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">David K.</p>
                  <p className="text-xs text-gray-500">Owner, DataBridge IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, honest pricing</h2>
          <p className="text-gray-600 mb-10">Start free. Upgrade when you are ready to scale your bid pipeline.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Free</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 5 bids tracked</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Basic dashboard</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Public discovery feed</li>
              </ul>
              <Link href="/auth/signup" className="block text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                Get started free
              </Link>
            </div>
            <div className="border-2 border-indigo-600 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">Most popular</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Pro</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$29<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited bid tracking</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Email deadline alerts</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Win analytics</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Document storage</li>
              </ul>
              <Link href="/auth/signup" className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
                Start Pro trial
              </Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Team</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$79<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 5 team members</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Shared pipeline</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> CRM export</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Priority support</li>
              </ul>
              <Link href="/pricing" className="block text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                See full details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to win more contracts?</h2>
          <p className="text-indigo-200 mb-8">Join 1,200+ contractors already using BidScout to find and win government contracts.</p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Start tracking bids for free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
