import { siteMetadataX } from "@/data/SiteMetaData";

export default function Head() {
  return (
    <>
      <title key="title">{`${siteMetadataX.events.title}`}</title>
      <meta
        key="description"
        name="description"
        content={`${siteMetadataX.events.description}`}
      />
    </>
  );
}
