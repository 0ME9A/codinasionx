export type urlType = {
    name: string;
    href: string;
};

export type socialType = {
    name: string;
    href: string;
    icon: JSX.Element | null;
};

export type siteMapType = {
    url: string;
    name: string;
    child:
    | {
        name: string;
        link: string;
    }[]
    | null;
};