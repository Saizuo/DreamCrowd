export interface Company {
  id: string;
  name: string;
  logo: string;
  shortIntro: string;
  fullIntro: string;
  category: string;
  tags: string[];
  fundingGoal: number;
  currentFunding: number;
  backers: number;
  daysLeft: number;
  featured: boolean;
  trending: boolean;
  popular: boolean;
  createdAt: string;
  coverImage: string;
  founderName: string;
  founderTitle: string;
  founderImage: string;
  vision: string;
  goals: string[];
  team: {
    name: string;
    role: string;
    image: string;
    bio: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    content: string;
    image: string;
  }[];
  location: string;
  website: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "Revolutionary solar panel technology that's 40% more efficient than traditional panels.",
    fullIntro: "EcoTech Solutions is pioneering the next generation of solar energy technology. Our breakthrough photovoltaic cells achieve 40% higher efficiency rates than conventional panels while reducing manufacturing costs by 25%. We're on a mission to make clean energy accessible to everyone.",
    category: "Sustainability",
    tags: ["CleanTech", "Solar", "Energy", "Innovation"],
    fundingGoal: 2500000,
    currentFunding: 1850000,
    backers: 234,
    daysLeft: 23,
    featured: true,
    trending: true,
    popular: true,
    createdAt: "2024-01-15",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Sarah Chen",
    founderTitle: "CEO & Co-Founder",
    founderImage: "/api/placeholder/150/150",
    vision: "To accelerate the world's transition to sustainable energy by making solar technology more efficient and affordable than ever before.",
    goals: [
      "Scale production to 100,000 units annually",
      "Establish partnerships with major retailers",
      "Expand to European markets",
      "Launch residential installation program"
    ],
    team: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        image: "/api/placeholder/100/100",
        bio: "Former Tesla engineer with 10+ years in renewable energy. PhD in Materials Science from MIT."
      },
      {
        name: "Marcus Rodriguez",
        role: "CTO",
        image: "/api/placeholder/100/100",
        bio: "Solar technology expert with 15+ years experience. Previously led R&D at SunPower."
      },
      {
        name: "Emily Watson",
        role: "Head of Operations",
        image: "/api/placeholder/100/100",
        bio: "Operations leader with experience scaling manufacturing from 0 to $100M revenue."
      }
    ],
    testimonials: [
      {
        name: "David Kim",
        role: "Early Investor",
        content: "EcoTech's technology is game-changing. The efficiency gains are real and the team executes flawlessly.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "Lisa Park",
        role: "Beta Customer",
        content: "We've seen 40% reduction in energy costs since installing EcoTech panels. Amazing product!",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "San Francisco, CA",
    website: "https://ecotech-solutions.com",
    socialLinks: {
      twitter: "https://twitter.com/ecotechsol",
      linkedin: "https://linkedin.com/company/ecotech-solutions"
    }
  },
  {
    id: "2",
    name: "HealthAI Diagnostics",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "AI-powered medical diagnosis platform that helps doctors identify diseases 3x faster.",
    fullIntro: "HealthAI Diagnostics is revolutionizing healthcare with our AI-powered diagnostic platform. Our machine learning algorithms analyze medical images and patient data to assist doctors in making faster, more accurate diagnoses. We've achieved 95% accuracy in early-stage cancer detection.",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Diagnostics", "MedTech"],
    fundingGoal: 5000000,
    currentFunding: 3200000,
    backers: 187,
    daysLeft: 45,
    featured: true,
    trending: true,
    popular: false,
    createdAt: "2024-02-01",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Dr. Marcus Rodriguez",
    founderTitle: "CEO & Chief Medical Officer",
    founderImage: "/api/placeholder/150/150",
    vision: "To democratize access to world-class medical diagnostics through AI, saving lives and reducing healthcare costs globally.",
    goals: [
      "FDA approval for primary care applications",
      "Partnership with 50+ hospitals",
      "Expand to radiology and pathology",
      "Launch consumer health app"
    ],
    team: [
      {
        name: "Dr. Marcus Rodriguez",
        role: "CEO & Chief Medical Officer",
        image: "/api/placeholder/100/100",
        bio: "Radiologist with 20+ years experience. Former head of AI research at Mayo Clinic."
      },
      {
        name: "Jennifer Liu",
        role: "Head of AI",
        image: "/api/placeholder/100/100",
        bio: "AI researcher with PhD from Stanford. Previously led computer vision at Google Health."
      },
      {
        name: "Robert Chen",
        role: "VP of Engineering",
        image: "/api/placeholder/100/100",
        bio: "Software engineering leader with experience building scalable healthcare platforms."
      }
    ],
    testimonials: [
      {
        name: "Dr. Amanda Foster",
        role: "Oncologist",
        content: "HealthAI has transformed our diagnostic workflow. We're catching cancers earlier than ever before.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "Michael Thompson",
        role: "Hospital Administrator",
        content: "The efficiency gains are remarkable. Our diagnostic accuracy has improved by 30%.",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "Boston, MA",
    website: "https://healthai-diagnostics.com",
    socialLinks: {
      twitter: "https://twitter.com/healthai",
      linkedin: "https://linkedin.com/company/healthai-diagnostics"
    }
  },
  {
    id: "3",
    name: "ArchSpace Design",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "Sustainable architecture firm creating carbon-neutral buildings with innovative design.",
    fullIntro: "ArchSpace Design is reimagining architecture for the climate era. We specialize in carbon-neutral buildings that combine cutting-edge sustainability technology with beautiful, functional design. Our projects reduce energy consumption by 60% while creating inspiring spaces for people to live and work.",
    category: "Architecture",
    tags: ["Architecture", "Sustainable", "Design", "GreenBuilding"],
    fundingGoal: 1500000,
    currentFunding: 890000,
    backers: 156,
    daysLeft: 32,
    featured: false,
    trending: false,
    popular: true,
    createdAt: "2024-01-20",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Emma Wilson",
    founderTitle: "Principal Architect",
    founderImage: "/api/placeholder/150/150",
    vision: "To prove that sustainable architecture can be both beautiful and profitable, inspiring a new generation of climate-conscious buildings.",
    goals: [
      "Complete 10 carbon-neutral projects",
      "Develop prefab housing line",
      "Open second studio in Austin",
      "Launch architect training program"
    ],
    team: [
      {
        name: "Emma Wilson",
        role: "Principal Architect",
        image: "/api/placeholder/100/100",
        bio: "Award-winning architect with 15+ years experience. LEED Platinum certified designer."
      },
      {
        name: "James Park",
        role: "Sustainability Director",
        image: "/api/placeholder/100/100",
        bio: "Environmental engineer specializing in building systems and renewable energy integration."
      },
      {
        name: "Sofia Garcia",
        role: "Design Director",
        image: "/api/placeholder/100/100",
        bio: "Interior designer focused on biophilic design and sustainable materials."
      }
    ],
    testimonials: [
      {
        name: "Tech Startup CEO",
        role: "Client",
        content: "ArchSpace designed our headquarters. It's beautiful, sustainable, and our team loves working there.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "City Planning Director",
        role: "Municipal Partner",
        content: "ArchSpace's designs are setting new standards for sustainable development in our city.",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "Seattle, WA",
    website: "https://archspace-design.com",
    socialLinks: {
      twitter: "https://twitter.com/archspace",
      linkedin: "https://linkedin.com/company/archspace-design"
    }
  },
  {
    id: "4",
    name: "TechFlow Analytics",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "Real-time data analytics platform helping businesses make smarter decisions faster.",
    fullIntro: "TechFlow Analytics provides enterprise-grade data analytics that processes billions of data points in real-time. Our platform helps companies identify trends, predict outcomes, and optimize operations with unprecedented speed and accuracy.",
    category: "Technology",
    tags: ["Analytics", "BigData", "SaaS", "Enterprise"],
    fundingGoal: 3000000,
    currentFunding: 2100000,
    backers: 89,
    daysLeft: 18,
    featured: true,
    trending: true,
    popular: true,
    createdAt: "2024-02-10",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Alex Kim",
    founderTitle: "CEO & Co-Founder",
    founderImage: "/api/placeholder/150/150",
    vision: "To democratize advanced analytics and make data-driven decision making accessible to every business.",
    goals: [
      "Reach 1000+ enterprise customers",
      "Launch AI-powered insights feature",
      "Expand to European markets",
      "Build industry-specific solutions"
    ],
    team: [
      {
        name: "Alex Kim",
        role: "CEO & Co-Founder",
        image: "/api/placeholder/100/100",
        bio: "Former data scientist at Google. Expert in machine learning and distributed systems."
      },
      {
        name: "Rachel Thompson",
        role: "CTO",
        image: "/api/placeholder/100/100",
        bio: "Software architect with 12+ years building scalable data platforms at Netflix and Uber."
      },
      {
        name: "David Martinez",
        role: "Head of Product",
        image: "/api/placeholder/100/100",
        bio: "Product leader with experience launching data products used by millions of users."
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Fortune 500 CFO",
        content: "TechFlow's analytics helped us identify $50M in cost savings within the first quarter.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "Mike Chen",
        role: "Data Director",
        content: "The real-time insights are game-changing. We can now react to market changes instantly.",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "Austin, TX",
    website: "https://techflow-analytics.com",
    socialLinks: {
      twitter: "https://twitter.com/techflow",
      linkedin: "https://linkedin.com/company/techflow-analytics"
    }
  },
  {
    id: "5",
    name: "EduTech Learning",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "Personalized learning platform using AI to adapt to each student's learning style.",
    fullIntro: "EduTech Learning is transforming education with our AI-powered personalized learning platform. Our system adapts to each student's unique learning style, pace, and interests, improving learning outcomes by 40% compared to traditional methods.",
    category: "Education",
    tags: ["EdTech", "AI", "Learning", "Education"],
    fundingGoal: 2000000,
    currentFunding: 1200000,
    backers: 312,
    daysLeft: 28,
    featured: false,
    trending: true,
    popular: false,
    createdAt: "2024-01-25",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Dr. Lisa Park",
    founderTitle: "CEO & Founder",
    founderImage: "/api/placeholder/150/150",
    vision: "To personalize education for every student, unlocking human potential through adaptive learning technology.",
    goals: [
      "Reach 100,000 active students",
      "Partner with 500+ schools",
      "Launch parent dashboard",
      "Develop VR learning modules"
    ],
    team: [
      {
        name: "Dr. Lisa Park",
        role: "CEO & Founder",
        image: "/api/placeholder/100/100",
        bio: "Former Stanford education professor with PhD in Learning Sciences. 20+ years in education."
      },
      {
        name: "Kevin Wong",
        role: "Head of AI",
        image: "/api/placeholder/100/100",
        bio: "AI researcher specializing in natural language processing and adaptive learning systems."
      },
      {
        name: "Maria Santos",
        role: "Head of Curriculum",
        image: "/api/placeholder/100/100",
        bio: "Curriculum designer with experience creating engaging educational content for K-12."
      }
    ],
    testimonials: [
      {
        name: "Principal Johnson",
        role: "Elementary School",
        content: "Our students' test scores improved by 35% after implementing EduTech's platform.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "Parent Review",
        role: "Mother of 3",
        content: "My kids actually look forward to learning now. The platform makes education fun and engaging.",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "Denver, CO",
    website: "https://edutech-learning.com",
    socialLinks: {
      twitter: "https://twitter.com/edutech",
      linkedin: "https://linkedin.com/company/edutech-learning"
    }
  },
  {
    id: "6",
    name: "FinanceFlow",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    shortIntro: "Next-generation payment processing platform for modern businesses.",
    fullIntro: "FinanceFlow revolutionizes payment processing with our lightning-fast, secure platform. We handle complex payment workflows, multi-currency transactions, and provide real-time analytics. Our API-first approach makes integration seamless for businesses of all sizes.",
    category: "FinTech",
    tags: ["Payments", "FinTech", "API", "Enterprise"],
    fundingGoal: 4000000,
    currentFunding: 2800000,
    backers: 156,
    daysLeft: 15,
    featured: false,
    trending: false,
    popular: true,
    createdAt: "2024-02-05",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhqzx-9o3oLKRNkCeIP3OOM5RJYiYkQM5MQ&s",
    founderName: "Emma Wilson",
    founderTitle: "CEO & Co-Founder",
    founderImage: "/api/placeholder/150/150",
    vision: "To simplify global payments and make financial transactions as easy as sending a message.",
    goals: [
      "Process $1B in transactions annually",
      "Expand to 50+ countries",
      "Launch crypto payment support",
      "Build marketplace payment solutions"
    ],
    team: [
      {
        name: "Emma Wilson",
        role: "CEO & Co-Founder",
        image: "/api/placeholder/100/100",
        bio: "Former PayPal executive with 15+ years in payments. Expert in financial technology and compliance."
      },
      {
        name: "John Davis",
        role: "CTO",
        image: "/api/placeholder/100/100",
        bio: "Security expert with experience building payment systems at Stripe and Square."
      },
      {
        name: "Anna Chen",
        role: "Head of Business Development",
        image: "/api/placeholder/100/100",
        bio: "Business development leader with extensive experience in financial services partnerships."
      }
    ],
    testimonials: [
      {
        name: "E-commerce CEO",
        role: "Enterprise Client",
        content: "FinanceFlow reduced our payment processing time by 70% while improving security.",
        image: "/api/placeholder/60/60"
      },
      {
        name: "SaaS Founder",
        role: "Client",
        content: "The best payment platform we've used. Integration was seamless and support is exceptional.",
        image: "/api/placeholder/60/60"
      }
    ],
    location: "New York, NY",
    website: "https://financeflow.com",
    socialLinks: {
      twitter: "https://twitter.com/financeflow",
      linkedin: "https://linkedin.com/company/financeflow"
    }
  }
];

export const categories = [
  "All",
  "Technology",
  "Healthcare",
  "Sustainability",
  "Architecture",
  "Education",
  "FinTech",
  "Design",
  "Food & Beverage",
  "Consumer Products"
];

export const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "trending", label: "Trending" },
  { value: "popular", label: "Popular" },
  { value: "funding", label: "Most Funded" },
  { value: "ending", label: "Ending Soon" }
];
