export default function BackgroundLight() {
  return (
    <div className="absolute bg-very-light dark:bg-very-dark w-full h-full top-0 left-0 flex justify-around">
      <div className="w-[2px] h-full dark:bg-black bg-white flex flex-col justify-around items-center">
        {Array.from(Array(5).keys()).map((item) => (
          <span
          key={crypto.randomUUID()}
          className="w-4 glowI aspect-square border border-white block bg-white rounded-full"
          ></span>
        ))}
      </div>
      <div className="w-[2px] h-full dark:bg-black bg-white flex flex-col justify-around items-center">
        {Array.from(Array(4).keys()).map((item) => (
          <span
          key={crypto.randomUUID()}
          className="w-4 glowI aspect-square border border-white block bg-white rounded-full"
          ></span>
        ))}
      </div>
      <div className="w-[2px] h-full dark:bg-black bg-white flex flex-col justify-around items-center">
        {Array.from(Array(3).keys()).map((item) => (
          <span
          key={crypto.randomUUID()}
          className="w-4 glowI aspect-square border border-white block bg-white rounded-full"
          ></span>
        ))}
      </div>
      <div className="w-[2px] h-full dark:bg-black bg-white flex flex-col justify-around items-center">
        {Array.from(Array(6).keys()).map((item) => (
          <span
            key={Math.random() * 50}
            className="w-4 glowI aspect-square border border-white block bg-white rounded-full"
          ></span>
        ))}
      </div>
    </div>
  );
}
