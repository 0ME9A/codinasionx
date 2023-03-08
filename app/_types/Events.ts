import { Dispatch, SetStateAction } from "react";

export type eventsType = {
  id: number;
  type: string;
  title: string;
  description: string;
  url: string;
  date: string;
};

export type eventsBtnType = {
  type: string;
  isBtn: boolean;
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

export type eventsDataType = {
  id: number;
  type: string;
  title: string;
  description: string;
  url: string;
  date: string;
}[];

export type eventIconsType = {
  ab: {
    type: JSX.Element;
    color: string;
  };
  an: {
    type: JSX.Element;
    color: string;
  };
  dn: {
    type: JSX.Element;
    color: string;
  };
  hd: {
    type: JSX.Element;
    color: string;
  };
  lm: {
    type: JSX.Element;
    color: string;
  };
  pr: {
    type: JSX.Element;
    color: string;
  };
};
