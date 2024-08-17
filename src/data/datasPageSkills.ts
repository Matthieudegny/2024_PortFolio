// icons
import { TypeScriptIcon } from "../components/icons/TypeScriptIcon";
import { ReactIcon } from "../components/icons/ReactIcon";
import { TailwindIcon } from "../components/icons/TailwindIcon";
import { MUIIcon } from "../components/icons/MUIIcon";
import { ReduxIcon } from "../components/icons/ReduxIcon";
import { JestIcon } from "../components/icons/JestIcon";
import { NextIcon } from "../components/icons/NextIcon";
import { ReactQueryIcon } from "../components/icons/ReactQueryIcon";

// types
import { MainSkillType, SUBSKILLPARENTTYPE } from "../models/Skills_model";

export const LIST_MAIN_SKILLS: MainSkillType[] = [
  {
    id: 1,
    title: "Typescript",
    Icon: TypeScriptIcon,
    descriptionImage: "Typescript logo",
    description:
      "Enhancing your applications with strong typing and reliability.",
  },
  {
    id: 2,
    title: "React",
    Icon: ReactIcon,
    descriptionImage: "React logo",
    description: "Creating modern and interactive interfaces.",
  },
];

export const LIST_SUB_SKILLS: SUBSKILLPARENTTYPE[] = [
  {
    id: 1,
    title: "UI Styling:",
    listSUbSkills: [
      {
        id: 1,
        title: "Tailwind CSS",
        Icon: TailwindIcon,
      },
      {
        id: 2,
        title: "MUI",
        Icon: MUIIcon,
      },
    ],
  },
  {
    id: 6,
    title: "Framework:",
    listSUbSkills: [
      {
        id: 1,
        title: "Next.js",
        Icon: NextIcon,
      },
    ],
  },

  {
    id: 2,
    title: "State Management:",
    listSUbSkills: [
      {
        id: 1,
        title: "Redux",
        Icon: ReduxIcon,
      },
      {
        id: 2,
        title: "Zustland",
        imageUrl: "/assets/zustandImage.png",
      },
    ],
  },
  {
    id: 3,
    title: "Testing:",
    listSUbSkills: [
      {
        id: 1,
        title: "Jest",
        Icon: JestIcon,
      },
    ],
  },
  {
    id: 5,
    title: "Form Handling:",
    listSUbSkills: [
      {
        id: 1,
        title: "React Hook Form",
        imageUrl: "/assets/ReactHookFormImage.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Data Fetching:",
    listSUbSkills: [
      {
        id: 1,
        title: "React Query",
        Icon: ReactQueryIcon,
      },
    ],
  },
];
