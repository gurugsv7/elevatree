import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, ExternalLink } from 'lucide-react';

export function Resources() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const resources = [
    {
      title: "Our Journey: The Story of Elevatree",
      shortDesc: "From Vision to Reality: The Birth of a Career Guidance Platform",
      description: "Discover how a group of 15-16 passionate students came together to create Elevatree, their experiences, challenges, and the mission to guide students towards their dreams while nurturing their skills and mental well-being.",
      path: "/resources/elevatree-journey.pdf",
      icon: BookOpen
    },
    {
      title: "Career Pathways Guide: STEM and Beyond",
      shortDesc: "Comprehensive Career Guide for Modern Professionals",
      description: "A detailed exploration of career opportunities across Engineering, Medicine, Teaching, Government Services, Arts & Design, and Legal Services. Find your path with our comprehensive career guide.",
      path: "/resources/career-pathways-guide.pdf",
      icon: FileText
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-24">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span className="block">Resource Library</span>
              <span className="block text-emerald-200 text-3xl mt-3">Empowering Your Career Journey</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-xl text-emerald-100"
            >
              Access our curated collection of career resources designed to guide and inspire your professional growth.
            </motion.p>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
        />
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full -mr-20 -mt-20 opacity-50" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <resource.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{resource.title}</h3>
                      <p className="text-emerald-600 font-medium">{resource.shortDesc}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {resource.description}
                  </p>

                  <motion.a
                    href={resource.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors gap-2 font-medium"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our resource library is regularly updated with new guides, tools, and materials to support your career development. Check back often for the latest additions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
