
export interface Contact {
  name: string
  location: string
  email: string
  linkedIn: string
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  location: string;
}

export interface Job {
  title: string;
  company: string;
  date: string;
  location: string;
  descriptionList: string[];
}

export interface Skill {
  type: string;
  items: string;
}

export interface Candidate {
  contact: Contact;
  history?: Job[];
  education?: Education[];
  skills?: Skill[];
  summary?: string[];
}