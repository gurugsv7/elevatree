import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star } from 'lucide-react';

const mentors = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Career Coach',
    expertise: 'Technology & Leadership',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: '15+ years of experience in career development and leadership coaching.'
  },
  {
    name: 'Michael Chen',
    role: 'Industry Expert',
    expertise: 'Product Management',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Former Product Lead at major tech companies with expertise in product strategy.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Career Strategist',
    expertise: 'Professional Development',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Certified career coach specializing in personal branding and career transitions.'
  }
];

export function Mentors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');

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
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-emerald-600">{mentor.role}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <Star className="inline-block h-4 w-4 text-yellow-400 mr-1" />
                    4.9/5.0 (120+ sessions)
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{mentor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.split('&').map(skill => (
                    <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Book a Session
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
