import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  NesapriyanProfile, SubashreeProfile, PadmajaProfile, 
  JayapriyaProfile, JoyRechalProfile, HemasreeProfile, 
  ShaliniProfile, KiruthikaProfile, SantoshProfile, 
  MujiburProfile, SubikshaProfile, AvinashProfile,
  GunaProfile, GSVProfile
} from './mentorProfiles';

interface MentorDetail {
  name: string;
  Component: React.ComponentType;
  quote: {
    text: string;
    author: string;
  };
  isHidden?: boolean;
}

const mentorDetails: Record<string, MentorDetail> = {
  'gsv': {
    name: '[CLASSIFIED]',
    Component: GSVProfile,
    quote: {
      text: "In the depths of code, secrets lie dormant, waiting to be discovered by those who dare to search.",
      author: "GSV"
    },
    isHidden: true
  },
  'nesapriyan': {
    name: 'NESAPRIYAN.K',
    Component: NesapriyanProfile,
    quote: {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  },
  'subashree': {
    name: 'SUBASHREE G',
    Component: SubashreeProfile,
    quote: {
      text: "You Can't Connect the Dots Looking Forward; You Can Only Connect Them Looking Backwards.",
      author: "Steve Jobs"
    }
  },
  'padmaja': {
    name: 'PADMAJA P',
    Component: PadmajaProfile,
    quote: {
      text: "EVERY JOURNEY FROM UNCERTAINTY TO SUCCESS BEGINS WITH A SINGLE BOLD DECISION",
      author: "Padmaja P"
    }
  },
  'jayapriya': {
    name: 'JAYAPRIYA R',
    Component: JayapriyaProfile,
    quote: {
      text: "When you come to the end of your rope, tie a knot and hang on.",
      author: "Franklin D. Roosevelt"
    }
  },
  'joyrechal': {
    name: 'R JOY RECHAL',
    Component: JoyRechalProfile,
    quote: {
      text: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
      author: "Mister Rogers"
    }
  },
  'hemasree': {
    name: 'HEMASREE G',
    Component: HemasreeProfile,
    quote: {
      text: "From fear to fuel, from struggle to strength—my journey proves that determination can turn any challenge into success.",
      author: "Hemasree G"
    }
  },
  'shalini': {
    name: 'SHALINI V',
    Component: ShaliniProfile,
    quote: {
      text: "Sometimes, the best decisions come from unexpected places.",
      author: "Shalini V"
    }
  },
  'kiruthika': {
    name: 'KIRUTHIKA M',
    Component: KiruthikaProfile,
    quote: {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    }
  },
  'santosh': {
    name: 'SANTOSH S',
    Component: SantoshProfile,
    quote: {
      text: "One day, I will change my life for the better.",
      author: "Santosh S"
    }
  },
  'subiksha': {
    name: 'SUBIKSHA S',
    Component: SubikshaProfile,
    quote: {
      text: "From childhood, I always had a passion for sharing knowledge 📚, but I never had a clear path.",
      author: "Subiksha S"
    }
  },
  'mujibur': {
    name: 'MUJIBUR RAHMAN N',
    Component: MujiburProfile,
    quote: {
      text: "Whether it's the depths of space or the frontiers of artificial intelligence, the spirit of exploration drives everything I do.",
      author: "Mujibur Rahman N"
    }
  },
  'avinash': {
    name: 'AVINASH K',
    Component: AvinashProfile,
    quote: {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    }
  },
  'gunaprofile': {
    name: 'GUNA R',
    Component: GunaProfile,
    quote: {
      text: "From mechanical engineering to AI & ML, the journey of transformation continues.",
      author: "Guna R"
    }
  }
};

export function MentorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mentor = id ? mentorDetails[id] : null;

  if (!mentor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl text-gray-700">Mentor not found</h2>
        <button
          onClick={() => navigate('/mentors')}
          className="mt-4 text-emerald-600 hover:text-emerald-700"
        >
          Back to Mentors
        </button>
      </div>
    );
  }

  const ProfileComponent = mentor.Component;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section */}
      <section className={`relative ${
        mentor.isHidden 
          ? 'bg-black'
          : 'bg-gradient-to-r from-emerald-600 to-teal-600'
      } py-24 overflow-hidden`}>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className={`absolute top-0 right-0 w-96 h-96 ${
            mentor.isHidden
              ? 'bg-green-500'
              : 'bg-white'
          } opacity-5 rounded-full -mr-48 -mt-48`}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <button
            onClick={() => navigate('/mentors')}
            className={`mb-8 ${
              mentor.isHidden
                ? 'text-green-400 hover:text-green-300'
                : 'text-emerald-100 hover:text-white'
            } flex items-center justify-center`}
          >
            <span>← Back to Mentors</span>
          </button>
          <h1 className={`text-5xl font-bold ${
            mentor.isHidden ? 'text-green-400' : 'text-white'
          } mb-8`}>
            {mentor.name}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <blockquote className={`text-2xl italic ${
              mentor.isHidden ? 'text-green-400' : 'text-emerald-100'
            } mb-4`}>
              "{mentor.quote.text}"
            </blockquote>
            <p className={mentor.isHidden ? 'text-green-500' : 'text-emerald-200'}>
              - {mentor.quote.author}
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-0 left-0 w-72 h-72 ${
            mentor.isHidden
              ? 'bg-green-500'
              : 'bg-white'
          } opacity-5 rounded-full -ml-36 -mb-36`}
        />
      </section>

      {/* Profile Content Section */}
      <div className={mentor.isHidden ? 'bg-black' : 'bg-gradient-to-b from-emerald-50 via-white to-emerald-50'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProfileComponent />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
