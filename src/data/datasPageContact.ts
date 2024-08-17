import { ContactType } from "@/models/Contact_model";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { MaltIcon } from "@/components/icons/MaltIcon";
import { Download } from "lucide-react";

export const LIST_CONTACT: ContactType[] = [
  {
    title: "Linkedin",
    Icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/matthieu-degny/",
    descriptionImage: "Linkedin logo",
  },
  {
    title: "Github",
    Icon: GitHubIcon,
    link: "https://github.com/Matthieudegny",
    descriptionImage: "Github logo",
  },
  {
    title: "Malt",
    imageUrl: "/assets/MaltImage.png",
    link: "https://www.malt.fr/profile/matthieudegny",
    descriptionImage: "Malt logo",
  },
  {
    title: "Email me",
    imageUrl: "/assets/photo_profile.jpeg",
    link: "mailto:matthieu.degny.dev@gmail.com",
    descriptionImage: "Picture of the author",
  },
  {
    title: "Resume",
    Icon: Download,
    link: "/assets/Matthieu_Degny_Resume.pdf",
    descriptionImage: "Download icon",
  },
];
