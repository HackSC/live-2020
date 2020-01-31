import {
  Countdown,
  Navbar,
  MetaTags,
  Details,
  Verticals,
  Footer,
  HelpfulLinks,
  DirectoryIntro,
  Directory
} from "../components";

const API = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 API Directory" />

      <Navbar />
      <DirectoryIntro/>
      <Directory/>
      <Footer />
    </>
  );
};

export default API;
