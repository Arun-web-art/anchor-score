import React from "react";
import LegalPage from "./LegalPage";

export default function Methodology() {
  return (
    <LegalPage title="Methodology">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#19CC7E] leading-tight mb-4">
        ANCHOR SCORE METHODOLOGY
      </h1>
      <p className="text-sm text-[#1A1A1A]/70 mb-2"><strong>Effective Date:</strong> June 8, 2026</p>
      <p className="text-sm text-[#1A1A1A]/70 mb-10"><strong>Version:</strong> 1.0</p>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">1. Introduction</h3>
      <p className="mb-4 leading-relaxed">
        The Anchor Score is a proprietary financial readiness metric designed to evaluate an individual's ability to withstand sudden economic or income disruptions using available liquid savings.
      </p>
      <p className="mb-4 leading-relaxed">
        Unlike traditional credit scores—which exclusively measure historical debt repayment behavior and borrowing capacity—the Anchor Score focuses entirely on financial resilience. It calculates how many months an individual can comfortably sustain their essential living standards if their primary income source is suddenly interrupted.
      </p>
      <p className="mb-4 leading-relaxed">
        The score serves as a transparent, objective, and actionable indicator of personal emergency preparedness. It is provided strictly for educational and informational purposes and must not be used as a standalone framework for lending evaluation, employment background checks, underwriting insurance, or formal investment advisory.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">2. The Core Principle &amp; Formula</h3>
      <p className="mb-4 leading-relaxed">
        The Anchor Score framework operates on a single, foundational question:
      </p>
      <p className="mb-4 italic leading-relaxed text-[#1A1A1A]/80 border-l-4 border-[#19CC7E] pl-4">
        "If your primary income streams stopped today, how many months could you maintain your essential lifestyle requirements using only immediately accessible liquid capital?"
      </p>
      <p className="mb-4 leading-relaxed">
        This operational runway is quantified through the <strong>Savings Security Index (SSI)</strong>.
      </p>
      <div className="my-6 p-5 bg-white border border-gray-200 rounded-lg text-center font-mono text-sm sm:text-base">
        SSI = Liquid Savings / Monthly Essential Expenses
      </div>

      <h4 className="text-lg font-bold text-[#1A1A1A] mt-6 mb-3">Components of the Equation:</h4>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li><strong>Liquid Savings:</strong> Immediately accessible cash or cash-equivalent assets, including bank savings balances, emergency cash allocations, liquid mutual funds, overnight funds, and highly accessible capital pools.</li>
        <li><strong>Monthly Essential Expenses:</strong> Fixed or mandatory recurring monthly costs necessary for basic survival and baseline operations. This includes housing costs (rent/EMIs), utilities, groceries, healthcare maintenance, education costs, insurance premiums, and core legal or statutory obligations. Discretionary or non-essential leisure expenditures are generally excluded from this calculation.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">3. The Anchor Score Scale &amp; Readiness Bands</h3>
      <p className="mb-6 leading-relaxed">
        The Anchor Score maps your calculated Savings Security Index (SSI) to a deterministic numerical scale ranging from <strong>50 to 900</strong>. Higher values represent enhanced financial resilience.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300">
          <thead className="bg-[#19CC7E]/10 text-left">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Score Range</th>
              <th className="border border-gray-300 px-3 py-2">Readiness Classification</th>
              <th className="border border-gray-300 px-3 py-2">Financial Cushion Overview</th>
              <th className="border border-gray-300 px-3 py-2">Equivalent SSI Runway</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr>
              <td className="border border-gray-300 px-3 py-2"><strong>50 – 224</strong></td>
              <td className="border border-gray-300 px-3 py-2"><strong>Fragile</strong></td>
              <td className="border border-gray-300 px-3 py-2">Highly vulnerable to immediate income interruptions; negligible emergency cash reserves.</td>
              <td className="border border-gray-300 px-3 py-2">Less than 3 Months</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2"><strong>225 – 450</strong></td>
              <td className="border border-gray-300 px-3 py-2"><strong>Cautious</strong></td>
              <td className="border border-gray-300 px-3 py-2">Preliminary savings cushion established; highly vulnerable to prolonged financial disruptions.</td>
              <td className="border border-gray-300 px-3 py-2">3 to 6 Months</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2"><strong>451 – 700</strong></td>
              <td className="border border-gray-300 px-3 py-2"><strong>Stable</strong></td>
              <td className="border border-gray-300 px-3 py-2">Moderate financial stability; structured to manage routine or short-term personal emergencies.</td>
              <td className="border border-gray-300 px-3 py-2">6 to 9 Months</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2"><strong>701 – 850</strong></td>
              <td className="border border-gray-300 px-3 py-2"><strong>Secure</strong></td>
              <td className="border border-gray-300 px-3 py-2">Strong financial readiness; healthy reserves to absorb significant long-term economic shocks.</td>
              <td className="border border-gray-300 px-3 py-2">9 to 12 Months</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2"><strong>851 – 900</strong></td>
              <td className="border border-gray-300 px-3 py-2"><strong>Resilient</strong></td>
              <td className="border border-gray-300 px-3 py-2">Exceptional financial flexibility; exceptional foundation to navigate long periods of market or career uncertainty.</td>
              <td className="border border-gray-300 px-3 py-2">12+ Months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">4. Calculation Determinism &amp; Score Updates</h3>
      <p className="mb-4 leading-relaxed">
        The processing framework utilizes a strictly deterministic calculation logic. For any given set of identical asset and liability inputs, the algorithm consistently outputs identical score configurations based on system mapping rules.
      </p>
      <p className="mb-4 leading-relaxed">
        Your Anchor Score updates dynamically to mirror material shifts in your actual financial readiness state, including:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li>Inflows or outflows affecting your verified liquid cash balances.</li>
        <li>Fluctuations or inflation in your structural monthly essential expense baselines.</li>
        <li>Targeted allocations toward specialized emergency funds or sudden liquid investment redemptions.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">5. Boundary Parameters: What the Score Measures</h3>
      <h4 className="text-lg font-bold text-[#1A1A1A] mt-6 mb-3">What It Measures:</h4>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li>Real-time financial resilience and emergency capital adequacy.</li>
        <li>The literal durability of an individual's liquid asset runway.</li>
        <li>Proactive preparedness for employment transitions or sudden macroeconomic shifts.</li>
      </ul>
      <h4 className="text-lg font-bold text-[#1A1A1A] mt-6 mb-3">What It Does NOT Measure:</h4>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li>Creditworthiness, loan default probabilities, or historical credit card payback scores.</li>
        <li>The performance or alpha of active high-risk investment portfolios.</li>
        <li>An individual's total net worth, social standing, or credit bureau history.</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        The Anchor Score is <strong>not a credit bureau score</strong> and does not interact with, manipulate, or replace any statutory credit rating networks.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">6. Methodology Governance &amp; Version Control</h3>
      <p className="mb-4 leading-relaxed">
        To reflect evolving economic realities and modern asset class liquidity shifts, our underlying algorithms may undergo periodic optimization. When methodology upgrades are deployed:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li>System adjustments are recorded under sequential version controls.</li>
        <li>Historical scores remain permanently tied to the exact methodology engine iteration under which they were originally computed.</li>
        <li>Structural modifications to calculation logic weights will be prominently announced across our platform frameworks.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">7. Regulatory &amp; Advisory Disclaimer</h3>
      <p className="mb-4 leading-relaxed">
        The Anchor Score framework functions purely as an educational diagnostic matrix. Finaptis Wealthtech Private Limited operates on an execution-only basis as an AMFI-registered Corporate Mutual Fund Distributor holding valid <strong>ARN-318892</strong>.
      </p>
      <p className="mb-4 leading-relaxed">
        The calculation outputs, scores, indices, and telemetry outcomes on this platform do not constitute professional investment advice, legal counseling, tax planning, credit repair advising, or comprehensive financial structuring services. Users are strongly encouraged to cross-reference personal financial circumstances and read formal Scheme Information Documents (SIDs) thoroughly before deploying capital into financial products or market-linked schemes.
      </p>

      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mt-10 mb-3">8. Contact &amp; Administration</h3>
      <p className="mb-4 leading-relaxed">
        For deeper technical clarifications concerning calculation logic, data integration points, or general methodological updates, please contact our administrative desk:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4 leading-relaxed">
        <li><strong>Corporate Entity:</strong> Finaptis Wealthtech Private Limited</li>
        <li><strong>Support Desk:</strong> admin@myanchorscore.com</li>
        <li><strong>Central Platform:</strong> www.myanchorscore.com</li>
        <li><strong>Corporate Desk Address:</strong> No 13/1 Standage Road, 2nd Floor, Frazer Town, Bangalore North, Karnataka, India, 560005.</li>
      </ul>
    </LegalPage>
  );
}
