type backgroundGradientType = {
  children: React.ReactNode;
  style?: string;
};
export default function BackgroundGradient({
  children,
  style,
}: backgroundGradientType) {
  return (
    <div
      className={`relative bg-gradient-to-br from-transparent mt-10 via-very-light to-light dark:via-very-dark dark:to-dark ${style}`}
    >
      {children}
    </div>
  );
}
