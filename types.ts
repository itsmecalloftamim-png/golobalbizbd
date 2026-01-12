export type UserRole = 'teacher' | 'student';

export type TeachingMode = 'online' | 'offline' | 'both';

export interface Teacher {
    id: number;
    name: string;
    gender: 'male' | 'female';
    institutionType: 'madrasa' | 'school' | 'university';
    subject: string;
    location: string;
    targetArea: string; // New: Where they will go to teach
    teachingMode: TeachingMode; // New: Online/Offline
    fee: string;
    mobile: string;
    experience?: string;
    education?: string;
    about?: string;
    isVerified?: boolean;
}

export interface Student {
    id: number;
    name: string;
    gender: 'male' | 'female';
    institutionType?: 'madrasa' | 'school' | 'university'; // To match icon style if needed
    need: string;
    classLevel: string;
    budget: string;
    mobile: string;
    location: string;
    teachingModePreference: TeachingMode; // New
    daysPerWeek?: string;
    details?: string; // New: More details
}

export interface Product {
    id: number;
    name: string;
    price: string;
    icon: string;
    type: 'physical' | 'digital';
}

export interface JobSubmission {
    id: number;
    workerName: string;
    status: 'pending' | 'approved' | 'rejected';
    timestamp: string;
}

export interface Job {
    id: number;
    title: string;
    desc: string;
    reward: string;
    category: string;
    link: string;
    totalWorkers: number;
    completedWorkers: number;
    proofContact: string; // WhatsApp or Telegram link/username
    postedBy: number; // User ID
    submissions: JobSubmission[];
}

export type ViewState = 'login' | 'signup' | 'home' | 'tuition' | 'shop' | 'digital' | 'microjob' | 'create-job' | 'job-detail' | 'job-history' | 'profile' | 'biodata' | 'profile-detail';