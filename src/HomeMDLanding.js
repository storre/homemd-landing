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

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Join HomeMD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          <div className="bg-white rounded-2xl p-6 shadow text-left">
            <h3 className="text-xl font-semibold mb-2">I'm a Homeowner</h3>
            <p className="mb-4">Get matched with trusted contractors and receive a personalized renovation plan.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSejlNaCvbzi5ZuioCWA1rWLrImw04WGy86kzfhEjprSbPFQ0g/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Register as Homeowner
            </a>
            <p className="text-sm text-gray-600 mt-2">You'll receive a confirmation email once your registration is submitted.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-left">
            <h3 className="text-xl font-semibold mb-2">I'm a Contractor</h3>
            <p className="mb-4">Connect with high-quality leads and showcase your renovation experience.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScYsF6ewKxIKtK1-sLvM6x3TpSr0OItLtKt9vGg5-6exsxfYQ/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Register as Contractor
            </a>
            <p className="text-sm text-gray-600 mt-2">Thank you for applying — we'll review your info and follow up by email.</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-16 border-t pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} HomeMD. All rights reserved.</p>
      </footer>
    </div>
  );
}
