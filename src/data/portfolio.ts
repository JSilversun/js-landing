import { backend, database, devOps, frontend } from "@/data/experience";
import { Project } from "@/types/portfolio";
import { buildImageUrl, buildResizedImageUrl } from "@/utils/image";

export const projects: Project[] = [
  {
    name: "MarketPlace Photologo",
    url: "https://market.photologo.co/",
    timeRange: {
      startDate: "10/24/2018",
      endDate: "12/22/2020",
    },
    description:
      "An ecommerce solution based on saleor (opensource ecommerce project) for digital assets like custom signatures",
    hiddenExtraDescription:
      "I worked on implementing payment gateways like chargeebee, braintree, paddle and maintaining solid unit tests with pytest",
    mainTechnologies: ["Django", "Pytest", "Postgres", "React", "Saleor"],
    photos: [
      {
        title: "Photologo trackpage",
        imageId: "landing/portfolio/marketplace/photologo_tracking_page",
      },
      {
        title: "Product page",
        imageId: "landing/portfolio/marketplace/source_file_page",
      },
      {
        title: "Checkout page with different payment gateways",
        imageId: "landing/portfolio/marketplace/checkout_page",
      },
      {
        title: "My account page",
        imageId: "landing/portfolio/marketplace/my_account",
      },
      {
        title: "Personal commit contribution",
        imageId: "landing/portfolio/marketplace/commit_contribution",
      },
    ],
    areaItems: [
      {
        area: backend,
        description:
          "Most of the time I worked as a backend developer maintaining SSR views, REST endpoints, models and forms from django. I also implemented a GTM solution for a mostly backend based app dynamically. I implemented webhooks for async payment processing for Paddle",
        technologies: [
          "Django",
          "Pytest",
          "Python",
          "Braintree",
          "Chargebee",
          "AWS S3",
          "REST",
          "Webhooks",
        ],
      },
      {
        area: frontend,
        description:
          "Besides most of the app was based on SSR, I was in charge of maintaining specific react components for the cart and product pages using the MobX state management library",
        technologies: ["React", "MobX"],
      },
      {
        area: devOps,
        description:
          "During the early stages of the project I setup Jenkins to maintain the CICD environment and run all unit test automatically before deploying the app across several environments (daily/staging/production)",
        technologies: ["Jenkins"],
      },
    ],
  },
  {
    name: "RankCountry",
    url: "https://rankcountry.com/",
    description:
      "Country ranking app supporting dynamic data internationalization, categorization and GIS location",
    hiddenExtraDescription:
      "I worked only as a backend developer of a REST API using loopback 3, sequelize and customized a dynamic dashboard using Forest Admin",
    timeRange: {
      startDate: "03/16/2019",
      endDate: "11/27/2019",
    },
    photos: [
      {
        title:
          "Map page using KML's to colorize countries according to their score",
        imageId: "landing/portfolio/rank-country/rank_country",
      },
      {
        title: "Main maps categories list",
        imageId: "landing/portfolio/rank-country/categories_selector",
      },
      {
        title:
          "Combine multiple maps to get the countries that satisfy specific ranges",
        imageId: "landing/portfolio/rank-country/combine_maps",
      },
      {
        title: "Loopback REST API explorer",
        imageId: "landing/portfolio/rank-country/api_explorer",
      },
      {
        title: "Personal commit contribution",
        imageId: "landing/portfolio/rank-country/commit_contribution_a",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "ForestAdmin"],
    areaItems: [
      {
        area: backend,
        description:
          "I refactored the first version of the RankCountry API using Loopback 3, the app architecture was re engineered to enhance scalability regarding countries and inner locations like states and cities. A custom dashboard was created with ForestAdmin to enhance the data management experience",
        technologies: [
          "NodeJS",
          "Loopback 3",
          "ForestAdmin",
          "REST",
          "Sequelize",
        ],
      },
      {
        area: database,
        description:
          "RankCountry is a geographic information system, this is why postgres was chosen as the database engine to optimize queries using the postgis extensions to perform location specific queries",
        technologies: ["Postgres", "Postgis"],
      },
    ],
  },
  {
    name: "Endeavour Mining - Access Manager",
    description:
      "Permission management service to administrate authorization and authentication over related microservices",
    hiddenExtraDescription:
      "Worked on the backend to build a REST API using loopback 3 and support the frontend development on react",
    timeRange: {
      startDate: "09/30/2019",
      endDate: "08/25/2020",
    },
    photos: [
      {
        title: "Modules(Microservices) view",
        imageId: "landing/portfolio/access-manager/modules_view",
      },
      {
        title: "Login page",
        imageId: "landing/portfolio/access-manager/login_page",
      },
      {
        title: "Policies list view",
        imageId: "landing/portfolio/access-manager/policies_list_view",
      },
      {
        title: "Resources and actions view",
        imageId: "landing/portfolio/access-manager/resources_view",
      },
      {
        title: "Users view",
        imageId: "landing/portfolio/access-manager/users_view",
      },
      {
        title: "Personal contributions",
        imageId:
          "landing/portfolio/access-manager/access_manager_commit_contribution",
      },
    ],
    mainTechnologies: ["NodeJS", "Loopback 3", "Passport", "Typescript"],
    areaItems: [
      {
        area: backend,
        description:
          "Work on building and maintaining the REST API to perform authorization and authentication for other microservices using passport and signing JSON Web Tokens as a Certificate Authority across other microservices",
        technologies: ["NodeJS", "Loopback 3", "Passport", "REST", "JWT"],
      },
      {
        area: frontend,
        description:
          "Work on refactoring, maintaining and extending several react components under responsive design as a Progressive Web Application",
        technologies: ["React", "React Hooks", "Redux", "MaterialUI", "PWA"],
      },
    ],
  },
  {
    name: "Endeavour Mining - Reconciliation",
    description:
      "Reporting and visualization tool to analyze mining operations performance across time",
    hiddenExtraDescription:
      "I worked as backend developer to maintain a REST API in charge to perform complex CSV/Excel files processing and storing data",
    timeRange: {
      startDate: "01/17/2020",
      endDate: "06/12/2020",
    },
    photos: [
      {
        title: "User customizable dashboard powered by metabase",
        imageId: "landing/portfolio/reconciliation/dashboard_ity",
      },
      {
        title:
          "User customizable dashboard powered by metabase (different mine)",
        imageId: "landing/portfolio/reconciliation/dashboard_2",
      },
      {
        title: "Import file data entry",
        imageId: "landing/portfolio/reconciliation/import_file_data_entry",
      },
      {
        title: "Personal contribution",
        imageId:
          "landing/portfolio/reconciliation/reconciliation_commit_contribution",
      },
    ],
    mainTechnologies: [
      "NodeJS",
      "Express",
      "TypeORM",
      "Bull",
      "Redis",
      "Typescript",
    ],
    areaItems: [
      {
        area: backend,
        description:
          "I was responsible to perform complex file processing procedures to insert users raw data into the database using a processing queue like bull and typeORM, several endpoints were exposed as GraphQL mutations to extend a core Hasura GraphQL API",
        technologies: [
          "NodeJS",
          "TypeORM",
          "Typescript",
          "Inversify",
          "Bull",
          "Hasura",
          "GraphQL",
          "Redis",
          "REST",
        ],
      },
    ],
  },
  {
    name: "+Tracker",
    url: "https://tracker.plusteam.tech/",
    description:
      "Time tracking and employee monitoring internal software with task management integrations",
    hiddenExtraDescription:
      "Develop and maintain most of the frontend using Vue and Vuetify, build serverless endpoints using firebase functions to extend a GraphQL API",
    timeRange: {
      startDate: "12/29/2019",
      endDate: "04/06/2021",
    },
    photos: [
      {
        title: "+Tracker Landing Page",
        imageId: "landing/portfolio/tracker/landing",
      },
      {
        title: "Login view",
        imageId: "landing/portfolio/tracker/login",
      },
      {
        title: "Timeline view",
        imageId: "landing/portfolio/tracker/timeline_view_kusc6j",
      },
      {
        title: "Tasks view",
        imageId: "landing/portfolio/tracker/tasks_view",
      },
      {
        title: "User view",
        imageId: "landing/portfolio/tracker/user_settings",
      },
      {
        title: "Sonar cloud code quality",
        imageId: "landing/portfolio/tracker/sonar_cloud_backend",
      },
      {
        title: "Frontend commit contribution",
        imageId: "landing/portfolio/tracker/frontend_contribution",
      },
      {
        title: "Backend commit contribution",
        imageId: "landing/portfolio/tracker/backend_contribution",
      },
    ],
    mainTechnologies: [
      "VueJS",
      "Vuetify",
      "Hasura",
      "Typescript",
      "Jest",
      "Firebase",
    ],
    areaItems: [
      {
        area: frontend,
        description:
          "Code most of the frontend using Vue and Vuetify and firebase authentication with JWT's including most of the CRUD's and chart pages using echarts. Maintaining tests written in jest.",
        technologies: [
          "VueJS",
          "Vuex",
          "Vuetify",
          "Firebase Authentication",
          "ECharts",
          "Apollo",
          "Jest",
        ],
      },
      {
        area: backend,
        description:
          "Structure and extend hasura GraphQL API to support several task integration apps like Asana or Jira under OAuth 2.0. Maintaining tests written in Jest with a coverage over 97%. Work on heavy interaction with third party API's for to way data manipulation using Webhooks",
        technologies: [
          "NodeJS",
          "TypeScript",
          "Hasura",
          "GraphQL",
          "Prisma",
          "Jest",
          "Webhooks",
        ],
      },
    ],
  },
  {
    name: "Personal Landing",
    url: "https://github.com/JSilversun/js-landing",
    description:
      "Professional landing hand build and optimized by hand using Vue and Vuetify",
    hiddenExtraDescription:
      "Setup automatic deployments with github and firebase and image optimizations with cloundinary",
    timeRange: {
      startDate: "03/21/2021",
      endDate: "04/10/2021",
    },
    photos: [
      {
        title: "Landing page",
        imageId: "landing/portfolio/landing/landing",
      },
      {
        title: "Commit contribution page",
        imageId: "landing/portfolio/landing/commit_contribution",
      },
      {
        title: "Github actions",
        imageId:
          "landing/portfolio/landing/github_actions_automatic_deployment",
      },
    ],
    mainTechnologies: ["VueJS", "Vuetify", "Firebase", "AnimXYZ", "Typescript"],
    areaItems: [
      {
        area: frontend,
        description:
          "Besides I had worked with Vue and Vuetify before, I was able to learn how to implement complex animations with AnimXYZ (besides I kept the landing simple for design purposes) and frontend serious optimization over images and icons",
        technologies: ["VueJS", "Firebase", "CSS", "AnimXYZ", "Typescript"],
      },
      {
        area: devOps,
        description:
          "Setup automatic deployments using Github Actions and Firebase Hosting",
        technologies: ["Firebase hosting", "Heroku", "Github actions"],
      },
    ],
  },
].map((educationItem) => ({
  ...educationItem,
  thumbnailUrl: buildResizedImageUrl(educationItem.photos[0].imageId, {
    width: 500,
  }),
  photos: educationItem.photos.map((photo) => ({
    ...photo,
    imageUrl: buildImageUrl(photo.imageId, {
      transformations: {
        quality: 80,
        resize: { width: 1200 },
      },
    }),
  })),
}));
