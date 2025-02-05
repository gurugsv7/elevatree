import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Compass, Star, Map, Heart } from 'lucide-react';

export function AboutUs() {
  return (
    <motion.div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-32 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
        >
          <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
            About Us
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            At Elevatree, we believe that every student has the potential to reach new heights. 
            Our platform is dedicated to guiding, inspiring, and empowering you to explore your true path 
            and achieve your dreams.
          </p>
          <p className="mt-4 text-lg text-emerald-200 max-w-3xl mx-auto">
            Through our comprehensive approach, we combine personalized mentorship, 
            expert career counselling, engaging motivational sessions, and curated resources 
            to create a supportive ecosystem for your growth.
          </p>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
        />
      </section>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                We're on a mission to democratize career guidance and make professional development 
                accessible to students everywhere. Our platform bridges the gap between education 
                and career success.
              </p>
              <p className="text-lg text-gray-700">
                By connecting students with experienced mentors, providing structured guidance, 
                and offering innovative tools, we help you navigate your career journey with 
                confidence and clarity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                  alt="Students collaborating"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="py-16 bg-gradient-to-b from-white via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Help You Succeed</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform offers multiple pathways to support your professional growth
              and development.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Discover Your Strengths", description: "Uncover your unique talents and abilities through expert guidance and assessment tools." },
              { icon: Compass, title: "Explore Career Options", description: "Navigate through various career paths with insights from industry professionals." },
              { icon: Map, title: "Plan Your Future", description: "Create actionable roadmaps for your educational and professional journey." },
              { icon: Heart, title: "Stay Inspired", description: "Access motivational resources and success stories to keep you moving forward." }
            ].map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <offering.icon className="h-10 w-10 text-emerald-600 mb-4 transform transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="py-16 bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the first step to achieving your career goals, we're here to support you every step of the way.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Discover & Connect",
                description: "Begin by exploring your interests and connecting with mentors who align with your goals."
              },
              {
                step: "2",
                title: "Learn & Grow",
                description: "Access personalized resources, attend workshops, and receive guidance tailored to your needs."
              },
              {
                step: "3",
                title: "Achieve & Excel",
                description: "Transform insights into action and take confident steps toward your career aspirations."
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-emerald-600">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{phase.title}</h3>
                <p className="text-gray-600 text-center">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-16 relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
        />
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
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
        />
      </motion.div>

      {/* Values Section */}
      <div className="py-16 bg-gradient-to-b from-emerald-100 via-white to-emerald-50">
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
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <value.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
