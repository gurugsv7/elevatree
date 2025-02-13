import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Calendar, Linkedin, Music, Code, Star, Heart, BookOpen, Target, Award } from 'lucide-react';

export function NesapriyanProfile() {
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
            <p className="text-lg text-gray-700 font-medium">22</p>
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
            The Half-Filled Glass
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">A teacher handed a student a half-filled glass of water and asked him to walk around. The student walked carelessly, almost spilling the water. Next, the teacher gave him a full glass and asked him to walk without spilling. This time, the student walked carefully, fully focused.</p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              The lesson? A clear purpose brings focus and intent.
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
            My Journey
          </h3>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">I was an average student until life changed after my 9th standard when I lost my father. With my mother and younger sister depending on me, I stayed determined: <span className="italic text-emerald-700 font-medium">"What can I not do? I can do anything."</span></p>
            <p className="text-lg leading-relaxed text-gray-700">With my parents' dreams in mind, I pursued biology, hoping to become a doctor. Despite challenges, including disruptions from the global health crisis, I attempted NEET twice but didn't secure a seat.</p>
            <p className="text-lg leading-relaxed text-gray-700">A visit to an engineering college introduced me to Artificial Intelligence & Machine Learning. Without hesitation, I told my mother, "If you are okay, I am okay," and stepped into AI & ML engineering.</p>
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Technical Growth</h4>
                <ul className="list-disc pl-4 space-y-3 text-gray-700 text-lg">
                  <li>Built projects and explored AI & ML deeply</li>
                  <li>Became active on professional platforms</li>
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
                <Music className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Balancing Passions</h4>
                <p className="text-lg text-gray-700 leading-relaxed">Alongside AI, I embraced piano, music production, and singing, finding harmony between technology and artistry.</p>
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
            Why Elevatree?
          </h3>
          <p className="text-xl leading-relaxed">I saw students around me struggling with career confusion, just as I had. That inspired Elevatree—a student-driven initiative offering guidance, motivation, and support. We understand the struggle because we've lived it. Our mission is to ensure no student navigates their career path alone.</p>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Your struggle is the seed. Your hard work is the water. Your success is the tree."</p>
            <p className="mt-8 text-xl text-emerald-100">Keep growing, keep learning, and believe in yourself. You are capable of more than you think.</p>
          </div>
        </div>
      </motion.div>

      {/* Connect Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <a 
          href="https://www.linkedin.com/in/nesapriyan-k-22628b25a" 
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