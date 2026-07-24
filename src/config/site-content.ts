export interface NavLink {
  label: string;
  href: string;
}

export interface Credential {
  title: string;
  issuer: string;
}

export interface ClassOffering {
  id: string;
  name: string;
  level: string;
  timing: string;
  days: string;
  description: string;
  benefits: string[];
  formLink: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  locality: string; 
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
    subTagline: string;
  };
  social: {
    instagram: string;
    facebook: string;
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
    title: "US Alliance (Yoga Alliance) Certified Yoga Teacher",
    experienceYears: "4+",
    bioParagraphs: [
      "In a world that expects women to be everything for everyone, it's easy to forget yourself. Yoga With Karuna is a sanctuary created exclusively for women—a space where you can pause, breathe, heal, and reconnect with your true self.",
      "Rooted in the timeless wisdom of India's ancient Rishi tradition and inspired by the harmony and mindfulness of Eastern cultures, our classes are designed to nurture not only the body but also the mind and soul.",
      "My mission is to help women become stronger, healthier, happier, and more connected to themselves."
    ],
    credentials: [
      { title: "US Alliance Certified", issuer: "Yoga Alliance" },
      { title: "Online Yoga Classes", issuer: "Global Women's Community" },
      { title: "Gym & Fitness Training", issuer: "Physical Conditioning" },
      { title: "Corporate Sessions", issuer: "Workplace Harmony" }
    ]
  },
  brand: {
    name: "Yoga With Karuna",
    tagline: "अहमस्मि योद्धा",
    subTagline: "Awaken the Warrior Within. Embrace the Peace Within.",
  },
  social: {
    instagram: "https://www.instagram.com/yoga_with_karuna",
    facebook: "https://www.facebook.com/share/17TBweDcYX/"
  },
  whatsapp: {
    phoneDigits: "919662872510",
    defaultDraft: "Hi Karuna, I am interested in joining your online yoga sanctuary.",
  },
  seo: {
    title: "Yoga With Karuna | Women-Only Online Sanctuary",
    description: "A sanctuary exclusively for women. Join Certified Yoga Teacher Karuna for live online Hatha, Ashtanga, and Meditation classes.",
  },
  nav: [
    { label: "About Karuna", href: "#authority" },
    { label: "Online Classes", href: "#offerings" },
    { label: "Student Stories", href: "#reviews" },
  ],
  classes: [
    {
      id: "regular-batch",
      name: "Regular Yoga Batch",
      level: "Beginners to Intermediate",
      timing: "6:30 PM – 7:30 PM",
      days: "Monday to Friday",
      description: "Build strength, flexibility, balance, and body awareness in a supportive daily practice.",
      benefits: [
        "Improved Flexibility & Strength",
        "Better Posture & Balance",
        "Stress Relief & Relaxation",
        "Weight Management Support"
      ],
      formLink: "https://docs.google.com/forms/..." 
    },
    {
      id: "meditation-yoga",
      name: "Meditation Yoga",
      level: "All Levels",
      timing: "Check Schedule",
      days: "Tuesday, Thursday & Saturday",
      description: "Experience deep relaxation, mindfulness, and emotional balance with focused meditation.",
      benefits: [
        "Mental Calmness & Clarity",
        "Better Sleep Quality",
        "Reduced Anxiety & Stress",
        "Emotional Healing & Balance"
      ],
      formLink: "https://docs.google.com/forms/..."
    },
    {
      id: "face-yoga",
      name: "Face Yoga",
      level: "Women of All Ages",
      timing: "Check Schedule",
      days: "Monday, Wednesday & Friday",
      description: "Natural glow and radiance through targeted facial muscle toning and improved circulation.",
      benefits: [
        "Natural Glow & Radiance",
        "Toned Facial Muscles",
        "Improved Blood Circulation",
        "Youthful Appearance"
      ],
      formLink: "https://docs.google.com/forms/..."
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      studentName: "Priya Patel",
      locality: "Online Student",
      batchJoined: "Regular Yoga Batch",
      monthsPracticing: "8 Months",
      reviewText: "Practicing under Karuna has completely cured my lower back stiffness from sitting at a desk all day. Online videos never corrected my posture, but Karuna's personal attention makes all the difference."
    },
    {
      id: "rev-2",
      studentName: "Dr. Amit Shah",
      locality: "Online Student",
      batchJoined: "Meditation Yoga",
      monthsPracticing: "1 Year",
      reviewText: "I truly appreciate how scientifically Karuna approaches mental alignment. Learning from her gives you confidence that you are in the safest hands possible."
    },
    {
      id: "rev-3",
      studentName: "Sneha Desai",
      locality: "Online Student",
      batchJoined: "Face Yoga",
      monthsPracticing: "6 Months",
      reviewText: "The energy in the live sessions is incredible, and I have found a natural glow and flexibility I never dreamed I could have."
    }
  ]
};