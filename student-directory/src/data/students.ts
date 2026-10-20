import { Student, Department } from "../types/student";

export const departments: Department[] = [
  {
    id: "dep-1",
    name: "Computer Science",
    slug: "computer-science",
    icon: "code",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
    specializations: [
      {
        name: "Web Development",
        slug: "web-development",
        code: "CS-SPEC-04",
        description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        coreLab: "Turing Hall 408",
        curriculumCycle: "2024–2025 Revised",
        studentIds: ["STU-1042", "STU-1155", "STU-1310", "STU-1388"]
      },
      {
        name: "Artificial Intelligence",
        slug: "ai-systems",
        code: "CS-SPEC-01",
        description: "Deep learning models, natural language processing, neural architectures, and computational statistics.",
        academicLead: "Dr. Ronald Hayes",
        coreLab: "Neumann Wing 204",
        curriculumCycle: "2024–2025 Current",
        studentIds: []
      }
    ]
  },
  {
    id: "dep-2",
    name: "Design",
    slug: "design",
    icon: "pencil",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
    specializations: [
      {
        name: "UI/UX & Product Design",
        slug: "ui-ux",
        code: "DS-SPEC-02",
        description: "Interactive system design, design thinking, and comprehensive user research methodologies.",
        academicLead: "Prof. Sarah Jenkins",
        coreLab: "Studio Bau 102",
        curriculumCycle: "2024–2025 Current",
        studentIds: ["STU-1089", "STU-1201"]
      }
    ]
  },
  {
    id: "dep-3",
    name: "Business",
    slug: "business",
    icon: "chart",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
    specializations: [
      {
        name: "FinTech & Analytics",
        slug: "fintech",
        code: "BS-SPEC-03",
        description: "Quantitative analytics, corporate finance models, and modern automated financial rails.",
        academicLead: "Dr. Gregory Miller",
        coreLab: "Bloomberg Lab 310",
        curriculumCycle: "2024–2025 Current",
        studentIds: ["STU-1120", "STU-1244"]
      }
    ]
  }
];

export const students: Student[] = [
  {
    id: "STU-1042",
    slug: "aarav-mehta",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: "bg-[#dbeafe] text-[#1d4ed8] border-[#bfdbfe]",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    studyYear: "3rd Year (Junior)",
    yearNumber: 3,
    email: "aarav.mehta@campus.edu",
    enrolledSemester: "Fall 2022",
    status: "Active Student",
    about: "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", name: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", name: "Algorithms & Complexity", credits: 3.5 }
    ]
  },
  {
    id: "STU-1089",
    slug: "elena-rostova",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "bg-[#e0e7ff] text-[#4338ca] border-[#c7d2fe]",
    department: "Design",
    departmentSlug: "design",
    specialization: "UI/UX & Product Design",
    specializationSlug: "ui-ux",
    studyYear: "2nd Year (Sophomore)",
    yearNumber: 2,
    email: "elena.rostova@campus.edu",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about: "Elena specializes in design systems and micro-interactions. She designs intuitive interfaces for accessibility and usability across modern touch and web devices.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 22, 2024",
    subjects: [
      { code: "DS-210", name: "Design Systems & Token Architecture", credits: 3.0 },
      { code: "DS-220", name: "Human Factors & UX Research", credits: 4.0 }
    ]
  },
  {
    id: "STU-1120",
    slug: "marcus-chen",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: "bg-[#ffedd5] text-[#c2410c] border-[#fed7aa]",
    department: "Business",
    departmentSlug: "business",
    specialization: "FinTech & Analytics",
    specializationSlug: "fintech",
    studyYear: "4th Year (Senior)",
    yearNumber: 4,
    email: "marcus.chen@campus.edu",
    enrolledSemester: "Fall 2021",
    status: "Active Student",
    about: "Marcus analyzes decentralized finance and modern banking infrastructure. He previously interned as an equity research analyst.",
    academicStanding: "4th Year Undergraduate",
    systemRecordId: "1120-BS-MC",
    lastValidated: "Oct 20, 2024",
    subjects: [
      { code: "BS-410", name: "Algorithmic Trading Models", credits: 4.0 },
      { code: "BS-440", name: "Corporate Strategy & Governance", credits: 3.0 }
    ]
  },
  {
    id: "STU-1155",
    slug: "priya-sharma",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "bg-[#dbeafe] text-[#1d4ed8] border-[#bfdbfe]",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    studyYear: "1st Year (Freshman)",
    yearNumber: 1,
    email: "priya.sharma@campus.edu",
    enrolledSemester: "Fall 2024",
    status: "Active Student",
    about: "Priya is passionate about reactive UI design, accessibility, and modern CSS layouts. She contributes actively to student dev clubs.",
    academicStanding: "1st Year Undergraduate",
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 19, 2024",
    subjects: [
      { code: "CS-101", name: "Intro to Computation & Logic", credits: 4.0 },
      { code: "CS-120", name: "Web Foundations & Responsive Design", credits: 3.5 }
    ]
  },
  {
    id: "STU-1201",
    slug: "lucas-dubois",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: "bg-[#ffe4e6] text-[#be123c] border-[#fecdd3]",
    department: "Design",
    departmentSlug: "design",
    specialization: "UI/UX & Product Design",
    specializationSlug: "ui-ux",
    studyYear: "3rd Year (Junior)",
    yearNumber: 3,
    email: "lucas.dubois@campus.edu",
    enrolledSemester: "Fall 2022",
    status: "Active Student",
    about: "Lucas explores 3D interactive graphics and generative AI tools in design workflows.",
    academicStanding: "3rd Year Undergraduate",
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 18, 2024",
    subjects: [
      { code: "DS-315", name: "3D Spatial Interface Design", credits: 3.5 },
      { code: "DS-330", name: "Prototyping Complex Web Applications", credits: 4.0 }
    ]
  },
  {
    id: "STU-1244",
    slug: "maya-lin",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "bg-[#ede9fe] text-[#6d28d9] border-[#ddd6fe]",
    department: "Business",
    departmentSlug: "business",
    specialization: "FinTech & Analytics",
    specializationSlug: "fintech",
    studyYear: "2nd Year (Sophomore)",
    yearNumber: 2,
    email: "maya.lin@campus.edu",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about: "Maya studies market operations and predictive economic indicators with statistical modeling.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1244-BS-ML",
    lastValidated: "Oct 16, 2024",
    subjects: [
      { code: "BS-215", name: "Business Analytics & Visual Intelligence", credits: 3.5 },
      { code: "BS-225", name: "Principles of Microeconomics", credits: 3.0 }
    ]
  },
  {
    id: "STU-1310",
    slug: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "bg-[#dbeafe] text-[#1d4ed8] border-[#bfdbfe]",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    studyYear: "4th Year (Senior)",
    yearNumber: 4,
    email: "tariq.mansoor@campus.edu",
    enrolledSemester: "Fall 2021",
    status: "Active Student",
    about: "Tariq works on distributed peer networks and cryptographic protocols for web reliability.",
    academicStanding: "4th Year Undergraduate",
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 15, 2024",
    subjects: [
      { code: "CS-412", name: "Advanced Network Engineering", credits: 4.0 },
      { code: "CS-499", name: "Capstone Project: Web Scalability", credits: 5.0 }
    ]
  },
  {
    id: "STU-1388",
    slug: "sophia-muller",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "bg-[#dbeafe] text-[#1d4ed8] border-[#bfdbfe]",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    studyYear: "2nd Year (Sophomore)",
    yearNumber: 2,
    email: "sophia.muller@campus.edu",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about: "Sophia builds high-performance progressive web apps and focuses on browser performance metrics.",
    academicStanding: "2nd Year Undergraduate",
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 14, 2024",
    subjects: [
      { code: "CS-245", name: "Progressive Web Applications", credits: 3.5 },
      { code: "CS-205", name: "Database Engineering & Query Optimization", credits: 4.0 }
    ]
  }
];

export function getAllStudents(): Student[] {
  return students;
}

export function getStudentByIdOrSlug(identifier: string): Student | undefined {
  const cleanId = decodeURIComponent(identifier).toLowerCase();
  return students.find(
    (s) => s.id.toLowerCase() === cleanId || s.slug.toLowerCase() === cleanId
  );
}

export function getAllDepartments(): Department[] {
  return departments;
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  const cleanSlug = decodeURIComponent(slug).toLowerCase();
  return departments.find((d) => d.slug.toLowerCase() === cleanSlug);
}

export function getStudentsByDepartment(deptSlug: string): Student[] {
  return students.filter((s) => s.departmentSlug.toLowerCase() === deptSlug.toLowerCase());
}
