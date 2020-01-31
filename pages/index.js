import {
  Countdown,
  Navbar,
  MetaTags,
  Footer,
  LinksAndTasks,
} from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 Live" />

      <Navbar />
      <Countdown />
      <LinksAndTasks />
      <Footer />
    </>
  );
};

export default Landing;
