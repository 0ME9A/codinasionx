import Image from "next/image";

export default function Contributors({
  contributors,
}: {
  contributors: any[];
}) {
  return (
    <div className="pt-16 mb-10 px-10 sm:px-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-center sm:text-4xl my-10">
        Our Awesome Community 💖
      </h2>
      <div className="text-center overflow-hidden justify-center ">
        {contributors.map((contributor) => (
          <Image
            key={contributor.id}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-1"
            src={`https://github.com/${contributor.login}.png`}
            alt=""
            width={64}
            height={64}
          />
        ))}
        <span className="text-gray-500 text-sm">{" + "} many more</span>
      </div>
    </div>
  );
}
