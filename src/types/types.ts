export interface User {
  fullName: string;
  username: string;
  photoUrl: string;
  profession: string;
  socialLinks: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}
