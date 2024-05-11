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
    contentLabel="Event Form"
    shouldCloseOnOverlayClick={true}
>
                {/* <button onClick={closeModal}>Close</button> */}
                <form onSubmit={handleSubmit}>
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
                        Event Image URL:
                        <input type="url" name="logo" value={eventData.logo} onChange={handleChange} />
                    </label>
                    <button type="submit" className="create-event-btn">Create Event</button>
                </form>
            </Modal>
        </div>
    );
}

export default EventForm;