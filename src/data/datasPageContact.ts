import { ContactType } from "@/models/Contact_model";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Download } from "lucide-react";

export const LIST_CONTACT: ContactType[] = [
  {
    id: 1,
    title: "Linkedin",
    Icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/matthieu-degny/",
    descriptionImage: "Linkedin logo",
  },
  {
    id: 2,
    title: "Github",
    Icon: GitHubIcon,
    link: "https://github.com/Matthieudegny",
    descriptionImage: "Github logo",
  },
  {
    id: 3,
    title: "Malt",
    imageUrl: "/assets/MaltImage.png",
    link: "https://www.malt.fr/profile/matthieudegny1",
    descriptionImage: "Malt logo",
  },
  {
    id: 4,
    title: "Email me",
    imageUrl: "/assets/photo_profile.jpg",
    link: "mailto:matthieu.degny.dev@gmail.com",
    descriptionImage: "Picture of the author",
  },
  {
    id: 5,
    title: "Resume",
    Icon: Download,
    link: "/MatthieuDegnyCV.pdf",
    descriptionImage: "Download icon",
  },
];
