import ProgramAsideSk from "app/_components/Skeleton/Program/ProgramAsideSk";
import MarkdownPreview from "app/_components/Skeleton/Program/MarkdownPreviewSk";

export default function Loading() {
  return (
    <section className={"flex lg:container mx-auto p-2 gap-3 relative border-red-500"}>
      <MarkdownPreview />
      <ProgramAsideSk />
    </section>
  );
}
