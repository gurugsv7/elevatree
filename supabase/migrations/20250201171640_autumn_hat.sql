/*
  # ElevaTree Initial Schema

  1. New Tables
    - `profiles`
      - Extended user profile information
      - Linked to auth.users
      - Stores user preferences and profile data
    
    - `mentors`
      - Mentor profiles and expertise
      - Tracks availability and specializations
    
    - `career_paths`
      - Available career paths and industries
      - Contains detailed information about each career option
    
    - `resources`
      - Educational content and career resources
      - Blogs, guides, and success stories
    
    - `mentorship_sessions`
      - Tracks mentorship meetings between users and mentors
      - Stores session details and feedback
    
    - `user_career_progress`
      - Tracks user's career development journey
      - Stores goals and achievements

  2. Security
    - RLS enabled on all tables
    - Policies for authenticated access
    - Specific mentor access policies
*/

-- Profiles table for extended user information
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  bio text,
  avatar_url text,
  current_role text,
  education_level text,
  interests text[],
  skills text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Mentors table for professional mentors
CREATE TABLE mentors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  specializations text[],
  years_of_experience integer,
  company text,
  linkedin_url text,
  hourly_rate decimal,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Career paths and industries
CREATE TABLE career_paths (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  required_skills text[],
  education_requirements text[],
  salary_range jsonb,
  industry text,
  growth_potential text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Educational resources and content
CREATE TABLE resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  type text NOT NULL CHECK (type IN ('blog', 'success_story', 'guide', 'webinar')),
  author_id uuid REFERENCES auth.users(id),
  tags text[],
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Mentorship sessions
CREATE TABLE mentorship_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id uuid REFERENCES mentors(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  scheduled_at timestamptz NOT NULL,
  duration interval NOT NULL,
  status text DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
  notes text,
  feedback_rating integer CHECK (feedback_rating BETWEEN 1 AND 5),
  feedback_comment text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User career progress tracking
CREATE TABLE user_career_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  career_path_id uuid REFERENCES career_paths(id),
  current_stage text,
  goals jsonb,
  achievements jsonb,
  next_steps text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_career_progress ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Mentors policies
CREATE POLICY "Public can view active mentors"
  ON mentors FOR SELECT
  TO authenticated
  USING (is_available = true);

CREATE POLICY "Mentors can update their own profile"
  ON mentors FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Career paths policies
CREATE POLICY "Public can view career paths"
  ON career_paths FOR SELECT
  TO authenticated
  USING (true);

-- Resources policies
CREATE POLICY "Public can view published resources"
  ON resources FOR SELECT
  TO authenticated
  USING (true);

-- Mentorship sessions policies
CREATE POLICY "Users can view their sessions"
  ON mentorship_sessions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR mentor_id IN (
    SELECT id FROM mentors WHERE user_id = auth.uid()
  ));

-- User career progress policies
CREATE POLICY "Users can view their career progress"
  ON user_career_progress FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can update their career progress"
  ON user_career_progress FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());