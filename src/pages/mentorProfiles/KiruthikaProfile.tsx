import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, Quote, CalendarCheck } from 'lucide-react';

export function KiruthikaProfile() {
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
            <p className="text-lg text-gray-700 font-medium">B.TECH FOOD TECHNOLOGY</p>
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
            <p className="text-lg text-gray-700 font-medium">20</p>
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
            <p className="text-lg text-gray-700 font-medium">CHIDAMBARAM, TAMIL NADU</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a 
            href="https://www.linkedin.com/in/kiruthika-m-6b92b024a" 
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
            The Journey of Persistence
          </h3>
          <div className="space-y-8 text-gray-700">
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "It does not matter how slowly you go as long as you do not stop." — Confucius
            </blockquote>
            <p className="text-xl leading-relaxed">
              This quote means that it's okay if you're not making fast progress or achieving things quickly. What's important is that you keep going and don't give up. As long as you keep moving forward, even if it's at a slow pace, you will eventually reach your goal. It's about being patient and staying persistent, no matter how long it takes.
            </p>
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
            My Journey – Finding My Path
          </h3>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              When I was studying in 10th grade, I never thought about choosing a particular group in higher secondary school. I only focused on getting good marks in 10th. My father told me to take the biology group and study to become a doctor, but I wanted to take commerce and work in a bank.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              However, I followed my father's advice, took biology, and prepared for NEET in coaching classes. I thought I would develop an interest in the biology group, but I never did. So, I decided to drop it.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              After completing 12th grade, I was confused about which field to choose. I knew I didn't want to work in the software field (like CSE or IT), so I chose food technology, as food is always essential and has good future prospects. During my college years, I didn't think much about my career because my father took care of everything for me.
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
                <Target className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">The Turning Point</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In my 4th year of college, I faced some personal issues. After that, I felt like whatever I did, one of my loved one's dreams would come true, which was for me to work in a government job as a higher official. At the same time, I also wanted to get a government job.
                </p>
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
                <Award className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Moving Forward</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I know I might not be capable of passing the exams, but I want to try. If I don't even attempt it, I know I won't pass. Maybe if I had tried earlier, I would have achieved a lot. But it's never too late to start.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Words of Wisdom Section */}
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
            Words of Wisdom
          </h3>
          <blockquote className="text-2xl font-medium mb-8">
            "Decisions are the hardest thing to make, especially when it is a choice between where you should be and where you want to be."
          </blockquote>
          <p className="text-xl leading-relaxed">
            So, take your time to make a good decision.
          </p>
          <p className="text-2xl font-bold mt-6 text-emerald-300">
            "EDUCATION IS THE MOVEMENT FROM DARKNESS TO LIGHT"
          </p>
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