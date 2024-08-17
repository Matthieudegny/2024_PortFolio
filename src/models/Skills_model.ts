export interface MainSkillType {
  id: number;
  title: string;
  Icon: React.FC<{ size: number }>;
  descriptionImage: string;
  description: string;
}

export interface SUBSKILLTYPE {
  id: number;
  title: string;
  Icon?: React.FC<{}>;
  imageUrl?: string;
}

export interface SUBSKILLPARENTTYPE {
  id: number;
  title: string;
  listSUbSkills: SUBSKILLTYPE[];
}
