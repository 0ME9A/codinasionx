export type buttonType = {
  children: React.ReactNode;
  style?: string;
  val: any;
  title: string;
  func: (dispatch?: any) => Promise<void> | void;
};

export type clipBoartBtnType = {
  clipText: string;
  style?: string;
};

export type historyType = {
  text: string;
  style: string;
};

export type linkType = {
  url: string;
  target?: string;
  title: string;
  style?: string;
  children?: React.ReactNode;
};

export type basicLinkType = {
  href: string;
  title: string;
  style?: string;
  target?: string;
  children: React.ReactNode;
};

export type badgeType = {
  BadgeData: {
      text: string;
      highlightText?: string | number | boolean;
      style?: string;
      funcVal: any;
      funcState?: string | number | boolean | null;
      clickFunc: Function;
  }
}
