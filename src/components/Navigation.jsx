import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48"
            alt="SparkHub Logo"
            className="h-8 w-8 rounded-lg"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium">
            Features
          </a>
          <a href="#pricing" className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium">
            Pricing
          </a>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}