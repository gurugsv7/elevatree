import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const nesapriyan = new URL('../assets/nesapriyan.png', import.meta.url).href;
const jayapriya = new URL('../assets/Jayapriya.png', import.meta.url).href;
const rachael = new URL('../assets/JOY RECHAL .png', import.meta.url).href;
const padmaja = new URL('../assets/padmaja.png', import.meta.url).href;
const subashree = new URL('../assets/subashree.jpg', import.meta.url).href;
const shalini = new URL('../assets/shalini.png', import.meta.url).href;
const hemasree = new URL('../assets/hemasree.png', import.meta.url).href;
const kiruthika = new URL('../assets/kiruthika.png', import.meta.url).href;
const subiksha = new URL('../assets/Subiksha.png', import.meta.url).href;
const santosh = new URL('../assets/santhosh.jpg', import.meta.url).href;
const mujibur = new URL('../assets/mujibur.png', import.meta.url).href;
const guna = new URL('../assets/guna.jpg', import.meta.url).href;
const eremiya = new URL('../assets/eremiya jero.jpg', import.meta.url).href;
const avinash = new URL('../assets/avinash.png', import.meta.url).href;

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
  category: string;
  isHidden?: boolean;
}

const mentors: Mentor[] = [
  {
    id: 'gsv',
    name: 'GSV',
    role: 'Classified',
    expertise: '[REDACTED]',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGE-6_gGOgQWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729081993088?e=1745452800&v=beta&t=g8BWUbi7OHSr-Bd28XR4Ex21LDfpTopxbOyiFuRzeCs',
    bio: '[CLASSIFIED INFORMATION]',
    category: 'Classified',
    isHidden: true
  },
  {
    id: 'nesapriyan',
    name: 'Nesapriyan.k',
    role: 'Mentorship & Career Guidance',
    expertise: 'Career Guidance',
    image: nesapriyan,
    bio: 'Dedicated career mentor with extensive experience.',
    category: 'Mentorship & Career Guidance'
  },
  {
    id: 'subiksha',
    name: 'Subiksha. S',
    role: 'Mentorship & Career Guidance',
    expertise: 'Industry Expertise',
    image: subiksha,
    bio: 'Provides expert advice and personalized coaching.',
    category: 'Mentorship & Career Guidance'
  },
  {
    id: 'padmaja',
    name: 'Padmaja. P',
    role: 'Research & Student Resources',
    expertise: 'AI & ML',
    image: padmaja,
    bio: 'An AI & ML student passionate about helping others overcome career uncertainty through personalized mentorship.',
    category: 'Research & Student Resources'
  },
  {
    id: 'mujibur',
    name: 'Mujibur Rahman N',
    role: 'Tech & Innovation',
    expertise: 'AI & ML',
    image: mujibur,
    bio: 'Born under a rare Mars alignment, exploring the frontiers of AI and space technology.',
    category: 'Tech & Innovation'
  },
  {
    id: 'GunaProfile',
    name: 'Guna. R',
    role: 'Helpline & Support',
    expertise: 'AI & ML, Entrepreneurship',
    image: guna,
    bio: 'From mechanical engineering to AI & ML, experienced in project development and entrepreneurship. Passionate about helping others transition into tech.',
    category: 'Helpline & Support'
  },
  {
    id: 'avinash',
    name: 'Avinash. K',
    role: 'Media & Outreach',
    expertise: 'Product Management',
    image: avinash,
    bio: 'Guides product development and management.',
    category: 'Media & Outreach'
  },
  {
    id: 'eremiya',
    name: 'Eremiya jero',
    role: 'Media & Outreach',
    expertise: 'Design',
    image: eremiya,
    bio: 'Creative designer with a knack for innovative solutions.',
    category: 'Media & Outreach'
  },
  {
    id: 'kiruthika',
    name: 'Kiruthika M',
    role: 'Research & Student Resources',
    expertise: 'Food Technology',
    image: kiruthika,
    bio: 'Expert in food technology with aspirations for public service.',
    category: 'Research & Student Resources'
  },
  {
    id: 'jayapriya',
    name: 'Jayapriya',
    role: 'Research & Student Resources',
    expertise: 'Human Resources',
    image: jayapriya,
    bio: 'Expert in developing engaged and productive teams.',
    category: 'Research & Student Resources'
  },
  {
    id: 'subashree',
    name: 'Subashree',
    role: 'Tech & Innovation',
    expertise: 'Finance',
    image: subashree,
    bio: 'Helps with financial planning and investment strategies.',
    category: 'Tech & Innovation'
  },
  {
    id: 'joyrechal',
    name: 'Joy Rechal R',
    role: 'Mentorship & Career Guidance',
    expertise: 'Entrepreneurship',
    image: rachael,
    bio: 'Supports startups and entrepreneurial ventures.',
    category: 'Mentorship & Career Guidance'
  },
  {
    id: 'hemasree',
    name: 'Hemasree G',
    role: 'Research & Student Resources',
    expertise: 'Technology',
    image: hemasree,
    bio: 'Turning challenges into opportunities through determination and perseverance.',
    category: 'Research & Student Resources'
  },
  {
    id: 'shalini',
    name: 'Shalini V',
    role: 'Media & Outreach',
    expertise: 'Technology',
    image: shalini,
    bio: 'Discovered her passion in technology through an unexpected journey.',
    category: 'Media & Outreach'
  },
  {
    id: 'santosh',
    name: 'Santosh S',
    role: 'Mentorship & Career Guidance',
    expertise: 'Career Guidance',
    image: santosh,
    bio: 'First-year BBA student passionate about helping others find their career path.',
    category: 'Mentorship & Career Guidance'
  }
];

export function Mentors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All',
    'Mentorship & Career Guidance',
    'Research & Student Resources',
    'Tech & Innovation',
    'Helpline & Support',
    'Media & Outreach'
  ];

  const filteredMentors = mentors.filter(mentor => {
    // Special case for GSV - only show when exactly "GSV" is searched
    if (mentor.isHidden) {
      return searchTerm.trim().toUpperCase() === 'GSV';
    }

    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || mentor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search mentors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 ${
                mentor.isHidden ? 'bg-black text-green-400' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`relative ${mentor.name === 'Jayapriya' ? 'mt-4 -ml-2' : ''}`}>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${mentor.isHidden ? 'text-green-400' : ''}`}>
                    {mentor.name}
                  </h3>
                  <p className={mentor.isHidden ? 'text-green-600' : 'text-emerald-600'}>
                    {mentor.role}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className={`mb-4 ${mentor.isHidden ? 'text-green-400' : 'text-gray-600'}`}>
                  {mentor.bio}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => navigate(`/mentor/${mentor.id.toLowerCase()}`)}
                  className={`${
                    mentor.isHidden 
                      ? 'text-green-400 hover:text-green-300' 
                      : 'text-emerald-600 hover:text-emerald-700'
                  } transition-colors font-medium`}
                >
                  Know More
                </button>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetcZjdbnQTMm3gn3zsCbznMAhu93_5QWohlY9t3uS0zVj_Xg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    mentor.isHidden
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  } text-white px-6 py-2 rounded-lg transition-colors`}
                >
                  Book Session
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
