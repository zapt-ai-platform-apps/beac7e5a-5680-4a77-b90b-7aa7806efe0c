import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}