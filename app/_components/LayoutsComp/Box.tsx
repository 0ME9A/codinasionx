type boxType = {
  title: string;
  style?: string;
  children?: React.ReactNode;
};
export default function Box({ title, children, style }: boxType) {
  return (
    <div className={`p-2 space-y-2 ${style}`}>
      <h3 className="border-b border-gray-500/50 py-1 text-lg">{title}</h3>
      {children}
    </div>
  );
}
