import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Calendar, Linkedin, Music, Code, Star, Heart, BookOpen, Target, Award, Quote, CalendarCheck } from 'lucide-react';

export function NesapriyanProfile() {
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

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a 
            href="https://www.linkedin.com/in/nesapriyan-k-22628b25a" 
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
            The Half-Filled Glass – A Small Story with a Big Lesson
          </h3>
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed">
              A teacher once handed a student a half-filled glass of water and asked him to walk around. The student walked carelessly, getting distracted and almost spilling the water. Then, the teacher gave him a fully filled glass and asked him to walk without spilling a single drop. This time, the student walked carefully, fully focused, ignoring the surroundings.
            </p>
            <blockquote className="text-2xl font-medium text-emerald-700 border-l-4 border-emerald-500 pl-6 py-2">
              The lesson? When we have no clear purpose, distractions take over. But when we have a goal, we stay focused and move with intent. Life is about finding your purpose and staying committed, despite the noise around you.
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
            My Journey – From Uncertainty to Elevatree
          </h3>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              I was never a top-scoring student—just an average one. But life took a drastic turn after my 9th standard when I lost my father in a car accident. My world collapsed. With a younger sister and a helpless mother looking up to me, I was shattered. But I reminded myself: <span className="italic text-emerald-700 font-medium">"What can I not do? I can do anything."</span>
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With my parents' dreams in mind, I pursued biology, hoping to become a doctor. I worked hard for my board exams, but COVID-19 disrupted my studies. Despite the challenges, I cleared them and attempted NEET twice, hoping for an MBBS seat. But destiny had other plans.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              When medicine didn't work out, I turned to my passion—cinema and music. I was set to join Visual Communication, but one conversation with my mother changed everything. Concerned about my future, she expressed her worries about the uncertainties in the film industry. That night, I reconsidered my path.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I reached out to a friend studying engineering, inquiring about CSE and IT. The next day, my mother and I visited an engineering college, where I was introduced to a new department—Artificial Intelligence & Machine Learning.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Without hesitation, I said: "If you are okay, I am okay." And just like that, I stepped into AI & ML engineering.
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
                <h4 className="text-2xl font-semibold text-emerald-700 mb-4">The Turning Point</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The first year passed by smoothly. But in my second year, I faced a harsh realization—I lacked the necessary skills. My communication, technical knowledge, and confidence were weak.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">That's when I decided to change:</p>
                <ul className="list-disc pl-4 space-y-3 text-gray-700 text-lg mt-4">
                  <li>Started learning and building projects</li>
                  <li>Became active on professional platforms</li>
                  <li>Explored AI & ML deeply</li>
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  Over time, I fell in love with what I was doing. But something was still missing—my first passion, music. So, alongside AI, I immersed myself in piano, music production, and singing. I was now balancing two dreams—AI engineering and music.
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
            Why Elevatree?
          </h3>
          <p className="text-xl leading-relaxed">
            I saw many students around me struggling, lost in career confusion, just like I once was. I understood what it felt like to have no guidance or clarity.
          </p>
          <p className="text-xl leading-relaxed">
            That's when an idea sparked: Why not help others like me? This led to the creation of Elevatree—a student-driven initiative aimed at guiding, motivating, and supporting young minds in their career journey.
          </p>
          <ul className="text-xl leading-relaxed text-emerald-100 space-y-4">
            <li>• We understand the struggles because we've been there.</li>
            <li>• We provide guidance, motivation, and direction to students who feel lost.</li>
            <li>• We are here to ensure no student has to navigate their career path alone.</li>
          </ul>
          <p className="text-xl leading-relaxed">
            Whenever you feel stuck or uncertain, remember—we are here for you.
          </p>
          <div className="pt-10 border-t border-white/20">
            <p className="text-3xl font-medium">"Your struggle is the seed. Your hard work is the water. Your success is the tree."</p>
            <p className="mt-8 text-xl text-emerald-100">Keep growing, keep learning, and never stop believing in yourself. You are capable of more than you think.</p>
            <p className="mt-4 text-xl text-emerald-100">All the best for your journey! We are always with you.</p>
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