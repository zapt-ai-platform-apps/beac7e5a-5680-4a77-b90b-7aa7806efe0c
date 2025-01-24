import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Unleash Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Creative Power</span>
          </h1>
          <p className="text-xl text-indigo-200 mb-12 max-w-3xl mx-auto">
            Collaborate, ideate, and create with AI-enhanced tools that amplify your imagination and streamline your workflow.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Creating Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}