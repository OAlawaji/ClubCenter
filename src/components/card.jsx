import React, {useState} from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

// rest of your code

function Card() {
    const isHovered = useState(false);
    const data = {
        title: "Event Title",
        host: "Event Host",
        date: "June 1st, 2022 at 7:00 PM",
        register: "Click to register",
        logo: "src\assets\Activities\Activity 1 - Logo.png"
    }

    return (

<div className="card bg-white min-w-0 sm:min-w-[200px] md:min-w-[300px] min-h-0 sm:min-h-[200px] md:min-h-[400px] xl:min-h-content border-4 rounded-lg shadow-lg">
    <img className="card-image" src="src\assets\Activities\Activity 1 - Logo.png" alt="Activity logo" />
    <div className="p-4 space-y-2">
        <h3 className="font-bold text-xl card-title" style={{ transition: "text-decoration 0.3s" }}>{data.title}</h3>
        <p className="ml-2 font-thin"> <GroupsIcon/>{data.host} </p>
        <p className="ml-2 font-thin"> <CalendarTodayOutlinedIcon / > <time datetime="2022-06-01T19:00-0400">{data.date}</time> </p>
        <p className="ml-2 font-thin"> <AssignmentOutlinedIcon/> {data.register }</p>
    </div>
</div>
    )
}

export default Card;
