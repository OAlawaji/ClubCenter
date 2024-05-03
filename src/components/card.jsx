import React, {useState} from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

// rest of your code

function Card({eventData}) {
    // const isHovered = useState(false);
    // const data = {
    //     title: "Event Title",
    //     host: "Event Host",
    //     date: "June 1st, 2022 at 7:00 PM",
    //     register: "Click to register",
    //     logo: "src/assets/Activities/Activity 1 - Logo.png"
    // }

    return (

<div className="card bg-sakry min-w-0 sm:min-w-[200px] md:min-w-[300px] h-auto rounded-3xl shadow-3xl ">
    <img className="card-image w-full object-cover rounded-t-3xl"  src={eventData.logo} alt="Activity logo" /> 
   <div className="p-4 space-y-2  ">
        <h3 className="font-extrabold text-xl card-title" style={{ transition: "text-decoration 0.3s" }}>{eventData.title}</h3>
        <p className="ml-2 font-normal" > <GroupsIcon className="mr-2 mb-1"/>{eventData.host} </p>
        <p className="ml-2 font-normal " > <CalendarTodayOutlinedIcon className="mr-2 mb-1"  / > <time datetime="2022-06-01T19:00-0400">{eventData.date}</time> </p>
        <p className="ml-2 font-normal " > <AssignmentOutlinedIcon className="mr-2 mb-1"/> {eventData.register }</p>
    </div>
</div>
    )
}

export default Card;
