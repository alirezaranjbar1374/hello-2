import { parseISO, formatDistanceToNow, sub } from "date-fns-jalali";

const ShowTime = ({ timestamp }) => {
    // console.log("ayyyval",sub(new Date(), { minutes: 1 }).toISOString(),"------------",timestamp);
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        console.log("date",date);
        const time = formatDistanceToNow(date);
        timeAgo = `${time} قبل`;
    }

    return (
        <span>
            <i>{timeAgo}</i> &nbsp;
        </span>
    );
};

export default ShowTime;
