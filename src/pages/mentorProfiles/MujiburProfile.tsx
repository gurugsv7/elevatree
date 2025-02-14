import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, Quote, CalendarCheck, Rocket, Star } from 'lucide-react';

export function MujiburProfile() {
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
            <p className="text-lg text-gray-700 font-medium">B.TECH AI & ML</p>
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
            <p className="text-lg text-gray-700 font-medium">21</p>
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
            href="https://www.linkedin.com/in/mujibur-rahman-n-127425322/" 
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
            <Star className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Born Under the Red Planet – A Cosmic Beginning
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">
              On the night of August 27, 2003, Mars blazed brighter in the sky than it had in nearly 60,000 years. It was on this extraordinary day that I was born—perhaps destined to be a seeker of the unknown. From the moment I could wonder, I found myself captivated by the vastness of space.
            </p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              The mysteries of the universe fascinated me: How did it all begin? Do aliens exist? Are there worlds beyond ours waiting to be discovered?
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
            From Space to AI – My Evolution
          </h3>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              This thirst for exploration led me to devour everything I could find on astronomy, black holes, and the possibilities of interstellar travel. But as I grew older, I realized that space wasn't the only frontier worth exploring.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Another force was reshaping the world at an astonishing pace—Artificial Intelligence. And at the helm of this revolution was a man who would become my inspiration: <span className="italic text-emerald-700 font-medium">Elon Musk</span>. His visionary work in AI, space travel, and self-driving technology sparked something in me. I knew I wanted to be part of something bigger, something groundbreaking.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              My journey wasn't a straight road. Like many, I was caught between my own dreams and societal expectations. Pushed towards a career in medicine, I attempted the NEET exam. But deep inside, I knew my heart wasn't in it. I wasn't meant to heal bodies—I was meant to build the future.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              That realization led me to where I truly belonged: the world of Artificial Intelligence and Machine Learning. Today, I stand at the crossroads of innovation and imagination, driven by my insatiable curiosity.
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
                <Rocket className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Dual Passions</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Just as the cosmos beckoned me with its infinite mysteries, AI captivated me with its boundless potential. The intersection of these two passions defines my journey:
                </p>
                <ul className="list-disc pl-4 space-y-3 text-gray-700 text-lg mt-4">
                  <li>Exploring the frontiers of AI & ML</li>
                  <li>Connecting space exploration with technology</li>
                  <li>Building innovative solutions for the future</li>
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
                <Star className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Future Vision</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe AI is our gateway to understanding not just Earth-bound challenges, but also the mysteries of the cosmos. Through machine learning, we can process vast amounts of astronomical data, identify exoplanets, and perhaps one day, help humanity become a multi-planetary species.
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
            Like the stars that guided ancient explorers, I want to help guide others who are searching for their path in technology and innovation.
          </p>
          <ul className="text-xl leading-relaxed text-emerald-100 space-y-4">
            <li>• Sharing the wonders of AI & ML with aspiring technologists</li>
            <li>• Helping students discover their unique potential</li>
            <li>• Building bridges between different fields of science and technology</li>
          </ul>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Whether it's the depths of space or the frontiers of artificial intelligence, the spirit of exploration drives everything I do."</p>
            <p className="mt-8 text-xl text-emerald-100">The adventure is just beginning. Keep exploring, keep learning, and never stop looking up at the stars.</p>
            <p className="mt-4 text-xl text-emerald-100">Together, we can push the boundaries of what's possible. 🚀</p>
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