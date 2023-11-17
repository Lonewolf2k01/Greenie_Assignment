import React, { useEffect, useState } from 'react';
import "./details.css"

const UserDetailsPopup = ({ user, onClose, onGenerateReport }) => {

    const [date, setDate] = useState("")

    useEffect(() => {
        const originalDate = user.createdAt

        // Convert the string to a Date object
        const dateObject = new Date(originalDate);

        // Extract the year, month, and day from the Date object
        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const day = dateObject.getDate().toString().padStart(2, '0');

        // Construct the trimmed date string
        const trimmedDate = `${year}-${month}-${day}`
        setDate(trimmedDate)
    }, [])


    return (
        <div className='popup-overlay'>
            {/* User Details Popup */}
            <div className='user-details-popup'>
                

                {/* Display user details */}
                <h2 className='user-title'>{user.username}</h2>
                <p className='user-info'>ID: {user.id}</p>
                <p className='user-info'>Email: {user.email}</p>
                <p className='user-info'>Phone: {user.phone}</p>
                <p className='user-info'>Creation Date: {date}</p>

                {/* Button to generate a report */}
                <button className='generate-report-btn' onClick={onGenerateReport}>Generate Report</button>

                {/* Button to close the popup */}
                <button className='close-popup-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UserDetailsPopup;
