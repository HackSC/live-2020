import {
  Countdown,
  Navbar,
  MetaTags,
  Footer,
  LinksAndTasks,
  LinkToSchedule
} from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 Live" />

      <Navbar />
      <Countdown />
      <LinkToSchedule />
      <LinksAndTasks />
      <Footer />
    </>
  );
};

export default Landing;
