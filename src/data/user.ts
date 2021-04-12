import { User } from "@/types/user";
import { buildResizedImageUrl } from "@/utils/image";

export const user: User = {
  profession: "Software Engineer",
  fullName: "Julia Suárez",
  photoUrl: buildResizedImageUrl("jsilversun", { width: 460 }),
  username: "jsilversun",
  birthDate: {
    month: 1,
    year: 1995,
  },
  socialLinks: [
    {
      icon: "$mdi-github",
      name: "github",
      url: "https://github.com/JSilversun",
    },
    {
      icon: "$mdi-gitlab",
      name: "gitlab",
      url: "https://gitlab.com/jsilversun",
    },
    {
      icon: "$mdi-linkedin",
      name: "linkedin",
      url: "https://www.linkedin.com/in/jsilversun/",
    },
  ],
  cvUrl:
    "https://firebasestorage.googleapis.com/v0/b/personal-c77b7.appspot.com/o/cv.pdf?alt=media",
};
