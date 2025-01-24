import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ClockIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: "AI-Powered Ideation",
    description: "Generate ideas and refine concepts with real-time AI suggestions",
    icon: SparklesIcon,
  },
  {
    title: "Real-time Collaboration",
    description: "Work simultaneously with team members across the globe",
    icon: UserGroupIcon,
  },
  {
    title: "Smart Workflows",
    description: "Automate repetitive tasks with intelligent workflow automation",
    icon: ChartBarIcon,
  },
  {
    title: "Instant Feedback",
    description: "Get AI-powered insights and suggestions as you work",
    icon: ClockIcon,
  },
]

export default function FeatureGrid() {
  return (
    <div className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-colors duration-200"
            >
              <feature.icon className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}