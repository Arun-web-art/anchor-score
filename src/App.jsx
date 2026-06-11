import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './Componenets/Homepage'
import AnchorHero from './Componenets/Hero'
import Hero from './Componenets/Next-hero'
import FinancialReadinessSection from './Componenets/Fininance-detail'
import AnchorScoreMeasures from './Componenets/Anchor-score'
import ReadinessStates from './Componenets/Redness-State'
import ClassificationSection from './Componenets/Classification'
import InfrastructureSection from './Componenets/InfrastructureSection'
import Footer from './Componenets/Footer'
import FinancialReadinessModal from './Componenets/POP'
import Methodology from './Componenets/Methodology'
import PrivacyPolicy from './Componenets/PrivacyPolicy'
import TermsOfUse from './Componenets/TermsOfUse'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <AnchorHero />
      <Hero />
      <FinancialReadinessSection />
      <AnchorScoreMeasures />
      <ReadinessStates />
      <ClassificationSection />
      <InfrastructureSection />
      <Footer />
      <FinancialReadinessModal />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </>
  )
}

export default App
