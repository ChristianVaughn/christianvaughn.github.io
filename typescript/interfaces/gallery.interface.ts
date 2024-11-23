export interface IFilterNav {
  key: string;
  text: String;
}

export enum EProjectType {
  PYTHON = "PYTHON",
  JAVASCRIPT = "JAVASCRIPT",
  CPP = "CPP",
  OTHER = "OTHER",
  TYPESCRIPT = "TYPESCRIPT",
}

export interface IPortoflio {
  title: string;
  type: EProjectType;
  tags: string[];
  img: string;
  groups: string;
  link?: string;
  altLink: string;
}
