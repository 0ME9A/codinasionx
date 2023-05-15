export type programsType = {
  slug: string;
  track_id: number;
  languages: string[];
  contributors: string[];
  last_updated: string;
};

export type programType = {
  id: number;
  slug: string;
  description: string;
  track_id: number;
  last_updated: string;
  languages: string[];
  contributors: string[];
  codes: codeType[];
};

export type programCompType = {
  programData: programType;
  parentPath?: string;
  style?: string;
};

export type TagType = {
  name: string;
  count: number;
};

export type languageType = {
  name: string;
  extension: string;
  naming_convention: string;
  prismTag: string;
  logo: string;
};

export type codeType = {
  language: languageType;
  code: string;
};