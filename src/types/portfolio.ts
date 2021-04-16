import { ProfessionArea } from "@/types/experience";
import { PhotoDetail } from "@/types/user";

export interface DateRangeData {
  startDate: string;
  endDate?: string;
}

export interface DateRange {
  startDate: Date;
  endDate?: Date;
}

export interface Project {
  name: string;
  url?: string;
  thumbnailUrl: string;
  timeRange: DateRangeData;
  mainTechnologies: string[];
  photos: PhotoDetail[];
  areaItems: {
    area: ProfessionArea;
    description: string;
    technologies: string[];
  }[];
  description: string;
  additionalDescription: string;
}

export interface Post {
  name: string;
  description: string;
  thumbnailId: string;
  tags: string[];
  url: string;
}
