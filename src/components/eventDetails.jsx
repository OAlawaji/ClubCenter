import React, { useState } from 'react';
import Modal from 'react-modal';
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';


Modal.setAppElement('#root')

function EventDetails({ isOpen, onRequestClose, eventData }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="
      scale-in 
      flex flex-col lg:flex-row
      border-2 border-SGreenDark
     navbar
      text-sakry
      rounded-3xl
      outline-none
      z-100
      "
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'relative',
          inset: '0',
          margin: '0',
          width: 'auto',
          maxWidth: '80%',
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        //   background: 'white',
          padding: '0',

        }
      }}

    >
      {isLoading && <CircularProgress />}

      <img 
        className="object-contain min-h-1/2vh md:h-3/4vh w-auto
        rounded-3xl
        " 
        src={eventData.eventImg} 
        alt="Event" 
        onLoad={() => setIsLoading(false)}

      />
      <div className=" mx-4 flex flex-col justify-center w-auto md:w-1/2  min-h-1/4vh">  
      <h1
          className="font-bold text-lg sm:text-xl border-b-2 border-SGreenDark"
>Event Details</h1>
<p className="ml-2 font-normal text-sm sm:text-base">
          {" "}
          <GroupsIcon className="mr-2 mb-1" />
          {eventData.host}{" "}
        </p>
        <p className="ml-2 font-normal text-sm sm:text-base">
          {" "}
          <CalendarTodayOutlinedIcon className="mr-2 mb-1" />{" "}
          <time datetime="2022-06-01T19:00-0400">{eventData.date}</time>{" "}
        </p>
        <p className="ml-2 font-normal text-sm sm:text-base">
          <AssignmentOutlinedIcon className="mr-2 mb-1" /> {eventData.register}
        </p>
        <p className="ml-2 font-normal text-sm sm:text-base">
          <LocationOnIcon className="mr-2 mb-1" /> {eventData.location}
        </p>
      </div>
    </Modal>
  );
}

export default EventDetails;