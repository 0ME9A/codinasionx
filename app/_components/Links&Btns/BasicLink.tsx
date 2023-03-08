import { basicLinkType } from "app/_types/Links&Btns";
import Link from "next/link";

export default function BasicLink({ href, target = "_self", children, style, title }: basicLinkType) {
  return (
    <Link
      href={href}
      title={title}
      target={target}
      className={`underline hover:opacity-50 text-black dark:text-white ${style}`}
    >
      {children}
    </Link>
  );
}
