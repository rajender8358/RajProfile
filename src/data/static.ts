import URLife from "../assets/urlife.png";
import Twindolphin from "../assets/dolphin.png";
import Rowdy from "../assets/rwdy.jpg";
import LEO1 from "../assets/leo1.jpeg";
import Cards from "../assets/42cards.png";
import JVB from "../assets/jvb.png";

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  name: "Rajender Reddy Garlapally",
  firstName: "Rajender",
  lastName: "Reddy",
  title: "Senior Software Engineer",
  company: "OSI Digital",
  location: "Hyderabad, India",
  description: "A highly skilled and experienced developer specializing in building robust and scalable mobile and web applications using technologies like React Native, React.js, Swift, AWS Cognito, Amplify, and GraphQL",
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/rajenderreddy78/" },
    { name: "email", url: "rajenderreddy.garlapalli@gmail.com" },
  ],
  cvURL: "",
};

export const aboutData = {
  title: "About Me",
  headline: "Passionate Full-Stack Developer",
  description: `Seasoned and results-driven Front-End Developer with 7+ years of extensive experience in Mobile Application Development (React Native) and Web Development (React.js), delivering high-performance, scalable, and user-centric applications. Proven expertise in leading cross-functional teams and collaborating with designers, backend engineers, and stakeholders to translate business requirements into technical solutions.

Demonstrated hands-on proficiency in building dynamic and responsive UIs, optimizing performance, and ensuring pixel-perfect implementation across platforms. Adept in backend development using Node.js and Python with Django, enabling full-stack capabilities and streamlined API integrations.

Well-versed in AWS cloud services, including Cognito (authentication/authorization), Amplify, DynamoDB, and S3, ensuring secure and efficient cloud-native applications. Passionate about clean architecture, automation, and continuous integration practices. Committed to delivering robust, maintainable code and driving innovation through cutting-edge technologies.`,
  stats: [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ]
};

export const experienceData = {
  title: "Work Experience",
  experiences: [
    {
      company: 'OSI Digital',
      position: 'Sr. Software Engineer',
      duration: 'Feb 2024 - Present',
      location: 'Hyderabad, India',
      type: 'Full-stack developer',
      description: [
        "Leading multiple teams across projects to develop scalable web and mobile solutions using React.js, React Native, and AWS.",
        "Engaged in sprint planning, CI/CD setup, performance tuning, and delivering high-quality UX across platforms.",
        "Mentoring developers, reviewing code, and collaborating on cross-functional initiatives for end-to-end product delivery."
      ],
    },
    {
      company: 'Lifetime Wellness Rx Int. Ltd.',
      position: 'Sr. Software Engineer',
      duration: 'Sep 2022 - Feb 2024',
      location: 'Hyderabad, India',
      type: 'Full-stack developer',
      description: [
        "Led the development of web, mobile, and TV applications using React Native, React.js, and backend integrations.",
        "Participated in sprint planning, architecture discussions, and implemented CI/CD pipelines for deployments.",
        "Handled AWS services, code reviews, and collaborated on UX enhancements across platforms."
      ],
    },
    {
      company: 'Gajju Technologies Pvt Ltd',
      position: 'Software Developer',
      duration: 'May 2020 - Sep 2022',
      location: 'Hyderabad, India',
      type: 'Frontend developer',
      description: [
        "Worked as a Front-End Developer on both React Native and React.js projects for web and mobile platforms.",
        "Took ownership of sprint planning, UI implementation, and code reviews as a lead frontend developer.",
        "Collaborated with cross-functional teams to deliver scalable, responsive applications."
      ],
    },
    {
      company: 'Norm Software Solutions',
      position: 'Mobile Application Developer',
      duration: 'Aug 2018 - Apr 2020',
      location: 'Hyderabad, India',
      type: 'Frontend developer',
      description: [
        "Started my career as a Junior Developer, building mobile applications using Swift and React Native.",
        "Contributed to designing UI screens and implementing app features across multiple internal projects.",
        "Collaborated closely with senior developers and QA teams to deliver stable builds and timely releases."
      ],
    },
  ]
};

export const projectsData = {
  title: "Featured Projects",
  description: "Here are some of my recent projects that showcase my skills in full-stack development, problem-solving, and creating user-centric applications.",
  projects: [
    {
      title: '42 Cards',
      description: 'A comprehensive application to find nearby blood donors with advanced filtering options, location-based search, and real-time availability updates.',
      image: Cards,
      technologies: ['React.JS', 'GraphQL', 'AWS Amplify', ' AWS Cognito', 'DynamoDB'],
      githubUrl: '#',
      liveUrl: 'https://www.42-cards.com/',
      category: 'Web Applications'
    },
    {
      title: 'UR.Life',
      description: 'A comprehensive application to find nearby blood donors with advanced filtering options, location-based search, and real-time availability updates.',
      image: URLife,
      technologies: ['React Native', 'React.JS', 'Firebase', 'TV Application'],
      githubUrl: '#',
      liveUrl: 'https://ur.life',
      category: 'Mobile, TV and Web Applications'
    },
    {
      title: 'Twindolphin',
      description: 'A platform to manage gaming events with Google OAuth integration, tournament brackets, player registration, and real-time match updates.',
      image: Twindolphin,
      technologies: ['React Native', 'React.JS', 'Tailwind CSS', 'Prismic', 'Prismatic'],
      githubUrl: '#',
      liveUrl: 'https://twindolphin.com/',
      category: 'Mobile and Web Applications'
    },
    {
      title: 'Rowdy',
      description: 'A modern admin dashboard for e-commerce management with analytics, inventory tracking, and customer management features.',
      image: Rowdy,
      technologies: ['React Native', 'React.JS'],
      githubUrl: '#',
      liveUrl: 'https://rwdy.in/',
      category: 'E-Commerce, Mobile and Web Applications'
    },
    {
      title: 'Leo 1',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
      image: LEO1,
      technologies: ['React Native', 'React JS', 'Material UI', 'Node.js', 'S3'],
      githubUrl: '#',
      liveUrl: 'https://www.leo1.in/',
      category: 'Mobile and Web Applications'
    },
    {
      title: 'JVB Health and Wellness',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
      image: JVB,
      technologies: ['React Native', 'React JS', 'Material UI', 'Node.js', 'S3'],
      githubUrl: '#',
      liveUrl: 'https://www.jvbwellness.com/',
      category: 'Mobile and Web Applications'
    }
  ]
};

export const skillsData = {
  title: "Technical Skills",
  description: "Here's an overview of my technical expertise across various technologies and tools.",
  skills: [
    { name: 'React Native', size: 'large', color: 'from-pink-400 to-purple-500', position: { x: 80, y: 40 } },
    { name: 'React.js', size: 'large', color: 'from-blue-400 to-cyan-400', position: { x: -80, y: -40 } },
    { name: 'JavaScript', size: 'medium', color: 'from-yellow-400 to-orange-400', position: { x: 0, y: -160 } },
    { name: 'TypeScript', size: 'medium', color: 'from-blue-500 to-blue-600', position: { x: 200, y: -80 } },
    { name: 'Node.js', size: 'medium', color: 'from-green-400 to-emerald-400', position: { x: -200, y: 80 } },
    { name: 'Python', size: 'medium', color: 'from-yellow-500 to-blue-500', position: { x: -180, y: -100 } },
    { name: 'GraphQL', size: 'medium', color: 'from-pink-500 to-rose-500', position: { x: 180, y: 150 } },
    { name: 'HTML', size: 'small', color: 'from-red-500 to-orange-500', position: { x: -150, y: -180 } },
    { name: 'CSS', size: 'small', color: 'from-blue-500 to-indigo-500', position: { x: 150, y: -180 } },
    { name: 'Tailwind CSS', size: 'small', color: 'from-teal-400 to-cyan-500', position: { x: 0, y: 80 } },
    { name: 'Material UI', size: 'small', color: 'from-blue-400 to-indigo-400', position: { x: 100, y: -120 } },
    { name: 'UI/UX', size: 'medium', color: 'from-teal-400 to-cyan-500', position: { x: -220, y: 0 } },
    { name: 'AWS Amplify', size: 'small', color: 'from-orange-400 to-orange-600', position: { x: 0, y: 150 } },
    { name: 'AWS S3', size: 'small', color: 'from-red-400 to-red-600', position: { x: 220, y: 100 } },
    { name: 'AWS Cognito', size: 'small', color: 'from-yellow-500 to-amber-500', position: { x: 180, y: 0 } },
  ],
  tools: {
    title: "Tools & Technologies I Work With",
    toolList: ['Prismic', 'Prismatic', 'GitHub', 'BitBucket', 'JIRA', 'Figma', 'Firebase', 'CI/CD', 'Deployments', 'Test Flight', 'Xcode', 'Android Studio']
  },
  ai: {
    title: "AI Tools I Use",
    toolList: ['Cursor.ai', 'Gemini 2.5', 'Bolt', 'Chat GPT']
  }
};

export const contactData = {
  title: "Get In Touch",
  description: "Let's discuss your next project or any opportunities to collaborate. I'm always excited to work on innovative solutions.",
  contactInfo: {
    title: "Contact Information",
    details: [
      { type: 'email', label: 'Email', value: 'rajenderreddy.garlapalli@gmail.com' },
      { type: 'phone', label: 'Phone', value: '+91 8309008358, +91 9154175727'  },
      { type: 'location', label: 'Location', value: 'Hyderabad, India' }
    ]
  },
  socials: {
    title: "Follow Me",
    links: [
      { name: 'linkedin', url: 'https://www.linkedin.com/in/rajenderreddy78/' },
    ],
   
  },
  form: {
    title: "Send me a message",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Enter your message",
    submitButton: "Send Message"
  }
}; 