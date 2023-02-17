import Link from "next/link";

type bLinkType = {
  href: string;
  style?: string;
  target?: string;
  children: React.ReactNode;
};
export default function BasicLink({
  href,
  target = "_self",
  children,
  style,
}: bLinkType) {
  return (
    <Link
      href={href}
      target={target}
      className={`underline hover:opacity-50 text-black dark:text-white ${style}`}
    >
      {children}
    </Link>
  );
}
