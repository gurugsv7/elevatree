import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, BookOpen, Target, Award, Heart, Star, LightbulbIcon, Medal, Linkedin, CalendarCheck } from 'lucide-react';

export function JoyRechalProfile() {
  return (
    <div className="max-w-6xl mx-auto space-y-24">
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
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
            <GraduationCap className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">DEGREE</h2>
            <p className="text-lg text-gray-700 font-medium">B.Tech (Information Technology)</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
            <Calendar className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">AGE</h2>
            <p className="text-lg text-gray-700 font-medium">21</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
        >
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
            <MapPin className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">LOCATION</h2>
            <p className="text-lg text-gray-700 font-medium">PUDUCHERRY</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a
            href="https://www.linkedin.com/in/joy-rechal-h-3b7935256"
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

      {/* Family Background Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10 md:p-16"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-10 flex items-center">
            <Heart className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Family & Foundation
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">As the first girl child in my family, I was blessed with boundless love and care. My father, a dedicated Army man, is my hero who defied societal expectations by providing unwavering support for his daughters' education.</p>
            <p className="text-xl leading-relaxed">My mother, the queen of our family, stood strong as a single parent during my father's service, shaping us into who we are today. Together, they taught us invaluable life lessons about growth and resilience.</p>
          </div>
        </div>
      </motion.div>

      {/* Academic Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
                >
          <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
            <BookOpen className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Academic Journey
          </h3>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">Despite being an average student, I took on the challenge of pursuing Biology in higher secondary. It was like climbing a mountain, but with courage and God's blessings, I succeeded. I even cleared the NEET exam on my first attempt through self-study and free online resources.</p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
                <Target className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Finding My Path</h4>
                <p className="text-lg leading-relaxed text-gray-700">Life had different plans, and I found myself stepping into Information Technology. Though initially unfamiliar with computer science, I adapted and grew, proving that "slow and steady wins the race."</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
                <Medal className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Personal Growth</h4>
                <p className="text-lg leading-relaxed text-gray-700">Each challenge shaped my character, teaching me adaptability and persistence. Today, I strive to make my parents proud and prove that gender never limits one's potential.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Message to Students */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 md:p-16 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-10 relative">
          <h3 className="text-4xl font-bold mb-8 flex items-center justify-center">
            <Star className="w-12 h-12 mr-4 text-emerald-300" strokeWidth={1.5} />
            A Message to Future Leaders
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">"Keep making all your dreams in the positive manner and mankind then success is yours."</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-3xl font-medium">"TODAY'S SEEDS IS TOMORROW GARDENS"</p>
              <p className="mt-8 text-xl text-emerald-100">Let's grow together and create a future filled with endless possibilities.</p>
            </div>
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