export interface NavLink {
  label: string;
  href: string;
}

export interface Credential {
  title: string;
  issuer: string;
  year?: string;
}

export interface ClassOffering {
  id: string;
  name: string;
  level: string;
  timing: string;
  days: string;
  description: string;
  benefits: string[];
  whatsappDraft: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  locality: string; // Hyper-local proof (e.g., Vallabh Vidyanagar, Mota Bazaar)
  batchJoined: string;
  reviewText: string;
  monthsPracticing: string;
}

export interface SiteConfig {
  instructor: {
    name: string;
    title: string;
    experienceYears: string;
    bioParagraphs: string[];
    credentials: Credential[];
  };
  brand: {
    name: string;
    tagline: string;
  };
  location: {
    city: string;
    region: string;
    country: string;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    googleMapsEmbedUrl: string;
  };
  whatsapp: {
    phoneDigits: string;
    defaultDraft: string;
  };
  seo: {
    title: string;
    description: string;
  };
  nav: NavLink[];
  classes: ClassOffering[];
  testimonials: Testimonial[];
}

export const siteConfig: SiteConfig = {
  instructor: {
    name: "Karuna",
    title: "8x World Record Breaker & Lead Yoga Acharya",
    experienceYears: "12+",
    bioParagraphs: [
      "Yoga is not about touching your toes; it is about what you learn on the way down. For over 12 years, I have dedicated my life to mastering and teaching the traditional, unadulterated sciences of Hatha and Ashtanga Yoga.",
      "Having achieved 8 World Records in advanced yogic postures and sustained physical endurance, my mission now is bringing this profound physical and mental discipline back to our local community in Anand. In an era dominated by impersonal online fitness videos, I firmly believe that true transformation happens in person—through direct observation, physical breath alignment, and personalized corrections."
    ],
    credentials: [
      { title: "8x World Record Holder", issuer: "International Yogic Endurance & Posture" },
      { title: "Lead Yoga Acharya (500-Hr RYT)", issuer: "Traditional Hatha Lineage" },
      { title: "Certified Advanced Alignment Specialist", issuer: "National Yoga Therapy Board" },
      { title: "12+ Years Offline Studio Training", issuer: "Over 2,500+ Local Students Guided" }
    ]
  },
  brand: {
    name: "Yoga with Karuna",
    tagline: "Traditional Hatha & Ashtanga for Modern Living",
  },
  location: {
    city: "Anand",
    region: "Gujarat",
    country: "India",
    addressLine1: "2nd Floor, Harmony Wellness Hub",
    addressLine2: "Near Town Hall, AV Road",
    landmark: "Above HDFC Bank, Anand",
    // Standard embed pointing to Anand, Gujarat (Replace with her exact studio pin URL later)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58980.08204847363!2d72.92383832168944!3d22.556012497672224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },
  whatsapp: {
    phoneDigits: "917045355862",
    defaultDraft: "Hi Karuna, I visited your website and would like to inquire about your upcoming yoga batches in Anand.",
  },
  seo: {
    title: "Yoga with Karuna | Best Offline Yoga Classes in Anand",
    description: "Transform your physical health and mental clarity with Anand's 8x World Record Breaking yoga instructor. Join daily morning & evening offline studio batches.",
  },
  nav: [
    { label: "About Karuna", href: "#authority" },
    { label: "Class Batches", href: "#offerings" },
    { label: "Student Stories", href: "#reviews" },
    { label: "Studio Location", href: "#location" },
  ],
  classes: [
    {
      id: "morning-hatha",
      name: "Traditional Hatha Morning Batch",
      level: "Beginner & Intermediate",
      timing: "6:00 AM – 7:15 AM",
      days: "Monday to Friday",
      description: "Start your day grounded. Focused on classical physical postures (Asanas), deep pranayama breathing, and metabolic awakening.",
      benefits: [
        "Improves joint mobility and spine health",
        "Regulates cortisol and mental anxiety",
        "Builds foundational core strength"
      ],
      whatsappDraft: "Hi Karuna, I am interested in joining the Traditional Hatha Morning Batch (6:00 AM – 7:15 AM). Are slots available for this month?"
    },
    {
      id: "evening-ashtanga",
      name: "Dynamic Ashtanga Evening Batch",
      level: "Intermediate & Advanced",
      timing: "6:00 PM – 7:15 PM",
      days: "Monday to Friday",
      description: "An energetic, flow-based physical sequence designed to purge daily workplace stress, build cardiovascular stamina, and tone muscles.",
      benefits: [
        "High-calorie burn & cardiovascular endurance",
        "Deep muscular release after work hours",
        "Enhanced mental focus and balance"
      ],
      whatsappDraft: "Hi Karuna, I am interested in joining the Dynamic Ashtanga Evening Batch (6:00 PM – 7:15 PM). Could you share enrollment details?"
    },
    {
      id: "personal-therapy",
      name: "1-on-1 Personalized Alignment & Therapy",
      level: "All Levels & Special Needs",
      timing: "Flexible Slots by Appointment",
      days: "Monday to Saturday",
      description: "Tailored private offline coaching specifically engineered for individuals dealing with chronic back pain, cervical issues, or stiff joints.",
      benefits: [
        "100% undivided instructor attention",
        "Customized posture modifications",
        "Safe recovery and posture rehabilitation"
      ],
      whatsappDraft: "Hi Karuna, I would like to inquire about 1-on-1 Personal Yoga Therapy sessions in Anand. Can we discuss my physical health requirements?"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      studentName: "Priya Patel",
      locality: "Vallabh Vidyanagar",
      batchJoined: "Morning Hatha Batch",
      monthsPracticing: "8 Months",
      reviewText: "Practicing offline under Karuna has completely cured my lower back stiffness from sitting at a desk all day. Online videos never corrected my posture, but Karuna's personal attention makes all the difference."
    },
    {
      id: "rev-2",
      studentName: "Dr. Amit Shah",
      locality: "AV Road, Anand",
      batchJoined: "Personal Therapy",
      monthsPracticing: "1 Year",
      reviewText: "As a practicing physician, I truly appreciate how scientifically Karuna approaches physical alignment. Learning from a World Record breaker gives you confidence that you are in the safest hands possible."
    },
    {
      id: "rev-3",
      studentName: "Sneha Desai",
      locality: "Mota Bazaar",
      batchJoined: "Evening Ashtanga Batch",
      monthsPracticing: "6 Months",
      reviewText: "The evening Ashtanga batch is the highlight of my weekday! The energy in the studio is incredible, and I have lost 6 KGs while gaining flexibility I never dreamed I could have."
    }
  ]
};