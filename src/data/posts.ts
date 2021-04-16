import { Post } from "@/types/portfolio";
import { buildResizedImageUrl } from "@/utils/image";

export const posts: Post[] = [
  {
    name: "Pytest beginners guide",
    description:
      "Learn how to use pytest to write unit tests in Python and enhance your code quality",
    thumbnailId: "landing/articles/pytest-beginners-guide",
    tags: ["Python", "Pytest", "Unit test"],
    url: "https://medium.com/plusteam/pytest-beginners-guide-9fb9451706bf",
  },
  {
    name: "Hasura Practical Guide",
    description:
      "Practical guide to build a GraphQL API quickly using hasura using an existing film rental database",
    thumbnailId: "landing/articles/pytest-beginners-guide",
    tags: ["Hasura", "GraphQL", "Backend", "Postgres"],
    url: "#",
  },
  {
    name: "Building your own landing",
    description:
      "A story on the journey of a Software Engineer building and optimizing her own landing page",
    thumbnailId: "landing/articles/pytest-beginners-guide",
    tags: ["NodeJS", "Prisma", "Backend"],
    url: "#",
  },
].map((post) => ({
  ...post,
  thumbnailUrl: buildResizedImageUrl(post.thumbnailId, { width: 600 }),
}));
