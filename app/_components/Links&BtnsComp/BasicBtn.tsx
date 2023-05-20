import { btnType } from "app/_types/Links&Btns";


export default function BasicBtn({ value, title, style, children, clickFunc }: btnType) {
  return (
    <button
      type={"button"}
      title={title}
      onClick={() => {
        if (value) {
          clickFunc(value)
        } else {
          clickFunc()
        }
      }}
      className={`rounded-lg flex px-2 justify-end items-center h-full text-white dark:text-black hover:bg-very-light dark:hover:bg-very-dark dark:hover:text-white hover:text-black border dark:border-black focus:bg-very-light dark:focus:bg-very-dark dark:focus:text-white focus:text-black group ${style}`}>
      {children}
    </button>
  );
}
