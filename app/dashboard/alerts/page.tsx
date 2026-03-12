"use client";

import { useState } from "react";
import Link from "next/link";

export default function AlertsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [alert7Days, setAlert7Days] = useState(true);
  const [alert3Days, setAlert3Days] = useState(true);
  const [alert1Day, setAlert1Day] = useState(true);
  const [alertEmail, setAlertEmail] = useState("user@company.com");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Deadline Alerts</h1>
        <p className="text-gray-500 text-sm mt-1">Configure notifications for upcoming bid deadlines</p>
      </div>

      {/* Pro upgrade banner */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-indigo-900 mb-1">📧 Email alerts require Pro plan</h3>
            <p className="text-sm text-indigo-700">
              Upgrade to Pro to receive email deadline alerts 7, 3, and 1 day before each bid closes.
            </p>
          </div>
          <Link
            href="/pricing"
            className="flex-shrink-0 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Upgrade
          </Link>
        </div>
      </div>

      {/* Alert settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Notification Settings</h2>

        <div className="space-y-4">
          {/* Email toggle */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="text-sm font-medium text-gray-900">Email notifications</p>
              <p className="text-xs text-gray-500">Receive alerts at your registered email address</p>
            </div>
            <button
              onClick={() => setEmailAlerts(!emailAlerts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                emailAlerts ? "bg-indigo-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow ${
                  emailAlerts ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Alert email */}
          <div className="py-3 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-900 mb-2">Alert email address</label>
            <input
              type="email"
              value={alertEmail}
              onChange={(e) => setAlertEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Timing options */}
          <div className="py-3">
            <p className="text-sm font-medium text-gray-900 mb-3">Alert timing</p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alert7Days}
                  onChange={(e) => setAlert7Days(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">7 days before deadline</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alert3Days}
                  onChange={(e) => setAlert3Days(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">3 days before deadline</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={alert1Day}
                  onChange={(e) => setAlert1Day(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">1 day before deadline (final reminder)</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Alert Categories</h2>
        <p className="text-sm text-gray-500 mb-4">Only receive alerts for bids in these categories:</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: "construction", label: "🏗️ Construction", active: true },
            { key: "IT", label: "💻 IT", active: true },
            { key: "services", label: "🛠️ Services", active: false },
            { key: "supplies", label: "📦 Supplies", active: false },
          ].map((cat) => (
            <label key={cat.key} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                defaultChecked={cat.active}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        {saved ? "✓ Saved!" : "Save settings"}
      </button>
    </div>
  );
}
