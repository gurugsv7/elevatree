import { useState, useRef, useEffect } from 'react';
import chatbotIcon from '../assets/chatbot bg.png';
import { getGeminiResponse } from '../services/gemini';
import { getMentorInfo, getContextualResponse, websitePages, buildMentorPrompt, mentorsInfo } from '../services/mentors';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  reference?: string;
}

interface QuickQuestion {
  text: string;
  prompt: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi! How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
     prompt: 'Describe what ElevaTree is, its mission, and how it helps students in their career growth'
   },
   {
     text: 'Who are your mentors?',
     prompt: 'Who are the mentors at ElevaTree and what makes them unique in helping students?'
   },
   {
     text: 'How does mentoring work?',
     prompt: 'Explain the mentoring process at ElevaTree and how students can benefit from it'
   },
   {
     text: 'What resources are available?',
     prompt: 'Detail the learning resources, materials, and support available at ElevaTree'
   }
  ];

  const buildPromptWithContext = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Check for mentor-specific questions
    const mentorNames = Object.keys(mentorsInfo);
    const mentionedMentor = mentorNames.find(name => lowerInput.includes(name));
    
    if (mentionedMentor) {
      const mentorInfo = getMentorInfo(mentionedMentor);
      if (mentorInfo) {
        return buildMentorPrompt(mentorInfo, input);
      }
    }

    // Check for specific topics that need website references
    const contextualResponse = getContextualResponse(lowerInput);
    if (contextualResponse.text) {
      return `As ElevaBot, provide information about ElevaTree's ${lowerInput}. Include these details: "${contextualResponse.text}". Add this reference: "For more details, visit ${contextualResponse.reference}"`;
    }

    // Default context
    return `You are ElevaBot, a helpful assistant for ElevaTree - a career growth platform that connects aspiring professionals with experienced mentors. 
    
    Guidelines for your response:
    1. Be clear and conversational
    2. Focus on ElevaTree's services, mentors, and resources
    3. If the topic is unrelated to career guidance or education, politely redirect to relevant career topics
    4. Keep responses concise but informative
    5. Include relevant website references when appropriate
    
    Address this query: ${input}`;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = { text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const prompt = buildPromptWithContext(inputText);
      const response = await getGeminiResponse(prompt);
      
      // Extract reference if present in the response
      const referenceMatch = response.match(/For more details, visit (\/[a-zA-Z-]+)/);
      const reference = referenceMatch ? referenceMatch[1] : undefined;
      
      const botResponse: Message = {
        text: response.replace(/For more details, visit \/[a-zA-Z-]+/, '').trim(),
        sender: 'bot',
        reference
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = async (question: QuickQuestion) => {
    const userMessage: Message = { text: question.text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const prompt = buildPromptWithContext(question.prompt);
      const response = await getGeminiResponse(prompt);
      
      // Extract reference if present
      const referenceMatch = response.match(/For more details, visit (\/[a-zA-Z-]+)/);
      const reference = referenceMatch ? referenceMatch[1] : undefined;
      
      const botResponse: Message = {
        text: response.replace(/For more details, visit \/[a-zA-Z-]+/, '').trim(),
        sender: 'bot',
        reference
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-0 bottom-0 z-[9999] -mb-8 -mr-4 sm:-mb-12 sm:-mr-12">
      {isOpen ? (
        <div style={{ position: 'absolute', bottom: '60px', right: '20px' }} className="bg-white rounded-2xl shadow-2xl w-[85vw] h-[70vh] flex flex-col overflow-hidden border border-gray-100 sm:w-[600px] sm:h-[600px] sm:right-[100px] sm:bottom-[120px]">
          <div className="p-4 sm:p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-2xl flex justify-between items-center">
           <h3 className="font-semibold text-lg sm:text-2xl flex items-center gap-2">
             <span>Chat Support</span>
             <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-300 rounded-full animate-pulse"></span>
           </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
           <p className="text-gray-600 mb-2 text-sm sm:text-base font-medium">Quick Questions:</p>
           <div className="flex flex-wrap gap-1.5 sm:gap-2">
             {quickQuestions.map((q, index) => (
               <button
                 key={index}
                 onClick={() => handleQuickQuestion(q)}
                 className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all duration-200 text-xs sm:text-sm border border-gray-100 hover:border-green-200 hover:shadow-md"
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
                  className={`max-w-[85%] rounded-2xl px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : 'bg-gray-50 text-gray-800 border border-gray-100'
                  }`}
                >
                  {message.text}
                  {message.reference && (
                    <a
                      href={message.reference}
                      className="block mt-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-50 text-gray-800 border border-gray-100 max-w-[85%] rounded-2xl px-6 py-4 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-3 sm:p-4 bg-gray-50">
            <div className="flex gap-2 sm:gap-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-lg font-medium ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute bottom-[140px] right-[100px] sm:bottom-[240px] sm:right-[190px] bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-4 sm:p-6 w-60 sm:w-72">
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