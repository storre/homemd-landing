import React from "react";

export default function HomeMDLanding() {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 p-10 text-center text-2xl">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to HomeMD</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your AI-powered renovation advisor. We help homeowners plan smarter, renovate with confidence, and optimize property value through intelligent insights.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">🏠 Personalized Renovation Plans</h2>
          <p>
            HomeMD uses AI to create customized renovation roadmaps tailored to your property type, location, and goals.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">📊 Real-Time Budgeting Tools</h2>
          <p>
            Get intelligent cost estimates, track expenses, and understand where your renovation dollars are going—before you even start.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">🔍 Contractor Intelligence</h2>
          <p>
            HomeMD matches you with trusted professionals using performance data, past project success, and verified reviews.
          </p>
        </div>
      </section>

      <footer className="text-center mt-16 border-t pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} HomeMD. All rights reserved.</p>
      </footer>
    </div>
  );
}
