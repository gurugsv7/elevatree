import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, BookOpen, Target, Award, Heart, Star, Code, Linkedin, CalendarCheck, Quote } from 'lucide-react';

export function JayapriyaProfile() {
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

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
          >
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl shrink-0">
              <Linkedin className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">CONNECT</h2>
              <p className="text-lg text-gray-700 font-medium">LinkedIn</p>
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Quote Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10 md:p-16"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-10 flex items-center">
            <Quote className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Words That Guide Me
          </h3>
          <div className="space-y-8 text-gray-700">
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "hi."
              <footer className="text-lg text-emerald-600 mt-2">- Franklin D. Roosevelt</footer>
            </blockquote>
            <div className="text-xl leading-relaxed">
              <p className="mb-4">
                This quote means that when you feel like giving up, don't let go. Instead, find a way to persevere and keep going.
              </p>
              <p>
                It's saying that even when things seem impossible, you can still find a way to push forward and not give up.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Early Journey Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center">
            <BookOpen className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            My Early Journey
          </h3>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              The journey starts here! I am the first girl child in my family. My school days were happy and normal.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I remember my 10th standard exams. I was very sick with chicken pox and heavy fever. I studied but couldn't give my best in the exam. Despite this challenge, I worked hard and finished my exams.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Then, I went to 11th and 12th standard. I liked Computer Science very much. I studied hard and did well.
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Pursuing My Dreams</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My parents didn't allow me to go far alone out of love. My daddy wanted me to take Arts or B.Ed in my native place. I said no—I wanted to face challenges and pursue my dream of becoming a software developer.
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
                <Star className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Moving Forward</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After that, I joined an engineering college near my hometown. I studied for four years and did well, taking steps toward my goal of becoming a software developer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Career Journey Section */}
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
            Career Journey & Purpose
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">
              In my final year, many companies came to our college to recruit. But they segregated by percentage and did not allow some MNCs to consider students below a cutoff. This was a major setback in my life. I realized that no one in my family or circle guided me to prepare for such criteria.
            </p>
            <p className="text-xl leading-relaxed">
              That time was full of struggle and confusion. Some companies didn't have percentage criteria, and I was happy to get a job. But I saw many students feeling lost about their careers.
            </p>
            <p className="text-xl leading-relaxed">
              So, I decided to help students make informed choices about their careers. I want to guide them and share my experiences with them.
            </p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-2xl font-medium">Now, I'm happy to help students and make a difference in their lives.</p>
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
