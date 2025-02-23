import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = 'AIzaSyB6N7OH97FpEvAm403ep4wunT_3t8m4b7I';

// Initialize the Google AI instance
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Get the Gemini Pro model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return 'I apologize, but I encountered an error. Please try again later.';
  }
};