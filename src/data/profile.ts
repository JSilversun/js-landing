import { user } from "@/data/user";
import { getAge } from "@/utils/user";

const userBirthDate = new Date(
  `${user.birthDate.month}/01/${user.birthDate.year}`
);

export const profileSummary = {
  tagline: "I'm one women army!",
  description: `A self-driven software engineer. Able to effectively self-manage
  during independent projects, as well as collaborate in a team
  setting. I always give the best of myself in whatever I do.`,
};

export const profileItems = [
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

export const userStrengths = [
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
