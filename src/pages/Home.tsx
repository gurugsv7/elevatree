import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Target } from 'lucide-react';
import { motion, Variants, useInView } from 'framer-motion';
import { ChatBot } from '../components/ChatBot';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Create refs for each section
  const featuresRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const missionRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const resourcesRef = React.useRef(null);

  // Check if sections are in view
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const resourcesInView = useInView(resourcesRef, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-32 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <motion.span 
                className="block"
                whileHover={{ scale: 1.05, color: "#7fffd4" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Elevate Your Career Journey
              </motion.span>
              <motion.span 
                className="block text-emerald-200"
                whileHover={{ scale: 1.05, color: "#98FB98" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                With Expert Guidance
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-3 max-w-md mx-auto text-base text-emerald-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Connect with industry mentors, explore career paths, and access resources to accelerate your professional growth.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <motion.div 
                className="rounded-md shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/get-started"  // Changed from "/register" to "/get-started"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-10 relative overflow-hidden group"
                >
                  <motion.span
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="relative z-10"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ opacity: 0.2 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
        />
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Why Choose ElevaTree?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              We provide the tools and guidance you need to succeed in your career journey.
            </motion.p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/mentors" className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">Expert Mentorship</h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      Connect with experienced professionals who can guide you through your career journey.
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/career-paths" className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100">
                      <Target className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">Career Planning</h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      Get personalized career path recommendations based on your skills and interests.
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/resources" className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100">
                      <BookOpen className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">Learning Resources</h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      Access curated content, success stories, and guides to help you grow professionally.
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-bl from-emerald-200/40 via-teal-100/40 to-emerald-200/40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Meet the Team
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              The experts behind your career success
            </motion.p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div 
              variants={itemVariants}
              className="relative aspect-video w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </motion.div>
            <div className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                Our team consists of industry experts, career coaches, and technology professionals who are passionate about helping others succeed.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                Each team member is committed to providing personalized guidance and support to help you achieve your career goals.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/mentors"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  Know Your Mentors
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-tr from-teal-100 via-emerald-50 to-teal-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Empowering careers, transforming futures
            </motion.p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed"
              >
                To empower professionals through personalized mentorship, expert guidance, and comprehensive resources, fostering career growth and professional excellence in an ever-evolving job market.
              </motion.p>
              <div className="space-y-6">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Accessible Mentorship</h3>
                    <p className="mt-2 text-gray-600">Making expert guidance available to professionals at every career stage</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Continuous Growth</h3>
                    <p className="mt-2 text-gray-600">Supporting lifelong learning and skill development</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Career Excellence</h3>
                    <p className="mt-2 text-gray-600">Fostering professional success through targeted guidance and resources</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div 
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Professional team meeting"
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Career Guidance Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-br from-emerald-200/40 via-teal-100/40 to-emerald-200/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Career Guidance Services
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Comprehensive solutions to accelerate your professional growth
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Career Exploration
                </h3>
                <p className="text-gray-600">
                  Navigate your career path with confidence through personalized assessments, industry insights, and targeted role recommendations. Our expert analysis helps you identify opportunities that align with your skills and aspirations.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personalized Mentorship
                </h3>
                <p className="text-gray-600">
                  Connect one-on-one with industry veterans who provide tailored guidance, share real-world experiences, and help you make informed career decisions. Benefit from their expertise in your chosen field.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col space-y-4">
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Resume & Skill Development
                </h3>
                <p className="text-gray-600">
                  Transform your professional profile with expert resume reviews, portfolio optimization, and targeted skill development programs. Stay competitive with customized learning paths and industry-relevant certifications.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Live Q&A & Webinars
                </h3>
                <p className="text-gray-600">
                  Participate in interactive sessions with industry experts, attend skill-building workshops, and engage in live Q&A sessions. Access recorded content and exclusive resources to learn at your own pace.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Resources Section */}
      <motion.section
        ref={resourcesRef}
        initial="hidden"
        animate={resourcesInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-tl from-emerald-100 via-teal-50 to-emerald-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Resources
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Free Knowledge Hub for Career Development
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div 
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Blogs</h3>
                <p className="text-gray-600 mb-6">
                  Access our extensive collection of expert-written articles, industry insights, and practical guides. Stay updated with the latest career trends, professional development strategies, and workplace best practices.
                </p>
                <Link
                  to="/resources/blogs"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  Browse Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm group-hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-gray-600 mb-6">
                  Get inspired by real stories from professionals who transformed their careers through ElevaTree. Learn about their challenges, strategies, and achievements in their professional journey.
                </p>
                <Link
                  to="/resources/success-stories"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  Read Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            <span className="block">Ready to start your journey?</span>
            <span className="block text-emerald-200">Join ElevaTree today.</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Bot */}
      <ChatBot />
    </motion.div>
  );
}