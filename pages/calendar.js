import { useState } from 'react';
import {
    Countdown,
    Navbar,
    MetaTags,
    Footer,
    HelpfulLinks,
    Calendar
} from "../components";

const CalendarPage = ({ events }) => {

    return (
        <>
            <MetaTags title="HackSC 2020 Calendar" />

            <Navbar />
            <Calendar events={events} />
            <Footer />
        </>
    );
};

CalendarPage.getInitialProps = async ({ req }) => {
    const res = await fetch("https://odyssey.hacksc.com/api/public/events/list");
    const json = await res.json();
    return { events: json };
}

export default CalendarPage;