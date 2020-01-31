import {
  Countdown,
  Navbar,
  MetaTags,
  Footer,
  HelpfulLinks,
  Maps
} from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 Maps" />

      <Navbar />
      <Maps />
      <Footer />
    </>
  );
};

export default Landing;
