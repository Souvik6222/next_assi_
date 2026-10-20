export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  slug: string;
  name: string;
  initials: string;
  avatarColor: string;
  department: string;
  departmentSlug: string;
  specialization: string;
  specializationSlug: string;
  studyYear: string;
  yearNumber: number;
  email: string;
  enrolledSemester: string;
  status: "Active Student" | "On Leave" | "Graduated";
  about: string;
  academicStanding: string;
  systemRecordId: string;
  lastValidated: string;
  subjects: Subject[];
}

export interface Specialization {
  name: string;
  slug: string;
  code: string;
  description: string;
  academicLead: string;
  coreLab: string;
  curriculumCycle: string;
  studentIds: string[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}
