import { CONTACT_INFO } from '../constants/links';
import { FiLinkedin, FiYoutube, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FiLinkedin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FiYoutube className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <a
                  href={CONTACT_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600"
                >
                  YouTube Channel
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FiInstagram className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600"
                >
                  Instagram Profile
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FiMail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-700 hover:text-green-600"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <FiPhone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}