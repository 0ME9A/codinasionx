type basicBtn = {
  title: string;
  style?: string;
  children: React.ReactNode;
  clickFunc: (e: any) => void;
  value: number | string | boolean | {};
};

export default function BasicBtn({
  value,
  title,
  style,
  children,
  clickFunc,
}: basicBtn) {
  return (
    <button
      type={"button"}
      title={title}
      onClick={() => clickFunc(value)}
      className={` rounded-lg flex px-2 justify-end items-center h-full text-white dark:text-black hover:bg-very-light dark:hover:bg-very-dark dark:hover:text-white hover:text-black border dark:border-black focus:bg-very-light dark:focus:bg-very-dark dark:focus:text-white focus:text-black ${style}`}
    >
      {children}
    </button>
  );
}
