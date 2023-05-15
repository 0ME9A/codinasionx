type boxType = {
  title: string;
  titlePlus?: string;
  style?: string;
  children?: React.ReactNode;
};
export default function Box({ title, titlePlus='', children, style }: boxType) {
  return (
    <section className={`p-2 space-y-2 text-black dark:text-white shadow-xl rounded-2xl lg:rounded-3xl shadow-gray-500/10 ${style}`}>
      <h3 title={`${title} ${titlePlus}`} className="border-b border-gray-500/50 py-1 text-lg text-black dark:text-white">{title}</h3>
      {children}
    </section>
  );
}
