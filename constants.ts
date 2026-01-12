import { Teacher, Student, Product, Job } from './types';

export const TEACHERS_DATA: Teacher[] = [
    { 
        id: 1, 
        name: "Hafizur Rahman", 
        gender: 'male',
        institutionType: 'madrasa',
        subject: "Quran & Arabic", 
        location: "Dhaka",
        targetArea: "Mohammadpur, Adabor, Shyamoli",
        teachingMode: 'offline', 
        fee: "5k BDT", 
        mobile: "01700000000",
        isVerified: true,
        experience: "5 Years",
        education: "Kamil (Hadith)",
        about: "Experienced Quran teacher specializing in Tajweed and Hifz. I focus on proper pronunciation and Tarbiyah."
    },
    { 
        id: 2, 
        name: "Abdullah Al Mamun", 
        gender: 'male',
        institutionType: 'university',
        subject: "Math & Physics", 
        location: "Mirpur 10", 
        targetArea: "Mirpur DOHS, Kazipara",
        teachingMode: 'both',
        fee: "6k BDT", 
        mobile: "01800000000",
        experience: "3 Years",
        education: "B.Sc in Physics (DU)",
        about: "I make Physics and Math easy to understand. I can take classes online via Zoom or offline near Mirpur."
    },
    { 
        id: 3, 
        name: "Sumaiya Akter", 
        gender: 'female',
        institutionType: 'university',
        subject: "English Spoken", 
        location: "Uttara", 
        targetArea: "Uttara Sector 1-14",
        teachingMode: 'online',
        fee: "6k BDT", 
        mobile: "01900000000",
        experience: "2 Years",
        education: "BA in English",
        about: "Focus on fluency and pronunciation. Female students only. I take special care of weak students."
    },
    { 
        id: 4, 
        name: "Moulana Ismail", 
        gender: 'male',
        institutionType: 'madrasa',
        subject: "Quran Hifz", 
        location: "Badda", 
        targetArea: "Online Worldwide",
        teachingMode: 'online',
        fee: "3k BDT", 
        mobile: "01600000000",
        experience: "10 Years",
        education: "Dawra-e-Hadith",
        about: "Online Hifz program with flexible timing. Dedicated to teaching Quran with correct Tajweed."
    },
    { 
        id: 5, 
        name: "Rashed Khan", 
        gender: 'male',
        institutionType: 'school',
        subject: "General Science", 
        location: "Farmgate", 
        targetArea: "Farmgate, Tejgaon",
        teachingMode: 'offline',
        fee: "4k BDT", 
        mobile: "01500000000",
        experience: "4 Years",
        education: "B.Ed",
        about: "School teacher with passion for science. I help students understand core concepts easily."
    }
];

export const STUDENTS_DATA: Student[] = [
    { 
        id: 101, 
        name: "Hasan", 
        gender: 'male',
        institutionType: 'school',
        need: "Need Math Teacher", 
        classLevel: "Class 9", 
        budget: "4k BDT", 
        location: "Mohammadpur",
        mobile: "01500000000", 
        teachingModePreference: 'offline',
        daysPerWeek: "3 Days",
        details: "Need a strict teacher for Math. Student is weak in Geometry."
    },
    { 
        id: 102, 
        name: "Riya", 
        gender: 'female',
        institutionType: 'school',
        need: "Need Biology Teacher", 
        classLevel: "HSC 1st", 
        budget: "5k BDT", 
        location: "Dhanmondi",
        mobile: "01300000000", 
        teachingModePreference: 'online',
        daysPerWeek: "4 Days",
        details: "Looking for a female tutor from Medical background ideally."
    }
];

export const PRODUCTS_DATA: Product[] = [
    { id: 1, name: "Organic Honey", price: "৳ 800", icon: "honey", type: 'physical' },
    { id: 2, name: "Premium Dates", price: "৳ 1200", icon: "box", type: 'physical' },
    { id: 3, name: "Atar (Perfume)", price: "৳ 500", icon: "spray", type: 'physical' },
    { id: 4, name: "Panjabi", price: "৳ 1500", icon: "shirt", type: 'physical' }
];

export const DIGITAL_PRODUCTS_DATA: Product[] = [
    { id: 5, name: "Website Theme", price: "$15", icon: "code", type: 'digital' },
    { id: 6, name: "Logo Design", price: "$10", icon: "pen", type: 'digital' }
];

export const JOBS_DATA: Job[] = [
    { 
        id: 1, 
        title: "Video Watch", 
        desc: "Watch 2 mins Islamic video on YouTube", 
        reward: "৳ 5.00",
        category: "YouTube",
        link: "https://youtube.com",
        totalWorkers: 100,
        completedWorkers: 45,
        proofContact: "https://t.me/admin",
        postedBy: 999, // System
        submissions: []
    },
    { 
        id: 2, 
        title: "App Download", 
        desc: "Install Education App from Playstore", 
        reward: "৳ 15.00",
        category: "App",
        link: "https://google.com",
        totalWorkers: 50,
        completedWorkers: 12,
        proofContact: "https://wa.me/8801700000000",
        postedBy: 999,
        submissions: []
    },
    { 
        id: 3, 
        title: "Type Article", 
        desc: "Bangla typing (500 words)", 
        reward: "৳ 50.00",
        category: "Typing",
        link: "https://docs.google.com",
        totalWorkers: 10,
        completedWorkers: 2,
        proofContact: "https://wa.me/8801700000000",
        postedBy: 999,
        submissions: []
    }
];