import { buttonType } from "app/_types/Links&Btns";

export default function Button({ func, val, style, children, title }: buttonType) {
  return (
    <button
      className={`w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase hover:text-lightII dark:hover:text-darkII bg-very-light dark:bg-very-dark focus:bg-light dark:focus:bg-dark ${style}`}
      title={title}
      type={"button"}
      onClick={() => func(val)}
    >
      {children}
    </button>
  )
}
