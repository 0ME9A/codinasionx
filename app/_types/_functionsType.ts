export type objectWithTagsType = {
    languages: string[];
}

export type tagCountType = {
    [language: string]: number;
}

export type ResponseData = {
    data: string[];
    status: number;
}

export type TagCount = {
    [key: string]: number;
}

export type Tag = {
    language: string;
    program: number;
}

export type projectPathType = {
    name: string;
    slug: string;
    active: boolean;
}[]