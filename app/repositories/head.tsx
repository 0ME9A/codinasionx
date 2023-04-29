import { siteMetadataX } from "@/data/SiteMetaData";

export default function Head() {
  return (
    <>
      <title key="title">{`${siteMetadataX.repos.title}`}</title>
      <meta
        key="description"
        name="description"
        content={`${siteMetadataX.repos.description}`}
      />
    </>
  );
}
