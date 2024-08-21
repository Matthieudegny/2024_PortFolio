import { StaticImageData } from "next/image";

export interface ContactType {
  id: number;
  title: string;
  imageUrl?: string | StaticImageData;
  Icon?: React.FC;
  link: string;
  descriptionImage: string;
  displaySectionIntro: boolean;
}
