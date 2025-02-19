import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, Youtube, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants/links';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <TreePine className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ElevaTree</span>
            </div>
            <p className="mt-4 text-gray-600">
              Empowering careers through mentorship and guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/blog" className="text-base text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-base text-gray-600 hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-base text-gray-600 hover:text-gray-900">
                  Career Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Mail className="h-5 w-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`}
                className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Phone className="h-5 w-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-8 mb-6">
            <a href={CONTACT_INFO.youtube} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF0000] transform hover:scale-110 transition-all duration-200">
              <Youtube className="h-8 w-8" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transform hover:scale-110 transition-all duration-200">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer"
              className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584]
                opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200"></div>
              <Instagram className="h-8 w-8 text-gray-400 group-hover:text-white relative z-10 p-1" />
            </a>
          </div>
          <div className="text-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} ElevaTree. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}