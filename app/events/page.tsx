import { Metadata } from "next";
import Container from "app/_components/LayoutsComp/Container";
// import { container } from "app/_framerVariants/framerVariants";
// import { random } from "app/_functions/functions";
// import { events } from "@/data/events";
// import { motion } from "framer-motion";
// import Loading from "app/_components/Loading/Loading";
// import Event from "app/_components/EventsComp/Event";

export const metadata: Metadata = {
  title: `Events || Codinasion`,
  description: `Codinasion's events cover a range of activities, from new project announcements and upgrades to code help sessions and meeting announcements. As a developer community, Codinasion's events provide opportunities for members to engage with one another and collaborate on open-source projects.`,
};

export default function page() {

  return (
    <Container>
      <h1 className={`w-fit pt-32 px-2 dark:text-white text-black mx-auto h-screen`}>Events are comming soon. ⏳</h1>
    </Container>
  )
  // return events ? (
  //   <motion.div
  //     variants={container}
  //     initial={"hidden"}
  //     whileInView={"show"}
  //     viewport={{ once: true, amount: 0.1 }}
  //     className={`w-fit pt-32 px-2 dark:text-white text-black mx-auto`}>
  //     {events.map((item) => (
  //       <Event
  //         key={random()}
  //         id={item.id}
  //         type={item.type}
  //         title={item.title}
  //         description={item.description}
  //         url={item.url}
  //         date={item.date}
  //       />
  //     ))}
  //     {/* <EventBtn
  //       type={"lm"}
  //       isBtn={false}
  //       state={eventLimit}
  //       setState={setLimit}
  //     /> */}
  //   </motion.div>
  // ) : (
  //   <Loading />
  // );
}
