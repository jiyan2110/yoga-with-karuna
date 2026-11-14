/**
 * All site copy and contact details live here.
 * To add Karuna's photos later: put the files in src/assets/ and import them
 * below (see `instructor.photo` and `gallery`). Sections that need a photo
 * fall back to a designed card until one is added — no placeholder text is shown.
 */
import type { ImageMetadata } from 'astro';
// Class photos: free Pexels licence (commercial use allowed, no credit needed). pexels.com/license
import regularYogaPhoto from '../assets/classes/regular-yoga.jpg'; // pexels.com/photo/29720736
import faceYogaPhoto from '../assets/classes/face-yoga.jpg'; // pexels.com/photo/8076106
import meditationPhoto from '../assets/classes/meditation.jpg'; // pexels.com/photo/4498220

export interface NavLink {
  label: string;
  href: string;
}

export type ClassTheme = 'plum' | 'rose' | 'indigo';

export interface ClassOffering {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  level: string;
  time: string;
  days: string;
  /** Day indexes the class runs on, Monday = 0 … Saturday = 5 */
  dayIndexes: number[];
  description: string;
  benefits: string[];
  theme: ClassTheme;
  /** Background photo for the 'photo' card style. */
  photo?: { src: ImageMetadata; alt: string; position?: string };
}

/** How the coloured top of each class card looks: 'light' (softer colour) or 'photo' (picture behind the text). */
export type ClassCardStyle = 'light' | 'photo';

/** Layout of the facts beside Karuna's bio (see AboutHighlights.astro). */
export type AboutHighlightStyle = 'tiles' | 'strip' | 'columns';

export interface Testimonial {
  id: string;
  studentName: string;
  classJoined: string;
  duration: string;
  reviewText: string;
}

export interface HeroCopy {
  headline: { lead: string; emphasis: string };
  intro: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const siteConfig = {
  url: 'https://yoga-with-karuna.vercel.app',

  brand: {
    name: 'Yoga With Karuna',
    sanskrit: 'अहमस्मि योधः',
    sanskritMeaning: 'I am a warrior',
    tagline: "Where a warrior's spirit meets a yogi's wisdom",
    mantra: ['Breathe', 'Believe', 'Become'],
    audience: 'Live online yoga · For women only',
  },

  hero: {
    /** Big headline: `lead` in ink, `emphasis` in plum italics. */
    headline: { lead: 'Rise like a warrior,', emphasis: 'glow like a yogi' },
    greeting: 'Namaskaram, beautiful souls',
    intro:
      'From regular yoga to face yoga and meditation, every class helps you grow stronger inside and out. Women only, live with Karuna.',
    support:
      'Through yoga, breathwork and mindful movement, we help women build a strong body, a calmer mind and a deeper connection with themselves.',
  },

  instructor: {
    name: 'Karuna',
    title: 'Yoga Alliance (USA) certified yoga teacher',
    experienceYears: '4+',
    studentsGuided: '300+',
    /** Set to an imported image (e.g. `import karuna from '../assets/karuna.jpg'`) once available. */
    photo: undefined as ImageMetadata | undefined,
    bioParagraphs: [
      'With over 4 years of teaching experience and more than 300 people guided through yoga, I am passionate about making traditional wellness practice accessible to every woman.',
      "As a Yoga Alliance certified teacher and a Kalaripayattu practitioner, I bring together the grace of yoga and the discipline of India's ancient martial art.",
      'My mission is simple: to help women become stronger, healthier, happier and more connected to themselves.',
    ],
    /** Short facts beside the bio. `icon` picks the symbol in the purple box; `badge` shows text instead. */
    highlights: [
      { icon: 'award', title: 'Yoga Alliance (USA)', detail: 'Certified yoga teacher' },
      { icon: 'kalari', title: 'Kalaripayattu', detail: "Practitioner of India's ancient martial art", short: "India's ancient martial art" },
      { icon: 'users', badge: '300+', title: 'Students guided', detail: 'Over 4+ years of teaching', short: 'Over 4+ years' },
      { icon: 'heart', title: 'Fitness, corporate & events', detail: 'Strength, workplace and event sessions', short: 'Workplace and event sessions' },
    ] as { icon: 'award' | 'kalari' | 'users' | 'heart'; badge?: string; title: string; detail: string; short?: string }[],
    credentials: [
      { code: 'RYT 200', name: 'Registered Yoga Teacher', hours: '200' },
      { code: 'CYT 500', name: 'Certified Yoga Teacher', hours: '500' },
      { code: 'YACEP', name: 'Face Yoga Teacher', hours: '30' },
    ],
  },

  /** Add imported images here to show a photo strip in the About section. */
  gallery: [] as { src: ImageMetadata; alt: string }[],

  contact: {
    phoneDisplay: '+91 96628 72510',
    phoneE164: '+919662872510',
    email: 'karuna.yoga22@gmail.com',
    whatsappDigits: '919662872510',
    defaultDraft: 'Hi Karuna, I am interested in joining your online yoga classes. Could you share the details?',
  },

  social: {
    instagram: 'https://www.instagram.com/yoga_with_karuna',
    facebook: 'https://www.facebook.com/share/17TBweDcYX/',
  },

  seo: {
    title: 'Yoga With Karuna | Live Online Yoga Classes for Women',
    description:
      'Women-only live online yoga with Yoga Alliance certified teacher Karuna. Regular yoga, face yoga and meditation classes on Google Meet / Zoom, Monday to Saturday (IST).',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Stories', href: '#stories' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],

  classCardStyle: 'photo' as ClassCardStyle,
  aboutHighlightStyle: 'columns' as AboutHighlightStyle,

  schedule: {
    timezone: 'IST (UTC+5:30)',
    platform: 'Google Meet / Zoom',
  },

  classes: [
    {
      id: 'regular-yoga',
      name: 'Regular Yoga Class',
      shortName: 'Regular Yoga',
      tagline: 'Strength, flexibility and balance',
      level: 'Beginner to intermediate',
      time: '6:30 – 7:30 PM',
      days: 'Monday to Friday',
      dayIndexes: [0, 1, 2, 3, 4],
      description: 'A supportive daily practice to build strength, flexibility, balance and body awareness.',
      benefits: [
        'Improved flexibility & strength',
        'Better posture & balance',
        'Stress relief & relaxation',
        'Weight management support',
      ],
      theme: 'plum',
      photo: { src: regularYogaPhoto, alt: 'Women practising yoga together in a sunlit studio', position: '50% 50%' },
    },
    {
      id: 'face-yoga',
      name: 'Face Yoga Class',
      shortName: 'Face Yoga',
      tagline: 'Healthy face, healthy mind',
      level: 'Women of all ages',
      time: '9:00 – 10:00 PM',
      days: 'Monday, Wednesday & Friday',
      dayIndexes: [0, 2, 4],
      description: 'Targeted facial exercises and massage for a natural glow and better circulation.',
      benefits: [
        'Natural glow & radiance',
        'Toned facial muscles',
        'Improved blood circulation',
        'Youthful appearance',
      ],
      theme: 'rose',
      photo: { src: faceYogaPhoto, alt: 'A woman doing facial exercises', position: '50% 20%' },
    },
    {
      id: 'meditation-yoga',
      name: 'Meditation Class',
      shortName: 'Meditation',
      tagline: 'Calm mind, restful sleep',
      level: 'All levels',
      time: '9:00 – 10:00 PM',
      days: 'Tuesday, Thursday & Saturday',
      dayIndexes: [1, 3, 5],
      description: 'Breathwork and guided meditation for deep relaxation, mindfulness and emotional balance.',
      benefits: [
        'Mental calmness & clarity',
        'Better sleep quality',
        'Reduced anxiety & stress',
        'Emotional healing & balance',
      ],
      theme: 'indigo',
      photo: { src: meditationPhoto, alt: 'A woman meditating in lotus pose on a mat', position: '50% 50%' },
    },
  ] satisfies ClassOffering[] as ClassOffering[],

  steps: [
    { title: 'Message on WhatsApp', detail: 'Tell Karuna which class interests you. She will share fees and batch availability.' },
    { title: 'Get your class link', detail: 'Receive the Google Meet / Zoom link and a few tips to set up your space.' },
    { title: 'Join live from home', detail: 'Roll out your mat and practise live with personal guidance on your posture.' },
  ],

  // TODO(client): replace with real, consented reviews (screenshots with names blurred work well).
  testimonials: [
    {
      id: 'rev-1',
      studentName: 'Priya P.',
      classJoined: 'Regular Yoga',
      duration: '8 months',
      reviewText:
        "Karuna's classes have eased the lower back stiffness I got from sitting at a desk all day. Videos never corrected my posture, but her personal attention makes all the difference.",
    },
    {
      id: 'rev-2',
      studentName: 'Sneha D.',
      classJoined: 'Face Yoga',
      duration: '6 months',
      reviewText:
        'The energy in the live sessions is wonderful. I have found a natural glow and a calm in my evenings I did not expect.',
    },
  ] satisfies Testimonial[] as Testimonial[],

  faqs: [
    {
      question: 'I have never done yoga. Can I join?',
      answer:
        'Yes. The Regular Yoga class is designed for beginners to intermediate students, and Face Yoga and Meditation are open to all levels. Karuna adjusts each posture to your body.',
    },
    {
      question: 'What do I need for an online class?',
      answer:
        'A yoga mat, comfortable clothes, a quiet corner and a phone or laptop with Google Meet / Zoom. Place your camera so Karuna can see your full body for posture corrections.',
    },
    {
      question: 'Are the classes women only?',
      answer: 'Yes. Every batch is exclusively for women, so you can practise in a safe, comfortable and supportive space.',
    },
    {
      question: 'Which time zone are the timings in?',
      answer:
        'All timings are in Indian Standard Time (IST, UTC+5:30). If you live abroad, message Karuna and she will help you find a batch that suits your time zone.',
    },
    {
      question: 'What are the fees?',
      answer: 'Fees depend on the class and plan you choose. Message Karuna on WhatsApp for the current fees and batch availability.',
    },
  ] satisfies Faq[] as Faq[],
};

export function whatsappLink(message: string = siteConfig.contact.defaultDraft): string {
  return `https://wa.me/${siteConfig.contact.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
