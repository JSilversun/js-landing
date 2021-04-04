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

export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
