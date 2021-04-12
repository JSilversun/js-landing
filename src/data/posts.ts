import { Post } from "@/types/portfolio";

export const posts: Post[] = [
  {
    name: "Pytest beginners guide",
    description:
      "Practical guide on how to use and setup pytest for unit testing",
    imageId: "landing/articles/pytest-beginners-guide",
    hiddenExtraDescription:
      "Get to know how use pytest fixtures to keep your unit tests as DRY as possible",
    tags: ["Python", "Pytest", "Unit test"],
    url: "https://medium.com/plusteam/pytest-beginners-guide-9fb9451706bf",
  },
  {
    name: "Hasura GraphQL Engine Practical Guide",
    description: "Practical guide to build a GraphQL API quickly using hasura",
    imageId: "landing/articles/pytest-beginners-guide",
    hiddenExtraDescription:
      "Clone a repository, run a couple of commands and get a GraphQL API running in no time",
    tags: ["Hasura", "GraphQL", "Backend", "Postgres"],
    url: "#",
  },
  {
    name: "Use prisma to build a group by endpoint",
    description:
      "How you build a GraphQL endpoint to group by data in a database table",
    imageId: "landing/articles/pytest-beginners-guide",
    hiddenExtraDescription:
      "Use nexus to build you GraphQL schema to get your endpoint running",
    tags: ["NodeJS", "Prisma", "Backend"],
    url: "#",
  },
];
