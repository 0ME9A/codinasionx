type buttonType = {
  children: React.ReactNode;
  localState?: boolean;
  style?: string;
  val: any;
  fun: (devs: any, dispatch?: any) => Promise<void> | void;
};
export default function Button({
  fun,
  val,
  style,
  children,
  localState = false,
}: buttonType) {
  return localState ? (
    <button
      className={`w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase hover:text-lightII dark:hover:text-darkII bg-very-light dark:bg-very-dark focus:bg-dark ${style}`}
      onClick={() => fun(val)}
    >
      {children}
    </button>
  ) : (
    <button
      className={`w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase hover:text-lightII dark:hover:text-darkII bg-very-light dark:bg-very-dark focus:bg-dark ${style}`}
      onClick={() => fun(val.value, val.dispatch)}
    >
      {children}
    </button>
  );
}
