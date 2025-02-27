import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CalendarDays, BookOpen, Heart } from 'lucide-react';
import { auth } from '../config/firebase';
import { updateProfile } from 'firebase/auth';
import emailjs from '@emailjs/browser';

interface ProfileFormData {
  fullName: string;
  bio: string;
  email: string;
  dateOfBirth: string;
  contact: string;
  fieldOfInterest: string;
}

export function ProfileSetup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: '',
    bio: '',
    email: '',
    dateOfBirth: `${new Date().getFullYear()}-01-01`,
    contact: '',
    fieldOfInterest: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/signin');
        return;
      }

      setFormData(prev => ({
        ...prev,
        fullName: user.displayName || '',
        email: user.email || ''
      }));

      const profileData = localStorage.getItem(`profile_${user.uid}`);
      if (profileData) {
        // If profile exists, redirect to profile page
        navigate('/profile');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No authenticated user found');
      }

      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await updateProfile(user, {
        displayName: formData.fullName
      });

      localStorage.setItem(`profile_${user.uid}`, JSON.stringify({
        bio: formData.bio,
        dateOfBirth: formData.dateOfBirth,
        contact: formData.contact,
        fieldOfInterest: formData.fieldOfInterest
      }));

      await sendProfileEmail(formData);
      
    } catch (err: any) {
      console.error('Profile update failed:', err);
      setError(err.message || 'Failed to update profile');
      setIsLoading(false);
    }
  };

  const sendProfileEmail = async (profileData: ProfileFormData) => {
    try {
      const templateParams = {
        to_email: import.meta.env.VITE_ADMIN_EMAIL,
        from_name: profileData.fullName,
        from_email: profileData.email,
        date_of_birth: profileData.dateOfBirth,
        contact: profileData.contact,
        bio: profileData.bio,
        field_of_interest: profileData.fieldOfInterest
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccessMessage('Profile created successfully!');
      navigate('/profile');

    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const InputField = ({
    label, 
    name, 
    type = 'text', 
    value, 
    onChange, 
    placeholder = '', 
    required = true,
    disabled = false,
    icon: Icon,
    rows = undefined
  }: {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    icon: React.ComponentType<any>;
    rows?: number;
  }) => (
    <div className="relative">
      <label htmlFor={name} className="block text-base font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        {rows ? (
          <textarea
            id={name}
            name={name}
            rows={rows}
            required={required}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`block w-full pl-10 pt-2 ${
              disabled ? 'bg-gray-50' : ''
            } border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base resize-y min-h-[120px]`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`block w-full pl-10 ${
              disabled ? 'bg-gray-50' : ''
            } border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base py-2`}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-600 to-teal-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative circles */}
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
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Complete Your Profile</h2>
            <p className="text-lg text-gray-600">Help us get to know you better</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                icon={User}
              />

              <InputField
                label="Gmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={true}
                icon={Mail}
              />
            </div>

            <InputField
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              icon={BookOpen}
              rows={4}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="dobDay"
                    value={formData.dateOfBirth.split('-')[2] || ''}
                    onChange={(e) => {
                      const [year, month] = formData.dateOfBirth.split('-');
                      const date = `${year || new Date().getFullYear()}-${month || '01'}-${e.target.value.padStart(2, '0')}`;
                      handleChange({ target: { name: 'dateOfBirth', value: date } } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day.toString().padStart(2, '0')}>{day}</option>
                    ))}
                  </select>
                  <select
                    name="dobMonth"
                    value={formData.dateOfBirth.split('-')[1] || ''}
                    onChange={(e) => {
                      const [year, _, day] = formData.dateOfBirth.split('-');
                      const date = `${year || new Date().getFullYear()}-${e.target.value}-${day || '01'}`;
                      handleChange({ target: { name: 'dateOfBirth', value: date } } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                  >
                    <option value="">Month</option>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                      <option key={month} value={(index + 1).toString().padStart(2, '0')}>{month}</option>
                    ))}
                  </select>
                  <select
                    name="dobYear"
                    value={formData.dateOfBirth.split('-')[0] || ''}
                    onChange={(e) => {
                      const [_, month, day] = formData.dateOfBirth.split('-');
                      const date = `${e.target.value}-${month || '01'}-${day || '01'}`;
                      handleChange({ target: { name: 'dateOfBirth', value: date } } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <InputField
                label="Contact"
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                icon={Phone}
              />
            </div>

            <InputField
              label="Field of Interest"
              name="fieldOfInterest"
              value={formData.fieldOfInterest}
              onChange={handleChange}
              placeholder="e.g., Web Development, AI, Mobile Apps"
              icon={Heart}
            />

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving Profile...
                  </div>
                ) : (
                  'Save & Continue'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}