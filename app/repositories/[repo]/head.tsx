import { siteMetadataX } from "@/data/SiteMetaData";

type headType = { params: { repo: string } }
export default function Head({ params }: headType) {
  console.log(params)
  return (
    <>
      <title key="title">{params.repo}</title>
      <meta
        key="description"
        name="description"
        content={`${siteMetadataX.repos.description}`}
      />
    </>
  );
}
