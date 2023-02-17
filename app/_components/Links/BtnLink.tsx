import Link from "next/link";

type linkType = {
  url: string;
  target?: string;
  style?: string;
  children?: React.ReactNode;
};
export default function BtnLink({
  url,
  target = "_self",
  style,
  children,
}: linkType) {
  return (
    <Link
      href={url}
      className={`p-2 px-4 flex items-center justify-center gap-2 font-medium rounded-full border-black dark:border-white border-2 bg-light dark:bg-dark group dark:text-white dark:shadow-darkShadow-md shadow-lightShadow-md hover:rounded-full ${style}`}
      target={target}
    >
      {children}
    </Link>
  );
}
