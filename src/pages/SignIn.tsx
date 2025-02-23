import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TreePine, Mail, Lock, ArrowRight, User } from 'lucide-react';
import * as authService from '../services/auth';

export function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        await authService.login(formData.email, formData.password);
        navigate('/');
      } else {
        if (!formData.fullName) {
          throw new Error('Full name is required for registration');
        }
        await authService.register(formData.email, formData.password, formData.fullName);
        // Redirect to profile page after registration to complete profile
        navigate('/profile');
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || 'Authentication failed - please try again');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsLoading(true);
    try {
      await authService.signInWithGoogle();
      // For Google sign-in, check if profile exists
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const hasProfile = localStorage.getItem(`profile_${user.uid}`);
      navigate(hasProfile ? '/' : '/profile');
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      setError(err.message || 'Google sign-in failed - please try again');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center mb-8">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <motion.div
            className="bg-white py-8 px-6 shadow-lg rounded-xl sm:px-10 transition-all duration-300"
            variants={formVariants}
          >
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              )}

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    'Processing...'
                  ) : (
                    <>
                      {isLogin ? 'Sign in' : 'Sign up'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                  Sign in with Google
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
