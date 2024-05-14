import React, { useState } from "react";
import Modal from 'react-modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EventForm from './eventForm.jsx'; // Import the EventForm component
Modal.setAppElement('#root')

function addCard({onSubmit}) {
    const [isFormOpen, setIsFormOpen] = useState(false); // Declare the isFormOpen state variable

    const openForm = () => {
        setIsFormOpen(true);
    }

    const closeForm = () => {
        setIsFormOpen(false);
    }

    return (
        <>
            <div
                className="
                hover:text-sakry-hover
                bg-SGreenDark min-w-0 sm:min-w-[200px] md:min-w-[300px] 
                h-auto rounded-3xl 
                shadow-3xl flex flex-row md:flex-col  justify-center items-center"
                onClick={openForm}
                style={{ transition: "transform 0.3s", cursor: "pointer" }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            
            >
                <AddCircleIcon style={{ fontSize: "5rem" }}

                />
                                <p className="
   
                                text-2xl">
                Create New Event
                </p>
            </div>
            {isFormOpen && <EventForm
                onSubmit={onSubmit}
                isOpen={isFormOpen}
                onRequestClose={closeForm}
            />}
        </>
    );
}

export default addCard;
