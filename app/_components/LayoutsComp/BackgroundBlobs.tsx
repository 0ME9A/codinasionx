import Image from "next/image";

export default function BackgroundBlobs() {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-10 bg-gradient-to-tr from-very-light to-lightII dark:from-very-dark dark:to-darkII">
      <Image
        src={"/img/chakra.png"}
        alt="background blob"
        width={500}
        height={500}
        className="opacity-20 scale-[2] invert dark:invert-0 animate-chakra-spin"
        />   
    </div>
  );
}