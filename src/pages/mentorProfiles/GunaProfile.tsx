import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, Code, BookOpen, Target, Award, CalendarCheck, Star, Heart } from 'lucide-react';

export function GunaProfile() {
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
            <p className="text-lg text-gray-700 font-medium">THIRUKANUR</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a 
            href="https://www.linkedin.com/in/guna-r-68827a2bb" 
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
            Success is not final, failure is not fatal
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">
              "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill
            </p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              Your struggle is the seed. Your hard work is the water. Your success is the tree.
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
            My Journey – From Struggle to Triumph
          </h3>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              My life has been a rollercoaster ride, filled with struggles, diseases, and accidents. But I've survived, and that's what matters.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              My school days were decent, but after 9th standard, I faced a dilemma – what next? Friends and family added to the confusion. I took a leap of faith and enrolled in Diploma Mechanical Engineering. Little did I know it was a poor college, restrictive and unfulfilling.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The COVID-19 pandemic hit, and my plans were disrupted. But amidst the chaos, I discovered my interest in social media and content creation. I honed my skills, and after completing my diploma, I landed a job at a production company.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              A year passed, and I realized I needed a change. I decided to pursue BTech, but again, I was torn between mechanical engineering and AI & ML. Research led me to choose AI & ML, and I took the leap, despite being from a core engineering background.
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
                <Code className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Path to Growth</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Coding and development were new to me, but I persevered. I started working on ML and DL projects, freelancing, and even collaborating with classmates. My department mates showed little interest, but I didn't give up.
                </p>
                <ul className="list-disc pl-4 space-y-3 text-gray-700 text-lg mt-4">
                  <li>Started learning AI & ML from scratch</li>
                  <li>Developed projects and gained hands-on experience</li>
                  <li>Started freelancing and collaborating</li>
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Entrepreneurial Spirit</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My friend and I decided to start a project development company, focusing on AI & ML. We began earning and gaining recognition, even before completing our first year. I had invested my own money, and it was paying off.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Elevatree Section */}
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
            My Vision for Elevatree
          </h3>
          <p className="text-xl leading-relaxed">
            Having faced numerous challenges and transitions in my career journey, I understand the importance of guidance and support during crucial decision-making phases.
          </p>
          <p className="text-xl leading-relaxed">
            Through Elevatree, I aim to help students who find themselves at crossroads, just as I once was. Whether it's transitioning between fields, starting from scratch, or building something new – I'm here to share my experiences and insights.
          </p>
          <ul className="text-xl leading-relaxed text-emerald-100 space-y-4">
            <li>• Guide students in their transition to tech fields</li>
            <li>• Share practical insights from my entrepreneurial journey</li>
            <li>• Help develop both technical and soft skills</li>
          </ul>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Your struggle is the seed. Your hard work is the water. Your success is the tree."</p>
            <p className="mt-8 text-xl text-emerald-100">Keep growing, keep moving, and never stop believing in yourself!</p>
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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetcZjdbnQTMm3gn3zsCbznMAhu93_5QWohlY9t3uS0zVj_Xg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-colors px-8 py-4 rounded-xl shadow-lg"
        >
          <CalendarCheck className="w-6 h-6" />
          <span>Book a Session</span>
        </a>
      </motion.div>
    </div>
  );
}