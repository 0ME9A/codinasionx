type boxType = {
  title: string;
  style?: string;
  children?: React.ReactNode;
};
export default function Box({ title, children, style }: boxType) {
  return (
    <section className={`p-2 space-y-2 ${style}`}>
      <h3 title={title} className="border-b border-gray-500/50 py-1 text-lg text-black dark:text-white">{title}</h3>
      {children}
    </section>
  );
}
