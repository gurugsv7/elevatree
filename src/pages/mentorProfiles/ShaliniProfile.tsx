import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, CalendarCheck } from 'lucide-react';

export function ShaliniProfile() {
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
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
            <GraduationCap className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">DEGREE</h2>
            <p className="text-lg text-gray-700 font-medium">B.TECH (IT)</p>
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
            <p className="text-lg text-gray-700 font-medium">CUDDALORE</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a
            href="https://www.linkedin.com/in/shalini-v-81750b28a"
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
            Finding My Path
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">After finishing my 10th grade, I felt really confused about what to do next. I thought I wanted to go with the commerce stream, but my parents didn't allow me to. I didn't know what was the right decision, and the pressure to choose the right path was overwhelming. One of my friends suggested I take the computer science group, so I thought, "Why not?" But after joining, I quickly realized it wasn't something I enjoyed.</p>
            <p className="text-xl leading-relaxed">Feeling lost and unsure, I decided to switch to the biology group, hoping it would be a better fit. But even after finishing school, I still didn't know what to choose for my future. I thought about studying psychology or becoming a dentist, but I wasn't sure if either of them was the right choice for me.</p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "Sometimes, the best decisions come from unexpected places."
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Journey Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
      >
        <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
          <Target className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
          The Unexpected Journey
        </h3>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">Eventually, after much thought, I decided to go for engineering, thinking it would be a safe option. It wasn't something I was completely passionate about, but I thought it would open up more opportunities for me. However, something surprising happened once I started studying engineering. I realized that I really enjoyed working with technology. I started discovering a new passion that I never thought I would have.</p>
          <p className="text-lg leading-relaxed">Engineering, which I had chosen as a safe option, turned out to be the perfect fit for me after all. Looking back, I now understand that finding the right path isn't always easy. It's okay to be confused and take your time figuring things out. You don't have to know everything right away, and it's perfectly normal to feel lost at times.</p>
        </div>
      </motion.div>

      {/* Message Section */}
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
            Message to Future Explorers
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">To all the students out there who are feeling lost or uncertain, remember: it's completely normal to not have everything figured out yet. Don't rush to have all the answers. Life is full of learning, and sometimes the best things come from trying new things, making mistakes, and learning from them.</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-3xl font-medium">"Don't be afraid to explore, because you never know where it might take you."</p>
              <p className="mt-8 text-xl text-emerald-100">Stay curious, stay open-minded, and trust that you will find the right path for you. The journey might be long, but it will be worth it.</p>
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