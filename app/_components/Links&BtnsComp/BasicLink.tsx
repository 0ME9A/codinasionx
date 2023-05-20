import { linkType } from "app/_types/Links&Btns";
import Link from "next/link";


export default function BasicLink({ href, target = "_blank", children, style, title }: linkType) {
  return (
    <Link
      href={href}
      title={title}
      referrerPolicy={"no-referrer"}
      target={target}
      className={`underline capitalize hover:opacity-50 text-black dark:text-white ${style}`}>
      {children}
    </Link>
  );
}
