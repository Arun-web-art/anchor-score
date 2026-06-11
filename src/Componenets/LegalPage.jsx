import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function LegalPage({ title, children }) {
  useEffect(() => {
    if (title) document.title = `${title} — Anchor Score`;
  }, [title]);

  return (
    <>
      <div className="relative w-full bg-[#F8F9F8] overflow-hidden px-4 sm:px-6">

        {/* Background Gradient Blurs (mirror Hero) */}
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[70%] bg-gradient-to-br from-green-300/40 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[55%] h-[75%] bg-gradient-to-bl from-yellow-200/30 via-green-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

        {/* NAVBAR (mirrors Hero) */}
        <nav className="relative bg-white text-black mt-4 sm:mt-6 z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 h-20 sm:h-24 rounded-2xl flex items-center justify-between shadow-sm">
          <Link to="/" aria-label="Anchor Score home">
            <img
              src="/Logo.png"
              alt="Anchor Score logo"
              className="w-[200px] sm:w-[300px]"
            />
          </Link>
          <Link
            to="/"
            className="bg-gradient-to-r from-[#B4E33D] to-[#59D377] text-white px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-green-200 hover:scale-105 transition-transform whitespace-nowrap"
          >
            Back to Home
          </Link>
        </nav>

        {/* CONTENT */}
        <main className="relative z-10 max-w-[900px] mx-auto px-2 sm:px-4 py-12 sm:py-20">
          <article className="legal-content text-[#1A1A1A]">
            {children}
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
