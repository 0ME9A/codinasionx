export type ProgramType = {
  slug: string;
  title: string;
  track_id: number;
  languages: string[];
  contributors: string[];
  last_updated: string;
};

export type programCompType = {
  ProgramData: ProgramType;
  parentPath: string;
  style?: string;
}

// export type ProgramCompType = {
//   title: string;
//   slug: string;
//   tags: string[];
//   style?: string;
// }

export type TagType = {
  name: string;
  count: number;
};

export type availableSolutionDataType = {
  // tags: string[];
  languages: string[];
  track_id: string | number;
  contributors: string[];
  last_updated: Date | string;
}

export type availableSolutionType = {
  data: availableSolutionDataType;
}

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

export type activeProgramType = {
  id: number;
  slug: string;
  description: string;
  track_id: number;
  last_updated: string;
  languages: string[];
  contributors: string[];
  codes: codeType[];
};
