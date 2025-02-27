import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CalendarDays, BookOpen, Heart } from 'lucide-react';

interface UserProfileProps {
  profileData: {
    fullName: string;
    email: string;
    bio: string;
    dateOfBirth: string;
    contact: string;
    fieldOfInterest: string;
  };
  onEdit: () => void;
}

export function UserProfile({ profileData, onEdit }: UserProfileProps) {
  const ProfileItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-start space-x-3 p-4 bg-white/80 rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="mt-1 text-base text-gray-900">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-600 to-teal-600 py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-white/20"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-grow">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Your Profile</h2>
              <p className="text-sm text-gray-600">Your journey with ElevaTree</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEdit}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Edit Profile
            </motion.button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ProfileItem
              icon={User}
              label="Full Name"
              value={profileData.fullName}
            />
            <ProfileItem
              icon={Mail}
              label="Email"
              value={profileData.email}
            />
            <div className="md:col-span-2">
              <ProfileItem
                icon={BookOpen}
                label="Bio"
                value={profileData.bio}
              />
            </div>
            <ProfileItem
              icon={CalendarDays}
              label="Date of Birth"
              value={new Date(profileData.dateOfBirth).toLocaleDateString()}
            />
            <ProfileItem
              icon={Phone}
              label="Contact"
              value={profileData.contact}
            />
            <div className="md:col-span-2">
              <ProfileItem
                icon={Heart}
                label="Field of Interest"
                value={profileData.fieldOfInterest}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}