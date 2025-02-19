import { useState, useRef, useEffect } from 'react';
import chatbotIcon from '../assets/chatbot bg.png';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface QuickQuestion {
  text: string;
  response: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions: QuickQuestion[] = [
   {
     text: 'Tell me about ElevaTree',
     response: 'ElevaTree is your premier career growth platform that connects aspiring professionals with experienced mentors. We provide personalized guidance, skill development resources, and a supportive community to help you reach your career goals.'
   },
   {
     text: 'Who are your mentors?',
     response: 'We have a diverse team of experienced mentors including:\n- Hemasree: Expert in frontend development and UI/UX\n- Jayapriya: Specializes in backend systems and databases\n- Joy Rechal: Full-stack development expert\n- Nesapriyan: Cloud architecture and DevOps specialist\n- Padmaja: Software testing and quality assurance\n- Shalini: Project management and Agile methodologies\n- Subashree: System design and architecture\nEach mentor brings unique expertise and real-world experience to help guide your career journey.'
   },
   {
     text: 'How does mentoring work?',
     response: 'Our mentoring process is simple and effective:\n1. Browse mentor profiles and choose one that matches your goals\n2. Schedule a free initial consultation\n3. Develop a personalized growth plan\n4. Regular one-on-one sessions\n5. Access to additional resources and workshops\nWe focus on practical guidance and real-world experience to help you succeed.'
   },
   {
     text: 'What resources are available?',
     response: 'We offer comprehensive resources including:\n- Career development workshops\n- Technical skill training sessions\n- Industry-specific webinars\n- Project-based learning materials\n- Resume and interview preparation\n- Networking opportunities\n- Online learning platform access\nVisit our Resources page to explore more!'
   }
 ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = { text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputText),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputText('');
  };

  const handleQuickQuestion = (question: QuickQuestion) => {
    const userMessage: Message = { text: question.text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        text: question.response,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return 'Hello! Welcome to ElevaTree! How can I assist you with your career growth journey today?';
    }

    // Mentor related queries
    if (lowerInput.includes('hemasree')) {
      return 'Hemasree is our frontend development expert specializing in creating intuitive and responsive user interfaces. She has extensive experience in React, Vue.js, and modern UI/UX practices.';
    } else if (lowerInput.includes('jayapriya')) {
      return 'Jayapriya is our backend development specialist with expertise in database design, API development, and system optimization. She excels in Node.js, Python, and SQL/NoSQL databases.';
    } else if (lowerInput.includes('joy') || lowerInput.includes('rechal')) {
      return 'Joy Rechal is our full-stack development expert who brings comprehensive knowledge in both frontend and backend technologies. She specializes in end-to-end application development and modern web frameworks.';
    } else if (lowerInput.includes('nesapriyan')) {
      return 'Nesapriyan is our cloud and DevOps specialist focusing on AWS, Azure, and containerization technologies. He helps teams implement efficient CI/CD pipelines and cloud infrastructure.';
    } else if (lowerInput.includes('padmaja')) {
      return 'Padmaja is our quality assurance expert specializing in automated testing, test strategy development, and quality process improvement. She ensures robust and reliable software delivery.';
    } else if (lowerInput.includes('shalini')) {
      return 'Shalini is our project management expert with deep knowledge of Agile methodologies. She helps teams improve their development processes and delivery efficiency.';
    } else if (lowerInput.includes('subashree')) {
      return 'Subashree specializes in system architecture and design patterns. She helps teams design scalable and maintainable software solutions using best practices and modern architectures.';
    } else if (lowerInput.includes('mentor')) {
      return 'Our mentors are industry experts with extensive experience in their fields. They provide personalized guidance, career advice, and technical expertise. Would you like to know about a specific mentor or see all our mentors?';
    }

    // Learning and resources
    if (lowerInput.includes('course') || lowerInput.includes('learn') || lowerInput.includes('resource')) {
      return 'We offer comprehensive learning resources including:\n- Technical workshops and webinars\n- Skill development programs\n- One-on-one mentoring sessions\n- Online learning materials\n- Industry best practices guides\nVisit our Resources page to access these materials and start your learning journey!';
    }

    // Career guidance
    if (lowerInput.includes('career') || lowerInput.includes('job') || lowerInput.includes('work')) {
      return 'Our career guidance services include:\n- Professional development planning\n- Resume and portfolio review\n- Interview preparation\n- Industry insights and trends\n- Networking opportunities\nWould you like to connect with a mentor to discuss your career goals?';
    }

    // Getting started
    if (lowerInput.includes('start') || lowerInput.includes('begin') || lowerInput.includes('new')) {
      return 'To get started with ElevaTree:\n1. Create your account\n2. Browse our mentor profiles\n3. Schedule a free consultation\n4. Access our learning resources\n5. Begin your growth journey\nWould you like help with any of these steps?';
    }

    // Contact information
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
      return 'You can reach us through:\n- Email: support@elevatree.com\n- Contact form on our website\n- Schedule a call with our team\nWe typically respond within 24 hours to all inquiries.';
    }

    // Default response
    return 'I understand you\'re interested in learning more. Could you please specify what aspect of ElevaTree you\'d like to know about? I can help with information about our mentors, resources, career guidance, or getting started!';
  };

  return (
    <div className="fixed right-0 bottom-0 z-[9999] -mb-8 -mr-8 sm:-mb-12 sm:-mr-12">
      {isOpen ? (
        <div style={{ position: 'absolute', bottom: '80px', right: '20px' }} className="bg-white rounded-2xl shadow-2xl w-[95vw] h-[90vh] flex flex-col overflow-hidden border border-gray-100 sm:w-[600px] sm:h-[600px] sm:right-[100px] sm:bottom-[120px]">
          <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-2xl flex items-center gap-2">
              <span>Chat Support</span>
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="px-6 py-4 border-b border-gray-100">
            <p className="text-gray-600 mb-2 text-base font-medium">Quick Questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(q)}
                  className="px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all duration-200 text-sm border border-gray-100 hover:border-green-200 hover:shadow-md"
                >
                  {q.text}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-6 py-4 text-lg shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : 'bg-gray-50 text-gray-800 border border-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-4 bg-gray-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-6 py-4 text-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-lg font-medium"
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute bottom-[140px] right-[120px] sm:bottom-[240px] sm:right-[190px] bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-4 sm:p-6 w-60 sm:w-72">
            <div className="text-white text-base sm:text-lg font-medium">Hi! I'm ElevaBot. How may I help you? 👋</div>
            <div className="absolute -bottom-2 right-6 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 bg-green-600 transform rotate-45 shadow-lg"></div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 right-0 w-52 h-52 sm:w-80 sm:h-80 hover:opacity-90 transition-opacity bg-transparent p-0 border-0 outline-none focus:outline-none"
          >
            <img
              src={chatbotIcon}
              alt="Chat with us"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      )}
    </div>
  );
};