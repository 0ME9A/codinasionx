import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { RiFocus2Line, RiLoader3Line } from "react-icons/ri";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { eventIconsType } from "app/_types/Events";
import { CiBullhorn } from "react-icons/ci";

export const icons: eventIconsType | any = {
  ab: {
    type: <IoIosCloseCircle style={{ fontSize: "2.25rem" }} title="Aborted" />,
    color: "rgb(239 68 68)",
  },
  an: {
    type: <CiBullhorn style={{ fontSize: "2.25rem" }} title="Announcement" />,
    color: "rgb(234 179 8)",
  },
  dn: {
    type: (
      <IoIosCheckmarkCircle style={{ fontSize: "2.25rem" }} title="Completed" />
    ),
    color: "rgb(34 197 94)",
  },
  hd: {
    type: (
      <BsFillPauseCircleFill style={{ fontSize: "2.25rem" }} title="Pending" />
    ),
    color: "rgb(107 114 128)",
  },
  lm: {
    type: <RiLoader3Line style={{ fontSize: "2.25rem" }} title="Pending" />,
    color: "rgb(107 114 128)",
  },
  pr: {
    type: <RiFocus2Line style={{ fontSize: "2.25rem" }} title="Progress" />,
    color: "rgb(59 130 246 )",
  },
};
