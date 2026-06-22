/**
 * Watchdog Media — single source of truth.
 * Pages, nav and footer all read from here so links never drift or die.
 *
 * NOTE: People names/bios, award entries and press items below are realistic
 * placeholder content for the client to replace. Production posters + credits
 * come from the supplied key art.
 */

/**
 * Base URL for canonicals, sitemap, OG/Twitter images and JSON-LD.
 * Priority: explicit override (set NEXT_PUBLIC_SITE_URL=https://watchdogmedia.co.za
 * once the domain is live) → the current Vercel production deployment (so previews
 * and *.vercel.app render OG/canonical correctly) → the intended domain as fallback.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://watchdogmedia.co.za');

export const site = {
  name: 'Watchdog Media',
  legalName: 'Watchdog Media (Pty) Limited',
  tagline: 'Corporate-grade reliability. Artist-grade vision.',
  description:
    'Watchdog Media is a Durban-based film production support and creative company telling courageous, craft-driven stories across KwaZulu-Natal — championing women on and off camera.',
  founded: 2016,
  url: SITE_URL,
  email: 'info@watchdogmedia.co.za',
  phone: '+27 (0)31 123 4567',
  phoneHref: '+27311234567',
  address: {
    line1: '17 Howick Drive, Waterfall',
    line2: 'Durban, KwaZulu-Natal',
    line3: 'South Africa, 3652',
  },
  region: 'KwaZulu-Natal, South Africa',
  // Watchdog Media isn't a unique global handle, and Palesa is the brand —
  // so these are the founder's personal, verified profiles.
  socials: [
    { label: 'Instagram', handle: '@palesalebona', href: 'https://www.instagram.com/palesalebona/', icon: 'instagram' },
    { label: 'Vimeo', handle: 'Palesa Lebona', href: 'https://vimeo.com/palesalebona', icon: 'vimeo' },
    { label: 'LinkedIn', handle: 'Palesa Lebona', href: 'https://www.linkedin.com/in/palesalebona/', icon: 'linkedin' },
    { label: 'X', handle: '@mspalesalebona', href: 'https://x.com/mspalesalebona', icon: 'x' },
    { label: 'IMDb', handle: 'Palesa Lebona', href: 'https://www.imdb.com/name/nm6586690/', icon: 'imdb' },
  ],
} as const;

export const nav = [
  { label: 'Work', href: '/productions' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'People', href: '/people' },
  { label: 'Awards & Press', href: '/awards' },
  { label: 'Contact', href: '/contact' },
] as const;

export const stats = [
  { value: '9+', label: 'Years on KZN sets' },
  { value: '40+', label: 'Productions supported' },
  { value: '60%', label: 'Women-led departments' },
  { value: '12', label: 'Festival selections' },
] as const;

export const values = [
  {
    title: 'Empowerment',
    body: 'We build pathways for women and underrepresented crew — in the chair, behind the lens, at the table.',
  },
  {
    title: 'Integrity',
    body: 'Clear contracts, honest budgets, consent-first storytelling. The reliable partner on a hard schedule.',
  },
  {
    title: 'Craft',
    body: 'Cinematic instinct backed by rigorous process. We obsess over the frame and the logistics behind it.',
  },
  {
    title: 'Partnership',
    body: 'Local knowledge that makes a foreign crew feel at home and a domestic crew feel unstoppable.',
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export interface Service {
  slug: string;
  index: string;
  title: string;
  icon: string;
  summary: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: 'production-support',
    index: '01',
    title: 'Production Support',
    icon: 'clapperboard',
    summary:
      'End-to-end logistics for local and international shoots — the calm operational spine beneath your creative.',
    deliverables: [
      'Needs analysis: schedule, budget, scope',
      'Bespoke support packages per production',
      'On-set management through wrap',
      'Permits, compliance & risk',
    ],
  },
  {
    slug: 'location-support',
    index: '02',
    title: 'Location Support',
    icon: 'map-pin',
    summary:
      'KwaZulu-Natal is our backyard. Scouting, access and fixing across Durban, the Midlands and the coast.',
    deliverables: [
      'Location scouting & recces',
      'Owner negotiation & access',
      'Municipal & landowner permits',
      'Local crew, transport & accommodation',
    ],
  },
  {
    slug: 'directing',
    index: '03',
    title: 'Directing Services',
    icon: 'megaphone',
    summary:
      'Auteur-grade direction across documentary, narrative and branded work — vision delivered on a corporate clock.',
    deliverables: [
      'Director & 2nd unit attachment',
      'Treatment & visual development',
      'Documentary & narrative direction',
      'Branded & commercial films',
    ],
  },
  {
    slug: 'key-crew',
    index: '04',
    title: 'Key Crew Services',
    icon: 'users',
    summary:
      'Vetted heads of department who know the craft and the territory, ready to plug into your team on day one.',
    deliverables: [
      'DPs, ACs & camera teams',
      'Production & line producers',
      'Art, wardrobe & make-up',
      'Sound, grip & electric',
    ],
  },
  {
    slug: 'creative',
    index: '05',
    title: 'Creative Services',
    icon: 'camera',
    summary:
      'Concept to delivery for stories we develop ourselves — animation, documentary, short film and series.',
    deliverables: [
      'Development & packaging',
      'Production & post supervision',
      'Animation & motion',
      'Festival & distribution strategy',
    ],
  },
];

/* The "spans across" formats from the original site, kept as real content */
export const formats = [
  { title: 'Live Action', note: 'Shorts & features' },
  { title: 'Documentaries', note: 'Shorts & features' },
  { title: 'Skills Shows', note: 'Cooking, DIY & lifestyle' },
  { title: 'Branded Films', note: 'Commercial & corporate' },
] as const;

/* -------------------------------------------------------------------------- */
/* Productions                                                                 */
/* -------------------------------------------------------------------------- */

export interface Production {
  slug: string;
  title: string;
  category: string;
  year: string;
  logline: string;
  credit: string;
  role: string;
  poster: string;
  accent: string;
  meta: string;
}

export const productions: Production[] = [
  {
    slug: 'medunsa',
    title: 'Medunsa',
    category: 'Documentary',
    year: '2024',
    logline:
      "An evocative cinematic journey into South Africa's medical legacy and the campus that shaped a generation of healers.",
    credit: 'A film by Siyabonga Luthuli',
    role: 'Production support · Location services',
    poster: '/images/prod-medunsa.jpg',
    accent: '#f0a83c',
    meta: 'In cinemas 2024',
  },
  {
    slug: 'alignment',
    title: 'Alignment',
    category: 'Drama Series',
    year: '2024',
    logline:
      'Every connection has a consequence. A propulsive ensemble drama where ambition and intimacy collide.',
    credit: 'Created by Jessica Chen & David Lee',
    role: 'Key crew · Directing services',
    poster: '/images/prod-alignment.jpg',
    accent: '#ec008c',
    meta: 'Netflix · HBO Max · Apple TV+',
  },
  {
    slug: 'cream',
    title: 'Cream',
    category: 'Short Film',
    year: '2023',
    logline:
      'Mystery, obsession and the things we keep in the dark. A noir-tinged portrait of desire and its undoing.',
    credit: 'A film by Eliza Vance',
    role: 'Creative services · Production support',
    poster: '/images/prod-cream.jpg',
    accent: '#cfc7b6',
    meta: 'Festival circuit 2023',
  },
  {
    slug: 'taste-buds',
    title: 'Taste Buds',
    category: 'Animation',
    year: '2023',
    logline:
      'A feast of food and friendship. Sweet, Sour, Salty and Bitter learn the recipe for getting along.',
    credit: 'A Watchdog Media animation',
    role: 'Development · Animation · Post',
    poster: '/images/prod-tastebuds.png',
    accent: '#ffb13b',
    meta: 'Family · All ages',
  },
];

/* -------------------------------------------------------------------------- */
/* Films — the founder's public Vimeo work (vimeo.com/palesalebona)             */
/* -------------------------------------------------------------------------- */

export interface Film {
  title: string;
  kind: string;
  year: string;
  duration: string;
  durationISO: string;
  uploadDate: string;
  url: string;
  thumb: string;
}

export const films: Film[] = [
  { title: 'Palesa Lebona — Reel', kind: 'Showreel', year: '2017', duration: '1:36', durationISO: 'PT1M36S', uploadDate: '2017-10-14', url: 'https://vimeo.com/238169091', thumb: '/images/films/238169091.jpg' },
  { title: 'Women in the Film Industry', kind: 'Documentary', year: '2020', duration: '2:53', durationISO: 'PT2M53S', uploadDate: '2020-07-03', url: 'https://vimeo.com/435063913', thumb: '/images/films/435063913.jpg' },
  { title: 'Cream', kind: 'Short film · Trailer', year: '2017', duration: '0:37', durationISO: 'PT37S', uploadDate: '2017-02-04', url: 'https://vimeo.com/202574564', thumb: '/images/films/202574564.jpg' },
  { title: 'Slumber Party', kind: 'Trailer', year: '2019', duration: '0:45', durationISO: 'PT45S', uploadDate: '2019-03-18', url: 'https://vimeo.com/325045987', thumb: '/images/films/325045987.jpg' },
  { title: 'Holier than Thou', kind: 'Short film', year: '2016', duration: '4:13', durationISO: 'PT4M13S', uploadDate: '2016-01-19', url: 'https://vimeo.com/152372312', thumb: '/images/films/152372312.jpg' },
  { title: 'Bun in the Oven', kind: 'Music video', year: '2014', duration: '4:20', durationISO: 'PT4M20S', uploadDate: '2014-02-20', url: 'https://vimeo.com/87222835', thumb: '/images/films/87222835.jpg' },
];

/* -------------------------------------------------------------------------- */
/* Founder                                                                     */
/* -------------------------------------------------------------------------- */

export const founder = {
  name: 'Palesa Lebona',
  role: 'Founder · Director · Producer',
  initials: 'PL',
  photo: '/images/palesa-lebona.jpg',
  short:
    'A director, producer and writer telling stories that provoke thought and spark dialogue about the human issues we too often overlook.',
  bio: [
    'Palesa Lebona founded Watchdog Media to tell courageous, craft-driven stories — work that entertains, but also provokes thought and drives dialogue about the human issues society tends to overlook.',
    'A South African director, producer and writer, she earned an MFA in Filmmaking from the New York Film Academy — graduating with honours — alongside a BCom in Marketing and a postgraduate qualification in logistics. It is a rare blend of artist-grade vision and corporate-grade rigour, and it shapes the way Watchdog works.',
    'In 2024 she was selected for the Durban FilmMart with Taste Buds, and she remains a vocal champion of women in film — on and off the camera.',
  ],
  socials: [
    { label: 'Vimeo', href: 'https://vimeo.com/palesalebona' },
    { label: 'IMDb', href: 'https://www.imdb.com/name/nm6586690/' },
    { label: 'Instagram', href: 'https://www.instagram.com/palesalebona/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/palesalebona/' },
    { label: 'X', href: 'https://x.com/mspalesalebona' },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* People                                                                      */
/* -------------------------------------------------------------------------- */

export interface Person {
  name: string;
  role: string;
  focus: string;
  bio: string;
  initials: string;
}

export const people: Person[] = [
  {
    name: 'Zamani Khumalo',
    role: 'Head of Operations',
    focus: 'Logistics · Business',
    initials: 'ZK',
    bio: "The industrial engineer behind Watchdog's operational backbone — budgets, logistics and the systems that keep a shoot, and a business, running on time. Palesa's partner on set and at home.",
  },
  {
    name: 'Sipho Mahlangu',
    role: 'Technology & Strategy',
    focus: 'Digital · Systems',
    initials: 'SM',
    bio: "The multi-hyphenate who builds the platforms, sharpens the strategy and quietly saves the day — turning the vision into working systems and the odd impossible deadline. Family, not just crew.",
  },
];

/* -------------------------------------------------------------------------- */
/* Awards & Press                                                              */
/* -------------------------------------------------------------------------- */

export interface Award {
  title: string;
  event: string;
  year: string;
  project: string;
  result: string;
}

export const awards: Award[] = [
  {
    title: 'Best Documentary Feature',
    event: 'Durban International Film Festival',
    year: '2024',
    project: 'Medunsa',
    result: 'Winner',
  },
  {
    title: 'Outstanding Production Support',
    event: 'KZN Film Commission Awards',
    year: '2023',
    project: 'Multiple productions',
    result: 'Winner',
  },
  {
    title: 'Women in Film Excellence',
    event: 'African Cinema Awards',
    year: '2023',
    project: 'Cream',
    result: 'Winner',
  },
  {
    title: 'Excellence in Animation',
    event: 'South African Film & TV Awards',
    year: '2023',
    project: 'Taste Buds',
    result: 'Nominee',
  },
];

export interface Press {
  title: string;
  publication: string;
  date: string;
  type: string;
  href: string;
}

export const press: Press[] = [
  {
    title: 'How Watchdog Media is rewriting the rules of KZN film support',
    publication: 'Film & TV Weekly',
    date: 'March 2024',
    type: 'Feature',
    href: '#',
  },
  {
    title: 'Supporting international productions on the South African coast',
    publication: 'Production Africa',
    date: 'January 2024',
    type: 'Industry',
    href: '#',
  },
  {
    title: 'Empowering women behind the camera, one call sheet at a time',
    publication: 'Creative Industry Review',
    date: 'November 2023',
    type: 'Cover Story',
    href: '#',
  },
];

/* -------------------------------------------------------------------------- */
/* Footer link groups (all resolve to real routes/anchors)                     */
/* -------------------------------------------------------------------------- */

export const footerNav = {
  work: productions.map((p) => ({
    label: p.title,
    href: `/productions#${p.slug}`,
  })),
  services: services.map((s) => ({
    label: s.title,
    href: `/services#${s.slug}`,
  })),
  company: [
    { label: 'About', href: '/about' },
    { label: 'People', href: '/people' },
    { label: 'Awards & Press', href: '/awards' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
} as const;
