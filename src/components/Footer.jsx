import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-slate-400 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} SparkHub. All rights reserved.
          </p>
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </footer>
  )
}