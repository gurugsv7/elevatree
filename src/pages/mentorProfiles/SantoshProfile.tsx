import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, BookOpen, Target, Award, Quote, CalendarCheck, Star, Heart, Linkedin } from 'lucide-react';

export function SantoshProfile() {
  return (
    <div className="max-w-6xl mx-auto space-y-24 py-12">
      {/* Personal Info Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
            <GraduationCap className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">DEGREE</h2>
            <p className="text-lg text-gray-700 font-medium">B.B.A (GENERAL)</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
            <Calendar className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">AGE</h2>
            <p className="text-lg text-gray-700 font-medium">18</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
            <MapPin className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">LOCATION</h2>
            <p className="text-lg text-gray-700 font-medium">PONDICHERRY</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a
            href="https://www.linkedin.com/in/santosh-kumar-k-949425258"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
          >
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
              <Linkedin className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">CONNECT</h2>
              <p className="text-lg text-gray-700 font-medium">LinkedIn</p>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Story Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10 md:p-16"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-10 flex items-center">
            <BookOpen className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            The Early Bird's Rise – A Story of Determination
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">
              In the quiet hours before dawn, when most were still asleep, a young student would run through the streets of Pondicherry, heading to the market. With no bicycle and just 1-2 hours of sleep, he pressed on, determined to support his family while pursuing his education. Some mocked him, but he held onto one powerful thought that would change everything.
            </p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "One day, I will change my life for the better."
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Journey Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
            <Target className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            My Journey – From Struggles to Strength
          </h3>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              I started my education in a private school until 7th grade, but due to my family's financial struggles and debts, I had to shift to a government school. This transition was challenging for me—not just academically, but also socially, as the environment was completely different from what I was used to.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              From 8th to 10th grade, I worked multiple jobs to support my family. I assisted my father in floor tiling and building work, worked in grocery shops, and took up any small job I could find. Due to these responsibilities, I couldn't concentrate on my education, which resulted in low marks in my 10th board exams.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Despite my passion for Science, I chose Commerce in 11th grade because of peer influence—though, ironically, those friends are no longer in my life. During 11th and 12th, my struggles only grew, with days starting at 1 AM for market work and just 1-2 hours of sleep. Yet, these challenges only strengthened my resolve.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
                <Star className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">From Army to Civil Services</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  My journey took an unexpected turn:
                </p>
                <ul className="list-disc pl-4 space-y-3 text-gray-700 text-lg mt-4">
                  <li>NCC Air Force dreams in 8th grade</li>
                  <li>Aspired to become a lieutenant</li>
                  <li>Inspired by Dr. APJ Abdul Kalam</li>
                  <li>Discovered new path in civil services</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
                <Heart className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Finding My Purpose</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In civil services, I found a new dream. I realized that serving the nation wasn't limited to being in the army—I could also make a difference as a civil servant. This path would allow me to help people, uplift the underprivileged, and serve with honor and dignity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 md:p-16 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-10 relative">
          <h3 className="text-4xl font-bold mb-8 flex items-center justify-center">
            <Award className="w-12 h-12 mr-4 text-emerald-300" strokeWidth={1.5} />
            Why I'm Here
          </h3>
          <p className="text-xl leading-relaxed">
            Through Elevatree, I want to guide students who are struggling to find their own career paths, just like I once did. Your background doesn't define your future—your determination does.
          </p>
          <ul className="text-xl leading-relaxed text-emerald-100 space-y-4">
            <li>• Understanding struggle because I've lived it</li>
            <li>• Helping students navigate their career choices</li>
            <li>• Showing that every challenge is a stepping stone</li>
          </ul>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Decisions are the hardest thing to make, especially when it is a choice between where you should be and where you want to be."</p>
            <p className="mt-8 text-xl text-emerald-100">So, take your time to make a good decision.</p>
            <p className="mt-4 text-xl font-bold text-emerald-300">
              "EDUCATION IS THE MOVEMENT FROM DARKNESS TO LIGHT"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Book Session Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <button 
          className="inline-flex items-center space-x-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-colors px-8 py-4 rounded-xl shadow-lg"
        >
          <CalendarCheck className="w-6 h-6" />
          <span>Book a Session</span>
        </button>
      </motion.div>
    </div>
  );
}