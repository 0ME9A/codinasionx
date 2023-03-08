import { IconType } from "react-icons";

export type orgHighlightCardType = {
  text: string;
  title: string;
  icon: IconType | JSX.Element;
  style: string;
};

export type orgHighlightsDataType = {
  title: string;
  text: string;
  style: string;
  icon: IconType | JSX.Element;
}[];
