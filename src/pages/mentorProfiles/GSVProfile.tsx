import React from 'react';

export function GSVProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">GSV</h1>
            <p className="text-emerald-600 font-medium">Classified Mentor</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">About</h2>
              <p className="text-gray-600">
                [REDACTED] - This profile is classified. Access granted through special clearance only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>[REDACTED]</li>
                <li>[REDACTED]</li>
                <li>[REDACTED]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Message</h2>
              <div className="bg-black text-green-400 font-mono p-4 rounded">
                <p>// You've found the easter egg! 🎉</p>
                <p>// But some secrets must remain hidden...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}