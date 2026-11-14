/**
 * Photo gallery: the groups shown on /gallery and the five photos in the homepage preview.
 * To add a photo: put it in src/assets/gallery/, import it below and add it to a group.
 * `alt` is read aloud by screen readers; it is not shown on the page.
 */
import type { ImageMetadata } from 'astro';

import bakasana from '../assets/gallery/bakasana-crow-pose.jpg';
import corporatePlank from '../assets/gallery/corporate-session-plank.jpg';
import onlineYogaDay1 from '../assets/gallery/online-yoga-day-1.jpg';
import onlineYogaDay2 from '../assets/gallery/online-yoga-day-2.jpg';
import onlineWarrior1 from '../assets/gallery/online-my-warrior-1.jpg';
import onlineWarrior2 from '../assets/gallery/online-my-warrior-2.jpg';
import onlineKeepItUp1 from '../assets/gallery/online-keep-it-up-1.jpg';
import onlineKeepItUp2 from '../assets/gallery/online-keep-it-up-2.jpg';
import onlinePranayama from '../assets/gallery/online-pranayama.jpg';
import onlineShivanand from '../assets/gallery/online-shivanand-yoga.jpg';
import yd2025Standing from '../assets/gallery/yoga-day-2025-standing.jpg';
import yd2025Seated from '../assets/gallery/yoga-day-2025-seated.jpg';
import ydHallStretch from '../assets/gallery/yoga-day-hall-stretch.jpg';
import yd2025Group from '../assets/gallery/yoga-day-2025-group.jpg';
import yd2026Stage from '../assets/gallery/yoga-day-2026-stage.jpg';
import ydHallLunge from '../assets/gallery/yoga-day-hall-lunge.jpg';
import lawnSession from '../assets/gallery/community-lawn-session.jpg';
import lawnSession2 from '../assets/gallery/community-lawn-session-2.jpg';
import workshopCertificates from '../assets/gallery/workshop-certificates.jpg';
import yd2026Guests from '../assets/gallery/yoga-day-2026-guests.jpg';
import yd2026Felicitation from '../assets/gallery/yoga-day-2026-felicitation.jpg';

export interface GalleryPhoto {
  src: ImageMetadata;
  alt: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  photos: GalleryPhoto[];
}

export const galleryGroups: GalleryGroup[] = [
  {
    id: 'international-yoga-day',
    title: 'International Yoga Day',
    photos: [
      { src: ydHallLunge, alt: 'A full hall of participants in white T-shirts doing a low lunge on their mats' },
      { src: yd2025Group, alt: 'Group photo with participants after the International Yoga Day 2025 session' },
      { src: yd2025Standing, alt: 'Participants standing on mats in a lecture hall facing the International Yoga Day 2025 screen' },
      { src: ydHallStretch, alt: 'Rows of participants stretching forward on colourful mats in a large hall' },
      { src: yd2025Seated, alt: 'Participants seated on mats doing a twist during the International Yoga Day 2025 session' },
      { src: yd2026Stage, alt: 'Speakers on stage at an International Yoga Day 2026 event on yoga for healthy ageing' },
      { src: yd2026Guests, alt: 'Three women smiling together in front of the International Yoga Day 2026 banner' },
      { src: yd2026Felicitation, alt: 'A guest being felicitated with a gift at the International Yoga Day 2026 event' },
    ],
  },
  {
    id: 'corporate-community',
    title: 'Corporate & community sessions',
    photos: [
      { src: lawnSession, alt: 'A large group doing yoga outdoors on a lawn with hands in prayer position' },
      { src: corporatePlank, alt: 'Participants holding a plank on mats during a workplace yoga session' },
      { src: workshopCertificates, alt: 'Workshop participants holding their certificates in a group photo' },
      { src: lawnSession2, alt: 'An outdoor community yoga session on a lawn at dawn' },
    ],
  },
  {
    id: 'online-classes',
    title: 'Live online classes',
    photos: [
      { src: bakasana, alt: 'Bakasana, crow pose, balanced on the hands on a blue mat' },
      { src: onlinePranayama, alt: 'Collage of students practising pranayama at home in a live online class' },
      { src: onlineYogaDay1, alt: 'Collage of students doing partner yoga poses for an online International Yoga Day celebration' },
      { src: onlineYogaDay2, alt: 'Collage of students in backbends and group poses during an online celebration' },
      { src: onlineWarrior1, alt: 'Collage of students in group stretches and camel pose' },
      { src: onlineWarrior2, alt: 'Collage of students forming arches and group poses together' },
      { src: onlineKeepItUp1, alt: 'Collage of students in tree pose and balancing poses' },
      { src: onlineKeepItUp2, alt: 'Collage of students practising bridge and shoulder stand from home on a video call' },
      { src: onlineShivanand, alt: 'Video-call screenshot of students in a Shivanand yoga breathing session' },
    ],
  },
];

/** The five photos in the homepage preview: one large, then four small. */
export const galleryPreview: GalleryPhoto[] = [
  galleryGroups[0].photos[0], // hall full of participants in a lunge
  galleryGroups[2].photos[0], // bakasana
  galleryGroups[1].photos[0], // outdoor lawn session
  galleryGroups[2].photos[1], // pranayama collage
  galleryGroups[0].photos[1], // group photo
];

export const galleryCount = galleryGroups.reduce((n, g) => n + g.photos.length, 0);
