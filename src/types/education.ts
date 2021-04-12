import { PhotoDetail } from "@/types/user";

export interface EducationItem {
  institution: string;
  logoUrl: string;
  description: string;
  period: string;
  photos: PhotoDetail[];
}
