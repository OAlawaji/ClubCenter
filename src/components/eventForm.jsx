import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Accessibility

function EventForm({ onSubmit, isOpen, onRequestClose }) {
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
         <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="
                scale-in
                flex flex-col
                border-2 border-SGreenDark
                bg-white
                shadow-2xl
                text-sakry
                rounded-3xl
                outline-none
                z-60
                max-w-lg
                w-full
                mx-auto
                p-0
            "
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                },
                content: {
                    position: 'relative',
                    inset: '0',
                    margin: '0',
                    padding: '0',
                    border: 'none',
                    background: 'none',
                },
            }}
        >
<div className="bg-sakry rounded-3xl shadow-2xl border border-SGreenLight">
                <div className="flex justify-end p-4">
                    <button
                        onClick={onRequestClose}
                        className="text-gray-400 hover:text-SGreenDark text-2xl font-bold transition-colors duration-150"
                        aria-label="Close"
                        type="button"
                    >
                        &times;
                    </button>
                </div>
                <form
                    className="flex flex-col gap-6 px-8 pb-8"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-center mb-2 text-SGreenDark">Create New Event</h2>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Host</label>
                        <input
                            type="text"
                            name="host"
                            value={eventData.host}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            placeholder="Event Host"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Date & Time</label>
                        <input
                            type="datetime-local"
                            name="date"
                            value={eventData.date}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Registration Link</label>
                        <input
                            type="url"
                            name="register"
                            value={eventData.register}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            placeholder="https://..."
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={eventData.location}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            placeholder="KFUPM Auditorium"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Event Image URL</label>
                        <input
                            type="url"
                            name="eventImg"
                            value={eventData.eventImg}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            placeholder="https://image-link.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm text-gray-700">Event Logo (Square)</label>
                        <input
                            type="url"
                            name="logo"
                            value={eventData.logo}
                            onChange={handleChange}
                            className="input input-bordered rounded-lg px-3 py-2 border border-gray-300 focus:border-SGreenDark focus:outline-none"
                            placeholder="https://logo-link.com"
                        />
                    </div>
                    <button
                        className="mt-4 px-6 py-3 rounded-xl font-bold bg-SGreenDark text-white shadow-lg hover:bg-SGreenLight transition-colors duration-200 text-lg"
                        type="submit"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default EventForm;