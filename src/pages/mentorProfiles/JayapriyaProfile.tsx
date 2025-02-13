import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, BookOpen, Target, Award, Heart, Star, Code, LightbulbIcon } from 'lucide-react';

export function JayapriyaProfile() {
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
            <p className="text-lg text-gray-700 font-medium">B.Tech (IT)</p>
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

      {/* Journey Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Early Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10"
        >
          <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
            <BookOpen className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Early Challenges
          </h3>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">As the first girl child in my family, my journey had its unique challenges. During my 10th standard exams, I faced a significant test of resilience—battling chicken pox and high fever while completing my exams.</p>
            <p className="text-lg leading-relaxed">In 11th and 12th grade, I discovered my passion for Computer Science. This interest would later shape my career path and drive me towards my dreams.</p>
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Following My Dream</h4>
                <p className="text-lg leading-relaxed text-gray-700">Despite family preferences for a local education, I stood firm in my dream of becoming a software developer. This decision marked my first step toward independence and professional growth.</p>
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Overcoming Setbacks</h4>
                <p className="text-lg leading-relaxed text-gray-700">During placements, facing strict criteria taught me valuable lessons about persistence. While some doors closed, others opened, leading me to opportunities that valued my overall potential.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why I Mentor */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 md:p-16 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-10 relative">
          <h3 className="text-4xl font-bold mb-8 flex items-center justify-center">
            <Heart className="w-12 h-12 mr-4 text-emerald-300" strokeWidth={1.5} />
            Why I Mentor
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">Having navigated my own career path with limited guidance, I understand the importance of having someone to turn to for advice. Today, I'm proud to help students avoid the uncertainties I faced and guide them toward their goals with confidence.</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-2xl font-medium">Through sharing our experiences, we can help others find their way.</p>
              <p className="mt-8 text-xl text-emerald-100">Together, we'll turn career confusion into clarity and dreams into reality.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}