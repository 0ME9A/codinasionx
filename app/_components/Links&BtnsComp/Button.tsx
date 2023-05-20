import { btnType } from "app/_types/Links&Btns";


export default function Button({ clickFunc, value, style, children, title }: btnType) {
  return (
    <button
      className={`w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase hover:text-lightII dark:hover:text-darkII bg-very-light dark:bg-very-dark focus:bg-light dark:focus:bg-dark ${style}`}
      title={title}
      type={"button"}
      onClick={() => clickFunc(value)}>
      {children}
    </button>
  )
}
