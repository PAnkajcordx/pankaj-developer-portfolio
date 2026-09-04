import { SkillItem, ProjectItem, EducationItem, ContactInfo } from '../types';

export const PROFILE = {
  name: 'Pankaj Chauhan',
  rolePrimary: 'Web Developer',
  roleSecondary: 'Computer Professional',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8DG5D6KtdbPjm4hUsHcH5jS2Q5qcVK4Xr1wBd029QGbIiFu1DOn-pk9FHw2QVhGxVBF7MEodBk8g4dmk7i1XjkaeKQwK-gOMw2g5DKf85_6sHzeoSOjMCpEi3-TJ4fJSr49LrzV_16UXIi4bMlPicCpFF9Va7I2Taz-9wi2DyWnaJHuJEPr892UImNpD2LLRuxJhTFMaiuxDfeH1AbdvlFJ-Bfgev4ahHRCv0yQoAt73SSx4OXEUz',
  taglineCapsule: 'DEVELOPER PORTFOLIO 2026 // NEXT-GEN WEB',
  statusText: 'ONLINE // FOR HIRE',
  heroBio: 'I am a passionate computer professional who loves learning new technologies and creating useful websites.',
  about: {
    badge: 'ARCHITECTURAL MANIFESTO',
    paragraphs: [
      'Hello! My name is Pankaj Chauhan. I am a computer professional who is interested in web development and technology.',
      'I have completed my Graduation and have also completed ITI, O Level and CCC. I am continuously improving my technical and communication skills.',
      'My goal is to build a successful career in the IT field and create useful and professional web applications.'
    ],
    capabilities: [
      'WEB DEVELOPMENT',
      'RESPONSIVE DESIGN',
      'IOT SYSTEMS',
      'PYTHON APPLICATIONS'
    ]
  },
  metrics: [
    { label: 'Core Projects', value: '3+', colorClass: 'text-[#7bd0ff]' },
    { label: 'Focus Scope', value: 'Full Stack', colorClass: 'text-[#c0c1ff]' },
    { label: 'Location Hub', value: 'UP, India', colorClass: 'text-[#ddb7ff]' }
  ]
};

export const SKILLS: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    subtitle: 'Website Structure',
    category: 'Frontend',
    icon: 'language',
    percentage: 92,
    gradientClass: 'from-[#7bd0ff] to-[#8083ff]',
    glowColor: 'rgba(0,166,224,0.3)'
  },
  {
    id: 'css',
    name: 'CSS',
    subtitle: 'Website Design',
    category: 'Frontend',
    icon: 'palette',
    percentage: 88,
    gradientClass: 'from-[#8083ff] to-[#b76dff]',
    glowColor: 'rgba(192,193,255,0.3)'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    subtitle: 'Website Interaction',
    category: 'Programming',
    icon: 'bolt',
    percentage: 80,
    gradientClass: 'from-[#7bd0ff] to-[#8083ff]',
    glowColor: 'rgba(234,179,8,0.3)'
  },
  {
    id: 'python',
    name: 'Python',
    subtitle: 'Programming',
    category: 'Programming',
    icon: 'code',
    percentage: 78,
    gradientClass: 'from-[#b76dff] to-[#8083ff]',
    glowColor: 'rgba(183,109,255,0.3)'
  },
  {
    id: 'ms-word',
    name: 'MS Word',
    subtitle: 'Document Creation',
    category: 'Office Tool',
    icon: 'description',
    percentage: 90,
    gradientClass: 'from-[#00a6e0] to-[#7bd0ff]',
    glowColor: 'rgba(59,130,246,0.3)'
  },
  {
    id: 'ms-excel',
    name: 'MS Excel',
    subtitle: 'Data & Spreadsheet',
    category: 'Office Tool',
    icon: 'bar_chart',
    percentage: 85,
    gradientClass: 'from-[#7bd0ff] to-[#c0c1ff]',
    glowColor: 'rgba(16,185,129,0.3)'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'personal-portfolio',
    projectNumber: 'PROJECT 01',
    categoryTag: 'WEB ECOSYSTEM',
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio website created using HTML, CSS and JavaScript.',
    detailedDescription: 'Engineered as a high-performance modern showcase with fluid responsiveness, intuitive layout hierarchy, and optimized asset delivery for desktop and mobile viewport environments.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'language',
    accentColor: '#7bd0ff',
    liveUrl: 'https://PAnkajcordx.github.io/personal-portfolio/',
    features: [
      'Clean structural semantic HTML5 markup',
      'Custom modern CSS layout with responsive media queries',
      'Interactive animations and DOM event handling',
      'Fast loading and cross-browser verified'
    ]
  },
  {
    id: 'smart-parking',
    projectNumber: 'PROJECT 02',
    categoryTag: 'EMBEDDED IOT',
    title: 'Smart Parking System',
    description: 'An IoT-based smart parking project using Arduino and sensors to detect parking spaces.',
    detailedDescription: 'An embedded systems hardware and software prototype utilizing ultrasonic distance sensors, microcontrollers, and real-time slot occupancy visualization to eliminate parking congestion.',
    tags: ['Arduino', 'IoT', 'Sensors'],
    icon: 'directions_car',
    accentColor: '#c0c1ff',
    liveUrl: 'https://PAnkajcordx.github.io/smart-parking-system/',
    githubUrl: 'https://github.com/PAnkajcordx/smart-parking-system',
    features: [
      'Ultrasonic distance sensors for slot occupancy detection',
      'Arduino microcontroller logic and threshold calibration',
      'Web-connected real-time status display dashboard',
      'Automated LED barrier indicators and telemetry'
    ]
  },
  {
    id: 'highway-car-dodge',
    projectNumber: 'PROJECT 03',
    categoryTag: '2D GAME ENGINE',
    title: 'Highway Car Dodge Game',
    description: 'A 2D car dodge game built with Python and Pygame. Features coins, power-ups, nitro boost, levels, high score and collision effects.',
    detailedDescription: 'An arcade-style racing survival experience engineered in Python utilizing Pygame frame loops, bounding-box collision detection algorithms, animated sprite sheets, and sound effects.',
    tags: ['Python', 'Pygame'],
    icon: 'sports_esports',
    accentColor: '#ddb7ff',
    githubUrl: 'https://github.com/PAnkajcordx/highway-car-dodge-game',
    features: [
      'Interactive vehicle physics with smooth keyboard controls',
      'Coin collecting mechanics and progressive score scaling',
      'Nitro booster power-ups and speed curve modifiers',
      'High-score persistence and collision detection physics'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'grad',
    title: 'Graduation',
    institution: 'Azamgarh University',
    tag: '2024',
    tagType: 'year',
    icon: 'school',
    accentClass: 'text-[#c0c1ff] bg-[#8083ff]/10 border-[#8083ff]/20'
  },
  {
    id: 'iti',
    title: 'ITI - Fitter',
    institution: 'Industrial Training Institute',
    tag: 'Vocational',
    tagType: 'type',
    icon: 'build',
    accentClass: 'text-[#7bd0ff] bg-[#7bd0ff]/10 border-[#7bd0ff]/20'
  },
  {
    id: 'olevel',
    title: 'O Level',
    institution: 'NIELIT Computer Course',
    tag: 'NIELIT',
    tagType: 'type',
    icon: 'laptop_mac',
    accentClass: 'text-[#ddb7ff] bg-[#b76dff]/10 border-[#b76dff]/20'
  },
  {
    id: 'ccc',
    title: 'CCC',
    institution: 'Course on Computer Concepts',
    tag: 'Certificate',
    tagType: 'type',
    icon: 'desktop_windows',
    accentClass: 'text-[#7bd0ff] bg-[#00a6e0]/10 border-[#00a6e0]/20'
  },
  {
    id: '12th',
    title: '12th',
    institution: 'Higher Secondary Education',
    tag: 'High School',
    tagType: 'type',
    icon: 'menu_book',
    accentClass: 'text-[#c0c1ff] bg-[#8083ff]/10 border-[#8083ff]/20'
  },
  {
    id: '10th',
    title: '10th',
    institution: 'Secondary Education',
    tag: 'Secondary',
    tagType: 'type',
    icon: 'auto_stories',
    accentClass: 'text-[#c7c4d7] bg-[#39393c]/20 border-[#464554]/30'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'pankajchauhan2736@gmail.com',
  phone: '+91 7706855166',
  location: 'Uttar Pradesh, India',
  github: 'https://github.com/PAnkajcordx',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com'
};
