import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Download, ArrowRight } from 'lucide-react';

export function Resources() {
  const categories = [
    { title: 'Articles & Guides', icon: BookOpen },
    { title: 'Video Tutorials', icon: Video },
    { title: 'Templates', icon: FileText },
    { title: 'Toolkits', icon: Download }
  ];

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <category.icon className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <ArrowRight className="h-5 w-5 text-emerald-600" />
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://source.unsplash.com/random/400x200?career&${item}`}
                  alt="Resource"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Career Guide {item}</h3>
                  <p className="text-gray-600 mb-4">Essential tips and strategies for professional growth</p>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resource Library */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Resource Title {index + 1}</h3>
                  <p className="text-sm text-gray-600">Brief description of the resource</p>
                </div>
                <button className="text-emerald-600 hover:text-emerald-700">
                  <Download className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
