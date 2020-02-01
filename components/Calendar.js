import { useRef, useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Timeline, {
    TimelineHeaders,
    SidebarHeader,
    DateHeader,
    TimelineMarkers,
    TodayMarker
} from "react-calendar-timeline";

let defaultTimeStart = moment()
    .startOf("day")
    .add(moment().hour(), "hour");

let defaultTimeEnd = moment()
    .startOf("day")
    .add(moment().hour(), "hour")
    .add(2, "hour");

const Calendar = props => {
    const { events } = props;
    const [eventVisibility, setEventVisibility] = useState({
        visible: false,
        e: {},
        title: "Event"
    });

    const useOutsideAlerter = ref => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setEventVisibility({
                    visible: false,
                    e: eventVisibility.e,
                    title: eventVisibility.title
                });
            }
        };

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const itemRenderer = props => {
        const {
            item,
            itemContext,
            getItemProps,
            timelineContext,
            getResizeProps
        } = props;
        const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

        return (
            <div
                style={{
                    border: "3px solid #FF8379",
                    backgroundColor: "white",
                    overflow: "scroll"
                }}
                {...getItemProps({
                    style: {
                        backgroundColor: itemContext.selected ? "#FFFFFF" : "white",
                        color: item.color,
                        border: itemContext.selected ? "#FF8379" : "#FF8379",
                        overflow: "scroll",
                        borderColor: "#FF8379",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderRadius: 4,
                        borderLeftWidth: 3,
                        borderRightWidth: 3
                    },
                    onMouseDown: e => {
                        setEventVisibility({
                            visible: true,
                            e: eventVisibility.e,
                            title: item.title
                        });
                    }
                })}
            >
                {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

                <div
                    style={{
                        paddingLeft: 3,
                        overflow: "scroll",
                        textOverflow: "ellipses",
                        whiteSpace: "nowrap"
                    }}
                    className="rct-item-content"
                >
                    {itemContext.title}
                </div>

                {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
            </div>
        );
    };

    const items =
        events && events.success
            ? events.success.map(e => {
                let startTime = moment(e.startsAt)
                    .add(8, "hour")
                    .valueOf();
                let endTime = moment(e.endsAt)
                    .add(8, "hour")
                    .valueOf();
                return {
                    id: e.id + "",
                    key: e.id + "",
                    group: 1,
                    desc: e.description,
                    title: e.name + " - " + e.description,
                    start_time: startTime,
                    end_time: endTime,
                    canMove: false,
                    canResize: false,
                    className: "item-weekend",
                    bgColor: "#FFFFFF",
                    selectedBgColor: "#FFFFFF",
                    color: "#1C1C1C",
                    itemProps: {
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt,
                        style: {
                            background: "white !important",
                            border: "3px solid #FF8379 !important"
                        }
                    }
                };
            })
            : [];

    return (
        <Timeline
            groups={[
                {
                    id: 1,
                    title: "HackSC-2020",
                    rightTitle: "HackSC-2020",
                    bgColor: "#000000",
                    height: 400
                }
            ]}
            items={items}
            sidebarWidth={0}
            itemTouchSendsClick={false}
            stackItems={true}
            itemHeightRatio={0.8}
            showCursorLine
            canMove={false}
            canResize={false}
            defaultTimeStart={defaultTimeStart}
            lineHeight={60}
            defaultTimeEnd={defaultTimeEnd}
            itemRenderer={itemRenderer}
            onTimeChange={(vstart, vend, updateScroll) => {
                updateScroll(vstart, vend);
                defaultTimeStart = vstart;
                defaultTimeEnd = vend;
            }}
            style={{ width: "-webkit-fill-available", border: "hidden" }}
        >
            <TimelineHeaders
                style={{
                    border: "hidden",
                    background: "none",
                    overflow: "hidden",
                    borderRadius: "6px",
                    borderWidth: "4px"
                }}
            >
                <SidebarHeader />
                <DateHeader
                    unit="day"
                    labelFormat="dddd, LL"
                    style={{
                        height: 50,
                        backgroundColor: "white",
                        border: "none",
                        textAlign: "center",
                        paddingTop: "10px"
                    }}
                    intervalRenderer={({ getIntervalProps, intervalContext }) => {
                        return (
                            <div {...getIntervalProps()}>{intervalContext.intervalText}</div>
                        );
                    }}
                />
                <DateHeader
                    unit="hour"
                    labelFormat="HH:00"
                    style={{
                        height: 50,
                        backgroundColor: "white",
                        border: "none",
                        textAlign: "center",
                        paddingTop: "5px"
                    }}
                    intervalRenderer={({ getIntervalProps, intervalContext }) => {
                        return (
                            <div {...getIntervalProps()}>{intervalContext.intervalText}</div>
                        );
                    }}
                />
            </TimelineHeaders>
            <TimelineMarkers>
                <Popup ref={wrapperRef} display={eventVisibility}>
                    <MdClose
                        style={{ position: "absolute", top: "5px", left: "5px" }}
                        onClick={e =>
                            setEventVisibility({
                                visible: false,
                                e: eventVisibility.e,
                                title: eventVisibility.title
                            })
                        }
                    />
                    <h3>{eventVisibility.title}</h3>
                </Popup>
                <TodayMarker />
            </TimelineMarkers>
        </Timeline>
    );
};

export const Popup = styled.div`
  ${({ display = { visible: false, e: {}, title: "Event" } }) =>
        `display: ${display.visible ? "unset" : "none"};`}
  width: 90%;
  overflow: scroll;
  text-align: center;
  margin-right: 5%;
  padding: 10px;
  margin-top: 10px;
  border-width: 4px;
  border: solid;
  border-color: #ff8379;
  border-radius: 7px;
  height: 60px;
  position: absolute;
  top: 0px;
  right: -100%;
  z-index: 9999;
  background-color: white;
`;

export default Calendar;
