import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function EventForm({ onSubmit, isOpen, onRequestClose }) {
    // const [modalIsOpen, setModalIsOpen] = useState(true);
    const [eventData, setEventData] = useState({
        host: '',
        date: '',
        register: '',
        location: '',
        eventImg: '',
        logo: '',
    });
    const handleChange = (event) => {
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(eventData);
        onRequestClose();
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className="
                scale-in 
                flex flex-row
                border-2 border-SGreenDark
                navbar
                text-sakry
                rounded-3xl
                outline-none
                z-60
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
                    },
                }}
                //shouldCloseOnOverlayClick={true}
            >
                {/* <button onClick={closeModal}>Close</button> */}
                <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit}>
                    <label>
                        Host:
                        <input type="text" name="host" value={eventData.host} onChange={handleChange} />
                    </label>
                    <label>
                        Date:
                        <input type="datetime-local" name="date" value={eventData.date} onChange={handleChange} />
                    </label>
                    <label>
                        Registration Link:
                        <input type="url" name="register" value={eventData.register} onChange={handleChange} />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" value={eventData.location} onChange={handleChange} />
                    </label>
                    <label>
                        Event Image URL:
                        <input type="url" name="eventImg" value={eventData.eventImg} onChange={handleChange} />
                    </label>
                    <label>
                        Event Image Logo (Square):
                        <input type="url" name="logo" value={eventData.logo} onChange={handleChange} />
                    </label>
                    <button className="px-4 md:px-4 py-2 md:py-2 rounded-xl font-xl
                    w-auto
                inline-flex mx-auto bg-SGreenDark shadow-3xl hover:bg-transparent transition-colors duration-200 sm:py-3 sm:px-6" >
                        Create Event
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default EventForm;