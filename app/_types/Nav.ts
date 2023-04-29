import { Dispatch, SetStateAction } from "react";

export type themeBtnType = {
  activeTheme: string;
  dispatch: () => void;
};

export type menuBtnType = {
  setState: Dispatch<SetStateAction<boolean>>;
  state: boolean;
};

export type menuType = {
  activeTab: string;
  setState: Dispatch<SetStateAction<boolean>>;
};

export type projectNavType = {
  api: { data: any, status: number }
  layout: { name: string, slug: string, aside?: boolean };
}