import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Users, Lightbulb, Trophy,
  GraduationCap, Globe, BrainCircuit, PiggyBank, 
  Compass, School, Rocket
} from 'lucide-react';

export function GetStarted() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 py-32 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
        />
        
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white sm:text-6xl mb-6">
            Empowering Students, Shaping Futures!
          </h1>
          <p className="mt-4 text-2xl text-emerald-100">
            Get Career Guidance Now!
          </p>
          <p className="mt-6 text-xl text-emerald-200 max-w-3xl mx-auto">
            Empowering students with the right guidance to shape their future! 
            We help school graduates explore career paths and opportunities to achieve their dreams.
          </p>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
        />
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for your career journey</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Career Guidance",
                description: "Access in-depth guidance covering various fields, skill development courses, and job-oriented programs. Take personality and aptitude tests to make informed career choices.",
                link: "/career-guidance"
              },
              {
                icon: PiggyBank,
                title: "Scholarships & Financial Aid",
                description: "Discover national and international scholarships, government financial aid, and education loans. Get expert guidance on the best funding options.",
                link: "/scholarships"
              },
              {
                icon: Users,
                title: "Mentorship & Counselling",
                description: "Connect with mentors for one-on-one guidance, join our student support forum, and attend live career guidance sessions.",
                link: "/mentorship"
              },
              {
                icon: Globe,
                title: "Study Abroad Guidance",
                description: "Get complete guidance on studying abroad, including top destinations, entrance exams, and visa procedures.",
                link: "/study-abroad"
              },
              {
                icon: BrainCircuit,
                title: "Entrance Exams Preparation",
                description: "Access detailed information on NEET, JEE, UPSC, CAT, and more. Take free mock tests and find the best coaching institutes.",
                link: "/exam-prep"
              },
              {
                icon: Rocket,
                title: "Alternative Career Paths",
                description: "Explore entrepreneurship, freelancing, and vocational training opportunities. Learn how to start earning while studying.",
                link: "/alternative-careers"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 group"
              >
                <div className="relative">
                  <service.icon className="h-10 w-10 text-emerald-600 mb-4 transform transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-b from-white via-emerald-50 to-white">
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Lightbulb className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a future where every student makes informed career choices and achieves their full potential.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Trophy className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To guide Students with career insights, mentorship, and opportunities, ensuring they take the right path toward success.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why We Started Section */}
      <section className="py-16 bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100">
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Why We Started</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
            We started this NGO to bridge the gap between students and the right career opportunities, 
            ensuring they make informed decisions about their future. Our goal is to provide guidance, 
            mentorship, and resources to help them succeed.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
