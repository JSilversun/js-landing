export interface User {
  fullName: string;
  username: string;
  photoUrl: string;
  profession: string;
  socialLinks: SocialMedia[];
  birthDate: {
    month: number;
    year: number;
  };
  cvUrl: string;
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface PhotoDetail {
  imageId: string;
  imageUrl: string;
  title: string;
}
