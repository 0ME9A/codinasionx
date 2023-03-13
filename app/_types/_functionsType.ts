export type objectWithTagsType = {
    tags: string[];
}

export type tagCountType = {
    [tag: string]: number;
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
