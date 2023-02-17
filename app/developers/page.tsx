import Devs from "app/_components/DevsComp/Devs";

export default function Page() {
  return (
    <div className="relative z-10">
      <Devs forward={false} header={false} />
    </div>
  );
}
