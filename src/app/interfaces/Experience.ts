export interface Experience {
  company: string;
  position: string;
  description: string;
  from: string;
  until: string;
  skills: Skills[];
  modality: string;
}

export interface Skills {
  icon: string,
  name: string
}
