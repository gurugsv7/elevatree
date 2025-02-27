import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

const GEMINI_API_KEY = 'AIzaSyB6N7OH97FpEvAm403ep4wunT_3t8m4b7I';

// Initialize the Google AI instance
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Get the Gemini 1.5 Flash model with optimized settings
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro-latest',
  generationConfig: {
    temperature: 0.7,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  }
}) as GenerativeModel;

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