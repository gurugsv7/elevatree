import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Linkedin, BookOpen, Target, Award, Star, Medal, CalendarCheck } from 'lucide-react';

export function HemasreeProfile() {
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
            <h2 className="text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-1">DOMAIN</h2>
            <p className="text-lg text-gray-700 font-medium">B.TECH INFORMATION TECHNOLOGY</p>
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
            <p className="text-lg text-gray-700 font-medium">PONDICHERRY</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a
            href="https://www.linkedin.com/in/hemasree-g-51267b274"
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
            The Journey of Determination – A Story of Resilience and Growth
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">I am a single child of my parents. My mother, a woman of incredible strength, became a homemaker 
after her marriage as her parents couldn’t afford her education beyond higher secondary school. When I 
was born, a relative challenged her, saying, "I see how you raise your child well." Those words ignited a 
fire within her, a determination to raise me as an educated, financially independent woman.</p>
            <p className="text-xl leading-relaxed">She became strict when it came to my studies, knowing the value of education she once dreamt of but 
couldn’t achieve. She was determined to see me accomplish what she could not, breaking the cycle and 
proving that circumstances do not define destiny.</p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "A strong woman raises a stronger woman."
            </blockquote>
            <p className="text-xl leading-relaxed">During middle school, I was an average student who hated mathematics. My math teacher once insulted 
me for barely passing an exam. I felt humiliated, but that very moment became my turning point. 
Instead of giving up, I channeled my anger and frustration into hard work. I decided to conquer the 
subject I hated the most. Hours of practice and persistence led me to score above 80. From that moment, 
I realized:</p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "Failure is success if we learn from it."
            </blockquote>
            <p className="text-xl leading-relaxed">In my higher secondary, I chose Computer Science because I was afraid of NEET. I had no passion for it 
initially. But with a government scholarship, I joined a college that I didn’t like at first. I was hesitant and 
uncertain, and when I started my journey in Information Technology, a new fear arose—coding.</p>
            <p className="text-xl leading-relaxed">I thought coding was too difficult for me. My parents, seeing my struggles, suggested alternative career 
paths like becoming a professor or preparing for government exams. But this time, I refused to run away 
from my fear.</p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              "Turn your fear into fuel, and watch it drive you to success."
            </blockquote>
            <p className="text-xl leading-relaxed">I decided to face my fear and transform it into success. I started learning the skills required for my 
domain with a clear career goal in mind. As I acquired knowledge and practiced consistently, my fear of 
coding turned into passion and confidence. My journey in the software field became a testament to the 
power of perseverance and growth.</p>
          </div>
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
            My Connection with ElevaTree
          </h3>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">I have faced defeat by fear once before, but I am determined never to let that happen again. My 
experiences taught me that with a clear career path, determination, and hard work, we can achieve 
anything and everything.</p>
            <p className="text-xl leading-relaxed">I resonate with ElevaTree because it represents growth, ambition, and the courage to overcome 
challenges. Just like Eleva, my journey is about continuous improvement and helping others rise with me.</p>
            <div className="pt-10 border-t border-white/20">
              <p className="text-3xl font-medium">"Alone we are smart. Together we are brilliant."– Steven Anderson</p>
              <p className="mt-8 text-xl text-emerald-100">Let’s grow together and reach new heights.</p>
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