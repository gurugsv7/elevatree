import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-emerald-100 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Story</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to democratize career guidance, ElevaTree has grown into a community of professionals helping each other succeed.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-emerald-700 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-emerald-100">Active Mentors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">10K+</p>
              <p className="text-emerald-100">Success Stories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="text-emerald-100">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="text-emerald-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                description: "Building strong professional networks through collaboration"
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Focused on achieving measurable career outcomes"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality guidance"
              },
              {
                icon: Globe,
                title: "Inclusivity",
                description: "Creating opportunities for professionals worldwide"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <value.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
