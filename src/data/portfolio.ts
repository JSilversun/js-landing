import { backend, devOps, frontend } from "@/data/experience";

export const projects = [
  {
    name: "MarketPlace Photologo",
    timeRange: {
      startDate: "10/24/2018",
      endDate: "12/22/2020",
    },
    photoUrl:
      "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
    mainTechnologies: ["Django", "Pytest", "Postgres", "React", "Saleor"],
    photos: [
      {
        title: "Some title 1",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    areas: [
      {
        ...devOps,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, blanditiis dolores ex, exercitationem harum",
        technologies: ["Jenkins"],
      },
      {
        ...backend,
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
        ...frontend,
        name: "Frontend",
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
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/projects%2Frank-country%2Frank-country.png?alt=media",
    photos: [
      {
        title: "Some title 1",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "ForestAdmin"],
    areas: [
      {
        ...backend,
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
    duration: "4m",
    photoUrl:
      "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
    photos: [
      {
        title: "Some title 1",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "Passport"],
    areas: [
      {
        ...backend,
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
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    photoUrl:
      "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
    mainTechnologies: ["NodeJS", "Express", "TypeORM", "Bull", "Redis"],
    areas: [
      {
        ...backend,
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
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    duration: "1y",
    photoUrl:
      "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
    mainTechnologies: ["VueJS", "Vuetify", "Hasura", "Firebase"],
    areas: [
      {
        ...frontend,
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
        ...backend,
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
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
      {
        title: "Some title 2",
        photo:
          "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
      },
    ],
    duration: "1w",
    photoUrl:
      "https://mktplc-live.s3.amazonaws.com/__sized__/products/Photologo_Signature_7-thumbnail-540x540.png",
    mainTechnologies: ["VueJS", "Firebase"],
    areas: [
      {
        ...frontend,
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
];
