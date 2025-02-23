import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    
    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }));
    
    return userCredential;
  } catch (error: any) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

export const register = async (email: string, password: string, fullName: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Update the user profile with full name
    await updateProfile(user, {
      displayName: fullName
    });

    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: fullName
    }));

    return userCredential;
  } catch (error: any) {
    console.error('Registration failed:', error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    // Clear all user-related data from localStorage
    localStorage.removeItem('user');
    // Remove any profile data
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.uid) {
      localStorage.removeItem(`profile_${user.uid}`);
    }
  } catch (error: any) {
    console.error('Logout failed:', error.message);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const { user } = userCredential;

    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }));

    return userCredential;
  } catch (error: any) {
    console.error('Google sign in failed:', error.message);
    throw error;
  }
};
