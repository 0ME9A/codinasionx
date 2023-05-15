import logo from "@/public/icons/favicon.ico";
import apple from "@/public/icons/apple-touch-icon.png"

export default function Head() {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta charSet="UTF-8" />
      <link rel="icon" href={`${logo}`} />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href={`${apple}`} />
      <link rel="manifest" href={"/manifest.json"} />
      <title key="title">{`Codinasion`}</title>
      <meta
        key="description"
        name="description"
        content={`Join Codinasion - a community for developers, where you can learn, connect, and share your knowledge and skills.`}
      />
    </>
  );
}
