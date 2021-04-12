import { EducationItem } from "@/types/education";
import { buildResizedImageUrl } from "@/utils/image";

export const educationItems: EducationItem[] = [
  {
    institution: "Universidad Nacional Experimental del Táchira",
    logoImageId: "landing/education/unet/logo",
    description:
      "I graduated as Cum Laude in December 2020, it was a great honor and experience, I'm sincerely grateful and happy with my university and my professors specifically for teaching me so much!",
    period: "2012 - 2020",
    photos: [
      {
        title: "Getting my degree in the middle of a pandemic",
        imageId: "landing/education/unet/photo1_vq0nmh",
      },
      {
        title: "Getting Cum Laude award",
        imageId: "landing/education/unet/photo2_lzdbkz",
      },
      {
        title: "Celebrating graduation without a mask, finally",
        imageId: "landing/education/unet/photo3_jl1wdj",
      },
    ],
  },
  {
    institution: "PluralSight",
    logoImageId: "landing/education/pluralsight/logo",
    description:
      "I had a hard time getting used to PluralSight courses however I believe their platform is impressive and I love their tests",
    period: "Aug 2020 - Nov 2020",
    photos: [
      {
        title: "PluralSight Javascript score",
        imageId: "landing/education/pluralsight/pluralsight_vue_fw0nyd",
      },
      {
        title: "PluralSight Vue score",
        imageId: "landing/education/pluralsight/pluralsight_javascript_taplzd",
      },
    ],
  },
  {
    institution: "Platzi",
    logoImageId: "landing/education/platzi/logo",
    description:
      "I decided to invest in myself so I purchased one year subscription in platzi, until now I have completed 35 courses from Javascript and Vue with ease, I'm looking forward to explore different fields and areas of knowledge with platforms that help students to learn new things on demand",
    period: "2020 - 2021",
    photos: [
      {
        title: "Platzi diploma for Javascript Career (over 30 courses)",
        imageId: "landing/education/platzi/platzi_javascript_career_kefth7",
      },
      {
        title: "Platzi diploma for software architecture",
        imageId: "landing/education/platzi/platzi_software_architecture_jhqjso",
      },
    ],
  },
].map((educationItem) => ({
  ...educationItem,
  logoUrl: buildResizedImageUrl(educationItem.logoImageId, {
    width: 50,
  }),
  photos: educationItem.photos.map((photo) => ({
    ...photo,
    imageUrl: buildResizedImageUrl(photo.imageId, { width: 500 }),
  })),
}));
