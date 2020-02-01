import { useState } from 'react';
import {
    Countdown,
    Navbar,
    MetaTags,
    Footer,
    HelpfulLinks,
    Calendar
} from "../components";

const CalendarPage = () => {

    const [events, setEvents] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://odyssey.hacksc.com/api/public/events/list");
            res
                .json()
                .then(res => setEvents({ success: res }))
                .catch(err => setEvents({ errors: err }));
        }

        fetchData();
    });

    console.log(events);
    return (
        <>
            <MetaTags title="HackSC 2020 Calendar" />

            <Navbar />
            <Calendar events />
            <Footer />
        </>
    );
};

export default CalendarPage;