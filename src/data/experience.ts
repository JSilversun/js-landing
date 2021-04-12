import {
  ExperienceItem,
  ExperienceSummary,
  ProfessionArea,
  ProfessionAreaItem,
} from "@/types/experience";
import { buildResizedImageUrl } from "@/utils/image";

export const backend: ProfessionArea = {
  name: "Backend",
  color: "cyan",
};

export const frontend: ProfessionArea = {
  name: "Frontend",
  color: "orange",
};

export const devOps: ProfessionArea = {
  name: "DevOps",
  color: "light-purple",
};

export const database: ProfessionArea = {
  name: "Database",
  color: "light-green",
};

export const experienceItems: ExperienceItem[] = [
  {
    organization: "Tiendas Ciro S. A.",
    period: "2012 - 2020",
    description:
      "I maintained a PHP legacy system for a local pymes store, I developed security and automatized backup procedures using Amazon AWS 3",
    photos: [
      {
        title: "Coffee meeting with coworkers",
        imageId: "landing/experience/ciro/coffee_coworkers_qiijph",
      },
      {
        title: "End of the year party in Tiendas Ciro S. A.",
        imageId: "landing/experience/ciro/party_end_of_year_fjodf6",
      },
    ],
  },
  {
    organization: "PLUSTEAM C. A.",
    period: "2020 - 2021",
    description:
      "I worked as a fullstack developer in charge of developing REST/GraphQL API's (backend) and frontend SPA's using VueJS.",
    photos: [
      {
        title: "Celebrating a coworker's birthday",
        imageId: "landing/experience/plusteam/coworker_birthday_znmqjf",
      },
      {
        title: "Celebrating 2 years in the company",
        imageId: "landing/experience/plusteam/celebration_2_years_mtdz2j",
      },
    ],
  },
].map((item) => ({
  ...item,
  photos: item.photos.map((photo) => ({
    ...photo,
    imageUrl: buildResizedImageUrl(photo.imageId, { width: 320 }),
  })),
}));

export const areasItems: ProfessionAreaItem[] = [
  {
    area: backend,
    description:
      "I have built several REST API's, for Python I have used Django and for NodeJS, express and loopback. However I have also built and maintain GraphQL API's using hasura and prisma. Besides I'm full stack I have more experience in the backend than any other area.",
    technologies: [
      {
        name: "REST",
        progress: 80,
      },
      {
        name: "GraphQL",
        progress: 90,
      },
      {
        name: "NodeJS",
        progress: 80,
      },
      {
        name: "Django",
        progress: 70,
      },
    ],
  },
  {
    area: frontend,
    description:
      "I'm pretty skilled in the frontend as well using libraries/frameworks like Vue and React, I have built and structure entire frontends using Vue + Vuetify, but for react I have developed specific components using either MobX or Redux.",
    technologies: [
      {
        name: "Vue",
        progress: 90,
      },
      {
        name: "Vuetify",
        progress: 90,
      },
      {
        name: "React",
        progress: 60,
      },
      {
        name: "CSS",
        progress: 70,
      },
    ],
  },
  {
    area: database,
    description:
      "As mentioned, I also have modeled relational databases, mostly postgres but some based on MySQL as well, I occasionally code triggers, procedures and views when needed.",
    technologies: [
      {
        name: "Postgres",
        progress: 90,
      },
      {
        name: "MySQL",
        progress: 70,
      },
    ],
  },
];

export const experienceSummary: ExperienceSummary = {
  subtitle: "Having 4 years of experience",
  description: `As a fullstack developer I have worked in almost every
                department related to web software development, from database
                modeling, coding triggers, procedures to structure and maintain
                frontend architectures and building REST and GraphQL API's.`,
};
