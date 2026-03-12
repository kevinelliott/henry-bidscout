"use client";

import Link from "next/link";
import { useState } from "react";

interface NavProps {
  user?: { email?: string } | null;
}

export default function Nav({ user }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-xl font-bold text-gray-900">BidScout</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-6">
              <Link href="/discover" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Discover
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Pricing
              </Link>
              {user && (
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-500">{user.email}</span>
                <Link
                  href="/dashboard"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  Log in
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/discover" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
            Discover
          </Link>
          <Link href="/pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
            Pricing
          </Link>
          {user ? (
            <Link href="/dashboard" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
                Log in
              </Link>
              <Link href="/auth/signup" className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                Get started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
