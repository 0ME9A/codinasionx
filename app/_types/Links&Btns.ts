export type btnType = {
  title: string;
  style?: string;
  children: React.ReactNode;
  clickFunc: (e?: any) => void;
  value: number | string | boolean | {};
};

export type basicBtnType = {
  children: React.ReactNode;
  style?: string;
  title: string;
};

export type linkType = {
  href: string;
  title: string;
  style?: string;
  target?: string;
  children: React.ReactNode;
};

export type clipBoartBtnType = {
  clipText: string;
  style?: string;
};

export type historyType = {
  text: string;
  style: string;
};

export type badgeType = {
  BadgeData: {
    text: string;
    highlightText?: string | number | boolean;
    funcVal: any;
    funcState?: string | number | boolean | null;
    clickFunc: Function;
  }
  style?: string;
}
