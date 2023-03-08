export type buttonType = {
  children: React.ReactNode;
  localState?: boolean;
  style?: string;
  val: any;
  title: string;
  fun: (devs: any, dispatch?: any) => Promise<void> | void;
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
