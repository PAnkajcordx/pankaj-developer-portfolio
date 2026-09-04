import {
  SkillItem,
  ProjectItem,
  EducationItem,
  ContactInfo,
  FormalEducationRecord,
  TechnicalQualificationRecord,
  PracticalTrainingRecord
} from '../types';

export const PROFILE = {
  name: 'Pankaj Chauhan',
  rolePrimary: 'Web Developer',
  roleSecondary: 'Computer Professional & B.A. Graduate',
  avatar: '/profile.png',
  taglineCapsule: 'DEVELOPER PORTFOLIO 2026 // VERIFIED PROFILE',
  statusText: 'ONLINE // OPEN FOR OPPORTUNITIES',
  careerObjective:
    'Motivated B.A. graduate with ITI Fitter, O Level and CCC qualifications. Possesses knowledge of computer applications, MS Office, basic programming and technical operations. Seeking an entry-level Computer, Office Administration, Data Entry, Technical Support or Fitter role to apply skills and grow professionally.',
  heroBio:
    'Motivated B.A. graduate with ITI Fitter, O Level and CCC qualifications. Skilled in web development, computer applications, MS Office, data management, and technical operations.',
  about: {
    badge: 'ARCHITECTURAL MANIFESTO',
    paragraphs: [
      'Hello! My name is Pankaj Chauhan. I am a motivated B.A. graduate, web developer, and computer professional based in Mau, Uttar Pradesh.',
      'I have graduated from Maharaja Suhel Dev University, Azamgarh (68.69%) and completed ITI in Fitter trade from Ramugrah Singh Private ITI with 86.25% (Distinction), along with recognized NIELIT O Level and CCC certifications.',
      'My versatility bridges modern web engineering (HTML5, CSS3, JavaScript, Python) with practical office computing (MS Word, MS Excel, PowerPoint, digital documentation) and mechanical technical operations. I am eager to apply my diverse capabilities in computer administration, technical operations, and software development.'
    ],
    capabilities: [
      'WEB DEVELOPMENT',
      'MS OFFICE & EXCEL',
      'DATA ENTRY & ADMIN',
      'ITI FITTER & WORKSHOP OPS',
      'NIELIT O LEVEL',
      'CCC CERTIFIED',
      'PYTHON PROGRAMMING',
      'DIGITAL DOCUMENTATION'
    ]
  },
  metrics: [
    { label: 'Graduation Degree', value: 'B.A. (68.69%)', colorClass: 'text-[#7bd0ff]' },
    { label: 'Technical ITI Score', value: '86.25%', colorClass: 'text-[#c0c1ff]' },
    { label: 'Location Hub', value: 'Mau, UP', colorClass: 'text-[#ddb7ff]' }
  ]
};

export const SKILLS: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML5',
    subtitle: 'Website Structure',
    category: 'Frontend',
    icon: 'language',
    percentage: 92,
    gradientClass: 'from-[#7bd0ff] to-[#8083ff]',
    glowColor: 'rgba(0,166,224,0.3)'
  },
  {
    id: 'css',
    name: 'CSS3',
    subtitle: 'Website Design & Layout',
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
    subtitle: 'Programming Concepts',
    category: 'Programming',
    icon: 'code',
    percentage: 78,
    gradientClass: 'from-[#b76dff] to-[#8083ff]',
    glowColor: 'rgba(183,109,255,0.3)'
  },
  {
    id: 'ms-word',
    name: 'MS Word',
    subtitle: 'Document Creation & Formatting',
    category: 'Office Tool',
    icon: 'description',
    percentage: 92,
    gradientClass: 'from-[#00a6e0] to-[#7bd0ff]',
    glowColor: 'rgba(59,130,246,0.3)'
  },
  {
    id: 'ms-excel',
    name: 'MS Excel',
    subtitle: 'Data Entry & Spreadsheets',
    category: 'Office Tool',
    icon: 'bar_chart',
    percentage: 88,
    gradientClass: 'from-[#7bd0ff] to-[#c0c1ff]',
    glowColor: 'rgba(16,185,129,0.3)'
  }
];

export const RESUME_COMPUTER_SKILLS = [
  'MS Word',
  'MS Excel',
  'PowerPoint',
  'Internet Applications',
  'Computer Fundamentals',
  'Data Entry',
  'File Management',
  'Basic Programming Concepts',
  'Digital Documentation'
];

export const RESUME_TECHNICAL_SKILLS = [
  'Fitting Tools',
  'Measuring Instruments (Vernier Caliper, Micrometer, Steel Rule)',
  'Workshop Safety',
  'Basic Machine Fitting',
  'Maintenance Operations',
  'Technical Documentation'
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'personal-portfolio',
    projectNumber: 'PROJECT 01',
    categoryTag: 'WEB ECOSYSTEM',
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio website created using HTML, CSS and JavaScript.',
    detailedDescription:
      'Engineered as a high-performance modern showcase with fluid responsiveness, intuitive layout hierarchy, and optimized asset delivery for desktop and mobile viewport environments.',
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
    detailedDescription:
      'An embedded systems hardware and software prototype utilizing ultrasonic distance sensors, microcontrollers, and real-time slot occupancy visualization to eliminate parking congestion.',
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
    description:
      'A 2D car dodge game built with Python and Pygame. Features coins, power-ups, nitro boost, levels, high score and collision effects.',
    detailedDescription:
      'An arcade-style racing survival experience engineered in Python utilizing Pygame frame loops, bounding-box collision detection algorithms, animated sprite sheets, and sound effects.',
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

// Education items for the UI cards
export const EDUCATION: EducationItem[] = [
  {
    id: 'ba-grad',
    title: 'Bachelor of Arts (B.A.)',
    institution: 'Maharaja Suhel Dev University, Azamgarh',
    tag: '2025 • 68.69%',
    tagType: 'year',
    icon: 'school',
    accentClass: 'text-[#c0c1ff] bg-[#8083ff]/10 border-[#8083ff]/20',
    percentage: '68.69%'
  },
  {
    id: 'iti-fitter',
    title: 'ITI - Fitter',
    institution: 'Ramugrah Singh Private ITI',
    tag: '2024 • 86.25%',
    tagType: 'year',
    icon: 'build',
    accentClass: 'text-[#7bd0ff] bg-[#7bd0ff]/10 border-[#7bd0ff]/20',
    percentage: '86.25%'
  },
  {
    id: 'olevel',
    title: 'NIELIT O Level',
    institution: 'NIELIT Computer Certification',
    tag: '2026 • Certified',
    tagType: 'year',
    icon: 'laptop_mac',
    accentClass: 'text-[#ddb7ff] bg-[#b76dff]/10 border-[#b76dff]/20',
    percentage: 'Certified'
  },
  {
    id: 'ccc',
    title: 'CCC (Computer Concepts)',
    institution: 'NIELIT Computer Certification',
    tag: '2024 • Certified',
    tagType: 'year',
    icon: 'desktop_windows',
    accentClass: 'text-[#7bd0ff] bg-[#00a6e0]/10 border-[#00a6e0]/20',
    percentage: 'Certified'
  },
  {
    id: '12th',
    title: '12th / Intermediate',
    institution: 'R.K.H.S.S., Sarai Sadi, Mau',
    tag: '2022 • 60%',
    tagType: 'year',
    icon: 'menu_book',
    accentClass: 'text-[#c0c1ff] bg-[#8083ff]/10 border-[#8083ff]/20',
    percentage: '60%'
  },
  {
    id: '10th',
    title: '10th / High School',
    institution: 'R.K.H.S.S., Sarai Sadi, Mau',
    tag: '2020 • 80%',
    tagType: 'year',
    icon: 'auto_stories',
    accentClass: 'text-[#c7c4d7] bg-[#39393c]/20 border-[#464554]/30',
    percentage: '80%'
  }
];

// Exact formal records from user's official resume
export const FORMAL_EDUCATION_RECORDS: FormalEducationRecord[] = [
  {
    qualification: 'Bachelor of Arts (B.A.)',
    institution: 'Maharaja Suhel Dev University, Azamgarh',
    year: '2025',
    result: '68.69%'
  },
  {
    qualification: '12th / Intermediate',
    institution: 'R.K.H.S.S., Sarai Sadi, Mau',
    year: '2022',
    result: '60%'
  },
  {
    qualification: '10th / High School',
    institution: 'R.K.H.S.S., Sarai Sadi, Mau',
    year: '2020',
    result: '80%'
  }
];

export const TECHNICAL_QUALIFICATIONS_RECORDS: TechnicalQualificationRecord[] = [
  {
    qualification: 'ITI - Fitter',
    institution: 'Ramugrah Singh Private ITI',
    year: '2024',
    result: '86.25%'
  },
  {
    qualification: 'CCC',
    institution: 'NIELIT',
    year: '2024',
    result: 'Certified'
  },
  {
    qualification: 'NIELIT O Level',
    institution: 'NIELIT',
    year: '2026',
    result: 'Certified'
  }
];

export const PRACTICAL_TRAINING_RECORDS: PracticalTrainingRecord[] = [
  {
    title: 'ITI Fitter Practical Training',
    subtitle: 'Mechanical & Precision Engineering Workshop',
    icon: 'handyman',
    tasks: [
      'Performed marking, cutting, drilling, filing and fitting tasks.',
      'Used measuring tools such as vernier caliper, micrometer and steel rule.',
      'Maintained tools and strictly followed workshop safety procedures.'
    ]
  },
  {
    title: 'Computer Applications',
    subtitle: 'Digital Office & Administrative Work',
    icon: 'terminal',
    tasks: [
      'Created documents, spreadsheets and presentations using MS Office (Word, Excel, PowerPoint).',
      'Familiar with digital documentation, email communication and internet-based work.',
      'Applied computer fundamentals, data entry workflows, and basic programming concepts.'
    ]
  }
];

export const STRENGTHS = [
  'Quick learner and adaptable',
  'Hardworking, punctual and responsible',
  'Teamwork and communication',
  'Willing to learn new tools and technologies'
];

export const CONTACT_INFO: ContactInfo = {
  email: 'pankajchauhan2736@gmail.com',
  phone: '+91 7706855166',
  location: 'Mau, Uttar Pradesh, India',
  place: 'Mau, Uttar Pradesh',
  github: 'https://github.com/PAnkajcordx',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com'
};
