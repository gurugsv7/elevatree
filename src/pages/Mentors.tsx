import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const nesapriyan = new URL('../assets/nesapriyan.png', import.meta.url).href;
const jayapriya = new URL('../assets/Jayapriya.png', import.meta.url).href;
const rachael = new URL('../assets/JOY RECHAL .png', import.meta.url).href;
const padmaja = new URL('../assets/padmaja.png', import.meta.url).href;
const subashree = new URL('../assets/subashree.jpg', import.meta.url).href;

const mentors = [
  {
    id: 'nesapriyan',
    name: 'Nesapriyan.k',
    role: 'Mentor',
    expertise: 'Career Guidance',
    image: nesapriyan,
    bio: 'Dedicated career mentor with extensive experience.'
  },
  {
    id: 'subiksha',
    name: 'Subiksha. S',
    role: 'Mentor',
    expertise: 'Industry Expertise',
    image: 'https://via.placeholder.com/150',
    bio: 'Provides expert advice and personalized coaching.'
  },
  {
    id: 'padmaja',
    name: 'Padmaja. P',
    role: 'Mentor',
    expertise: 'Leadership',
    image: padmaja,
    bio: 'Experienced in nurturing leadership skills.'
  },
  {
    id: 'mujibur',
    name: 'Mujibur rahman.N',
    role: 'Mentor',
    expertise: 'Software Engineering',
    image: 'https://via.placeholder.com/150',
    bio: 'Technical expertise in software development.'
  },
  {
    id: 'guna',
    name: 'Guna. R',
    role: 'Mentor',
    expertise: 'Marketing',
    image: 'https://via.placeholder.com/150',
    bio: 'Expert in marketing and business growth strategies.'
  },
  {
    id: 'avinash',
    name: 'Avinash. K',
    role: 'Mentor',
    expertise: 'Product Management',
    image: 'https://via.placeholder.com/150',
    bio: 'Guides product development and management.'
  },
  {
    id: 'eremiya',
    name: 'Eremiya jero',
    role: 'Mentor',
    expertise: 'Design',
    image: 'https://via.placeholder.com/150',
    bio: 'Creative designer with a knack for innovative solutions.'
  },
  {
    id: 'krithika',
    name: 'Krithika',
    role: 'Mentor',
    expertise: 'Business Strategy',
    image: 'https://via.placeholder.com/150',
    bio: 'Provides strategic insights for business success.'
  },
  {
    id: 'jayapriya',
    name: 'Jayapriya',
    role: 'Mentor',
    expertise: 'Human Resources',
    image: jayapriya,
    bio: 'Expert in developing engaged and productive teams.'
  },
  {
    id: 'subashree',
    name: 'Subashree',
    role: 'Mentor',
    expertise: 'Finance',
    image: subashree,
    bio: 'Helps with financial planning and investment strategies.'
  },
  {
    id: 'joyrechal',
    name: 'Joy Rechal R',
    role: 'Mentor',
    expertise: 'Entrepreneurship',
    image: rachael,
    bio: 'Supports startups and entrepreneurial ventures.'
  },
  {
    id: 'hemashree',
    name: 'Hemashree',
    role: 'Mentor',
    expertise: 'Technology',
    image: 'https://via.placeholder.com/150',
    bio: 'Tech expert with deep industry insights.'
  },
  {
    id: 'shalini',
    name: 'Shalini',
    role: 'Mentor',
    expertise: 'Personal Branding',
    image: 'https://via.placeholder.com/150',
    bio: 'Guides professionals in building their personal brand.'
  }
];

export function Mentors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const navigate = useNavigate();

  const expertiseAreas = ['All', 'Technology', 'Leadership', 'Product', 'Career Development'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpertise = selectedExpertise === 'All' || mentor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
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
          <div className="flex gap-2">
            {expertiseAreas.map(area => (
              <button
                key={area}
                onClick={() => setSelectedExpertise(area)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedExpertise === area
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {area}
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
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
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
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-emerald-600">{mentor.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{mentor.bio}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                                  onClick={() => navigate(`/mentor/${mentor.id}`)}
                                  className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                                 >
                                  Know More
                </button>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
