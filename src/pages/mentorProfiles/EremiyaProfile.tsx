import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Calendar, Music, Trophy, Camera, Star, Heart, BookOpen, Target, Award, Quote, CalendarCheck } from 'lucide-react';

export function EremiyaProfile() {
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
            <p className="text-lg text-gray-700 font-medium">B.COM CO-OP MGMT</p>
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
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">BORN</h2>
            <p className="text-lg text-gray-700 font-medium">SEP 7, 2005</p>
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
            href="mailto:eremiyajerom@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-emerald-100/20"
          >
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 rounded-xl">
              <Mail className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">CONNECT</h2>
              <p className="text-lg text-gray-700 font-medium">Email</p>
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
            <Quote className="w-10 h-10 mr-4 text-emerald-600" strokeWidth={1.5} />
            Don't watch the clock; do what it does. Keep going.
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">
              This quote reminds us to stay focused and keep moving forward, just like time does! Instead of constantly watching the clock and worrying about how much time has passed, we should use every moment wisely.
            </p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              Success comes to those who work consistently without distractions. No matter the challenges or obstacles, persistence and determination will lead us to our goals.
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
            My Educational Journey
          </h3>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              My educational journey began in a private school, where I studied from LKG to 8th standard. However, due to certain circumstances, including my father's accident, I had to transfer to a government school for my 9th to 12th standard.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              In 10th grade, I chose the accountancy group, and now I am pursuing a degree in Cooperative Management at a government college.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Despite my dedication, I often find myself struggling to understand what I am studying and the career opportunities available in the cooperative sector. My journey has been filled with challenges, but I am determined to overcome them and find clarity in my studies and future career.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With God's grace, I am moving forward on the right path in life. Despite the challenges I have faced in my education and personal journey, I remain determined to overcome them. Each step I take brings me closer to clarity and success.
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
                <Music className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Artistic Passions</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am a singer and have a deep love for music. I am also a drummer, expressing my passion through rhythm and beats. My artistic journey extends beyond music - I enjoy video editing and have a big interest in photography, capturing moments and creating memories.
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
                <Trophy className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Sports Achievement</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In sports, I have represented at the national level in football and handball, always giving my best. These experiences have taught me valuable lessons about teamwork, discipline, and perseverance.
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
            Eleva Tree - Our Promise
          </h3>
          <p className="text-xl leading-relaxed">
            I am ready to guide you about the Eleva Tree and help you understand what you can study, which field matches your interests, and what opportunities you can explore.
          </p>
          <p className="text-xl leading-relaxed">
            Whether you're confused about your studies or wondering what career path to take, I am here to support and guide you on your journey!
          </p>
          <ul className="text-xl leading-relaxed text-emerald-100 space-y-4">
            <li>• We will give you guidance and support just like a brother and sister</li>
            <li>• We are here with a full heart and true dedication</li>
            <li>• We will help you find your path, chase your dreams, and achieve success</li>
          </ul>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Believe in yourself, stay dedicated, and trust the journey—great things take time."</p>
            <p className="mt-8 text-xl text-emerald-100">Life is a beautiful journey filled with ups and downs, challenges and victories.</p>
            <p className="mt-4 text-xl text-emerald-100">Keep learning, keep growing, and never stop believing in yourself.</p>
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