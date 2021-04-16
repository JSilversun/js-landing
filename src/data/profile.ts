import { user } from "@/data/user";
import { getAge } from "@/utils/user";
import { ProfileItem, ProfileSummary, UserStrength } from "@/types/profile";
import { PhotoWithThumbnail } from "@/types/user";
import { buildImageUrl } from "@/utils/image";

const userBirthDate = new Date(
  `${user.birthDate.month}/01/${user.birthDate.year}`
);

export const profileSummary: ProfileSummary = {
  tagline: "I'm one women army!",
  description: `A self-driven software engineer. Able to effectively self-manage
  during independent projects, as well as collaborate in a team
  setting. I always give the best of myself in whatever I do.`,
};

export const profileItems: ProfileItem[] = [
  {
    name: "Email",
    value: "ju.threw@gmail.com",
  },
  {
    name: "Age",
    value: getAge(userBirthDate),
  },
  {
    name: "Citizenship",
    value: "Venezuelan/Portguese",
  },
  {
    name: "Location",
    value: "Táchira, Venezuela",
  },
  {
    name: "Languages",
    value: "Spanish, English",
  },
];

export const userStrengths: UserStrength[] = [
  {
    icon: "$mdi-function-variant",
    title: "Problem Solver",
    color: "primary",
    description: "I come up with innovative solutions to the problems I face",
  },
  {
    icon: "$mdi-code-braces",
    color: "primary",
    title: "Tech Enthusiast",
    description:
      "I feel comfortable learning to use new languages or tools to improve my workflow",
  },
  {
    icon: "$mdi-bookshelf",
    color: "primary",
    title: "Self-taught",
    description:
      "I'm curious and I love investing in my learning, I'm constantly learning new things on my own",
  },
  {
    icon: "$mdi-speedometer",
    title: "Dedicated",
    color: "primary",
    description:
      "I give all my effort to surpass my own limits and be the best version of myself I can be",
  },
];

export const photos: PhotoWithThumbnail[] = [
  {
    title:
      "Feeling like coding on the floor, it reminds me of my university days",
    imageId: "landing/profile/more_about_me/photo3",
  },
  {
    title:
      "The hero photo took me like 100 attempts and now my hair refuses to obey me",
    imageId: "landing/profile/more_about_me/photo5",
  },
  {
    title:
      "But then! the boring photo session was interrupted by a furry intruder!",
    imageId: "landing/profile/more_about_me/photo4",
  },
  {
    title:
      "To be honest, I wanted to use this on the hero but then this page would be a golden dogs... bad for the SEO?... but nobody said anything about the last section right?",
    imageId: "landing/profile/more_about_me/photo6",
  },
  {
    title:
      "At least after so many photos I got some good ones for my desk portrait",
    imageId: "landing/profile/more_about_me/photo1",
  },
].map((photo) => ({
  ...photo,
  thumbnailUrl: buildImageUrl(photo.imageId, {
    transformations: {
      quality: 80,
      resize: { width: 200 },
    },
  }),
  imageUrl: buildImageUrl(photo.imageId, {
    transformations: {
      quality: 80,
      resize: { width: 1200 },
    },
  }),
}));
