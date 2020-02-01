import { useState } from "react";
import {
  Countdown,
  Navbar,
  MetaTags,
  Footer,
  HelpfulLinks,
  Schedule
} from "../components";

const SchedulePage = ({ events }) => {
  return (
    <>
      <MetaTags title="HackSC 2020 Schedule" />

      <Navbar />
      <Schedule events={events} />
      <Footer />
    </>
  );
};

SchedulePage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://odyssey.hacksc.com/api/public/events/list");
  const json = await res.json();
  return { events: json };
};

export default SchedulePage;
