import { PhotoDetail } from "@/types/user";

export interface ExperienceItem {
  organization: string;
  period: string;
  description: string;
  photos: PhotoDetail[];
}

export interface ProfessionArea {
  name: string;
  color: string;
}

export interface ProfessionAreaItem {
  area: ProfessionArea;
  description: string;
  technologies: {
    name: string;
    progress: number;
  }[];
}

export interface ExperienceSummary {
  subtitle: string;
  description: string;
}
