import { backend, devOps, frontend } from "@/data/experience";
import { Project } from "@/types/portfolio";
import { buildResizedImageUrl } from "@/utils/image";

export const projects: Project[] = [
  {
    name: "MarketPlace Photologo",
    timeRange: {
      startDate: "10/24/2018",
      endDate: "12/22/2020",
    },
    mainTechnologies: ["Django", "Pytest", "Postgres", "React", "Saleor"],
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    areaItems: [
      {
        area: devOps,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["Jenkins"],
      },
      {
        area: backend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: [
          "Django",
          "Pytest",
          "Python",
          "Braintree",
          "Chargebee",
          "AWS S3",
          "REST",
        ],
      },
      {
        area: frontend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["React", "MobX"],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
  {
    name: "RankCountry",
    timeRange: {
      startDate: "03/16/2019",
      endDate: "11/27/2019",
    },
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "ForestAdmin"],
    areaItems: [
      {
        area: backend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["NodeJS", "Loopback 3", "ForestAdmin", "REST"],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
  {
    name: "Endeavour Mining - Access Manager",
    timeRange: {
      startDate: "09/30/2019",
      endDate: "08/25/2020",
    },
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "Passport"],
    areaItems: [
      {
        area: backend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["NodeJS", "TypeORM", "Inversify", "REST"],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
  {
    name: "Endeavour Mining - Reconciliation",
    timeRange: {
      startDate: "01/17/2020",
      endDate: "06/12/2020",
    },
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    mainTechnologies: ["NodeJS", "Express", "TypeORM", "Bull", "Redis"],
    areaItems: [
      {
        area: backend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: [
          "NodeJS",
          "TypeORM",
          "Inversify",
          "Bull",
          "Redis",
          "REST",
        ],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
  {
    name: "+Tracker",
    timeRange: {
      startDate: "12/29/2019",
      endDate: "04/06/2021",
    },
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    mainTechnologies: ["VueJS", "Vuetify", "Hasura", "Firebase"],
    areaItems: [
      {
        area: frontend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: [
          "VueJS",
          "Vuex",
          "Vuetify",
          "Firebase Authentication",
          "ECharts",
        ],
      },
      {
        area: backend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["NodeJS", "TypeScript", "Hasura", "GraphQL", "Prisma"],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
  {
    name: "Personal Landing",
    timeRange: {
      startDate: "03/21/2021",
      endDate: "04/10/2021",
    },
    photos: [
      {
        title: "Some title 1",
        imageId: "landing/portfolio/rank-country/photo1",
      },
      {
        title: "Some title 2",
        imageId: "landing/portfolio/rank-country/photo1",
      },
    ],
    mainTechnologies: ["VueJS", "Firebase"],
    areaItems: [
      {
        area: frontend,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["VueJS", "Firebase", "CSS"],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
    hiddenExtraDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
  },
].map((educationItem) => ({
  ...educationItem,
  thumbnailUrl: buildResizedImageUrl(educationItem.photos[0].imageId, {
    width: 500,
  }),
  photos: educationItem.photos.map((photo) => ({
    ...photo,
    imageUrl: buildResizedImageUrl(photo.imageId, { width: 800 }),
  })),
}));
