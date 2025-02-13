import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, Compass, Heart, LightbulbIcon } from 'lucide-react';

export function SubashreeProfile() {
  return (
    <div className="max-w-6xl mx-auto space-y-24">
      {/* Personal Info Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <p className="text-lg text-gray-700 font-medium">B.TECH - IT</p>
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
            <p className="text-lg text-gray-700 font-medium">CUDDALORE</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Journey Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Main Journey Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
        >
          <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
            <Compass className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            My Journey
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700">I still remember feeling really confused after completing my 10th grade. I didn't know what to do next. Choosing a career path seemed scary, and I wished I had guidance.</p>
            <p className="text-lg leading-relaxed text-gray-700">In 12th grade, COVID-19 started, and I was confused again. My family had different ideas about what I should do. "Choose B.Ed," they said. "Write the NEET exam," they advised. "Take up Engineering," they suggested. But I didn't know what I wanted.</p>
          </div>
        </motion.div>

        {/* Key Milestones */}
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Taking Risks</h4>
                <blockquote className="text-lg leading-relaxed text-gray-700">
                  "The Biggest Risk is Not Taking Any Risk" - I learned that taking calculated risks can lead to great things. If only I had guidance to help me navigate those risks.
                </blockquote>
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
                <LightbulbIcon className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Finding My Path</h4>
                <p className="text-lg leading-relaxed text-gray-700">So, I chose Engineering, even though I wasn't sure if it was right for me. As I started studying Engineering, I discovered Software Engineering and found a new passion.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Message to Students */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 md:p-16 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-10 relative">
          <h3 className="text-4xl font-bold mb-8 flex items-center justify-center">
            <Heart className="w-12 h-12 mr-4 text-emerald-300" strokeWidth={1.5} />
            To Every Student
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">If you're struggling to choose a career path, I see you. I hear you. And I want you to know that you're not alone. It's okay to be uncertain, and it's okay to take your time.</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-3xl font-medium">Remember, your career path is a journey, not a destination.</p>
              <p className="mt-8 text-xl text-emerald-100">Keep learning, growing, and finding what makes you happy.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connect Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <a 
          href="https://www.linkedin.com/in/subashree-g-411a4a2a2/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 text-lg font-medium text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 hover:bg-emerald-100 px-6 py-3 rounded-xl"
        >
          <Linkedin className="w-6 h-6" />
          <span>Connect on LinkedIn</span>
        </a>
      </motion.div>
    </div>
  );
}