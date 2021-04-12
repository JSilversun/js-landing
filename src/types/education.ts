import { PhotoDetail } from "@/types/user";

export interface EducationItem {
  institution: string;
  logoImageId: string;
  logoUrl: string;
  description: string;
  period: string;
  photos: PhotoDetail[];
}
