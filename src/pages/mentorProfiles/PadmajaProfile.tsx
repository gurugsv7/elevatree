import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, Compass, Heart, Star, Code, LightbulbIcon } from 'lucide-react';

export function PadmajaProfile() {
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
            <p className="text-lg text-gray-700 font-medium">B.Tech (AI & ML)</p>
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
            <p className="text-lg text-gray-700 font-medium">CHIDAMBARAM</p>
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
            The Struggles of Starting Out
          </h3>
          <div className="space-y-8">
            <blockquote className="text-2xl italic text-emerald-600 mb-6">
              "The hardest roads often lead to the most beautiful destinations."
            </blockquote>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Like many students, my journey was filled with confusion and uncertainty. After completing my 12th grade during the COVID-19 pandemic, I faced an even greater challenge—transitioning into college life with almost zero knowledge.</p>
              <p>Online classes, lack of hands-on learning, and minimal interaction with peers left me feeling unprepared. Academically, my initial college years were tough, as I struggled to adapt to a new learning environment and grasp complex concepts.</p>
            </div>
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
            The Turning Point
          </h3>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <blockquote className="text-xl italic text-emerald-600 mb-6">
              "Growth begins the moment you step outside your comfort zone."
            </blockquote>
            <p>When I entered my core department, AI and ML seemed both fascinating and intimidating. I often questioned whether I had made the right choice. But one day, a realization struck me—What if I pushed myself beyond my limits?</p>
            <p>That moment changed everything. I started exploring AI and ML beyond textbooks, working on projects, learning from mistakes, and gradually building my technical skills.</p>
          </div>
        </div>

        <div className="space-y-10">
          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
                <Code className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Building Skills</h4>
                <p className="text-lg leading-relaxed text-gray-700">My failures became stepping stones, and persistence turned into progress. Over time, I developed a deep passion for my field and a strong desire to keep learning and growing.</p>
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
                <Star className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Discovering Passion</h4>
                <p className="text-lg leading-relaxed text-gray-700">Real-world projects, problem-solving, and continuous learning fueled my confidence and transformed my perspective. Each challenge became an opportunity to grow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Mentorship Matters */}
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
            Why Mentorship Matters
          </h3>
          <div className="space-y-8">
            <blockquote className="text-2xl italic">
              "The right mentor can change your life in ways you never imagined."
            </blockquote>
            <p className="text-xl leading-relaxed">Looking back, I realize that apart from my family, I had no mentor to guide me through these challenges. I know how overwhelming it can be to navigate career decisions alone. That's why we founded Elevatree—to ensure that no student has to experience the same struggles we did.</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-3xl font-medium">Our mission is to provide personalized mentorship, career guidance, and a supportive environment.</p>
              <p className="mt-8 text-xl text-emerald-100">Together, we can help you explore opportunities and make informed decisions that shape your future.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connect Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-6"
      >
        <a 
          href="https://www.linkedin.com/in/padmaja-p-113214246" 
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