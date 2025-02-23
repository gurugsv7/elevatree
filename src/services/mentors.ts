interface MentorInfo {
  name: string;
  role: string;
  education: string;
  background: string[];
  expertise: string[];
  profilePath: string;
  additionalInfo?: string;
}

export const mentorsInfo: Record<string, MentorInfo> = {
  hemasree: {
    name: "Hemasree",
    role: "Mentor at ElevaTree",
    education: "B.Tech Information Technology",
    background: [
      "Transformed from being an average student who struggled with mathematics to becoming proficient in technology",
      "Developed strong problem-solving skills through dedicated practice",
      "Turned her biggest challenge (mathematics) into her strength"
    ],
    expertise: [
      "Information Technology",
      "Mathematics",
      "Academic Growth",
      "Student Mentoring"
    ],
    profilePath: "/mentors/hemasree"
  },
  nesapriyan: {
    name: "Nesapriyan",
    role: "Mentor at ElevaTree",
    education: "B.Tech AI & Machine Learning",
    background: [
      "Overcame personal challenges and career uncertainty to find his passion in technology",
      "Balances technical education with a passion for music production",
      "Successfully transitioned his career path into AI and Machine Learning"
    ],
    expertise: [
      "AI & Machine Learning",
      "Music Production",
      "Career Transition",
      "Student Mentoring"
    ],
    profilePath: "/mentors/nesapriyan"
  },
  "joy rechal": {
    name: "Joy Rechal",
    role: "Mentor at ElevaTree",
    education: "B.Tech Information Technology",
    background: [
      "Successfully transitioned from Biology to Information Technology",
      "Cleared NEET on first attempt through self-study",
      "Brings unique perspective from interdisciplinary background"
    ],
    expertise: [
      "Information Technology",
      "Career Transition",
      "Self-Study Strategies",
      "Student Mentoring"
    ],
    profilePath: "/mentors/joy-rechal"
  }
};

export const websitePages = {
  mentors: "/mentors",
  resources: "/resources",
  getStarted: "/get-started",
  contactUs: "/contact"
};

interface PageInfo {
  path: string;
  description: string;
}

const pageInfo: Record<string, PageInfo> = {
  resources: {
    path: websitePages.resources,
    description: "Access our comprehensive learning resources including career development workshops, technical training sessions, and project-based learning materials."
  },
  mentors: {
    path: websitePages.mentors,
    description: "Meet our experienced mentors who provide personalized guidance and support in your career journey."
  },
  getStarted: {
    path: websitePages.getStarted,
    description: "Start your growth journey by exploring mentor profiles and booking your first consultation."
  },
  contact: {
    path: websitePages.contactUs,
    description: "Get in touch with us for any questions or support you need."
  }
};

export const getContextualResponse = (topic: string): { text: string; reference?: string } => {
  const lowerTopic = topic.toLowerCase();
  for (const [key, info] of Object.entries(pageInfo)) {
    if (lowerTopic.includes(key)) {
      return {
        text: info.description,
        reference: info.path
      };
    }
  }
  return { text: "" };
};

export const formatMentorResponse = (mentor: MentorInfo): string => {
  return `
Name: ${mentor.name}
Role: ${mentor.role}
Education: ${mentor.education}

Background:
${mentor.background.map(point => `- ${point}`).join('\n')}

Expertise:
${mentor.expertise.map(skill => `- ${skill}`).join('\n')}

Additional Information: You can learn more about ${mentor.name} at ${mentor.profilePath}
`.trim();
};

export const getMentorInfo = (mentorName: string): MentorInfo | undefined => {
  const normalizedName = mentorName.toLowerCase();
  return mentorsInfo[normalizedName];
};

export const buildMentorPrompt = (mentorInfo: MentorInfo, query: string): string => {
  return `
You are ElevaBot, responding about ${mentorInfo.name}, a mentor at ElevaTree.

Use this information to provide a natural, conversational response:

${formatMentorResponse(mentorInfo)}

Important:
1. DO NOT include any asterisks (*) in your response
2. Keep the response conversational and engaging
3. Include relevant details based on the specific query
4. Always mention how to learn more at the mentor's profile page
5. Focus on aspects most relevant to the user's query

Query: ${query}
`.trim();
};