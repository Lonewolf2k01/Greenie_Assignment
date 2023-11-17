import React, { useState,useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserTable from '../UserDetails/userTable/UserTable';
import UserDetailsPopup from '../UserDetails/UserDetailsPopup';
import AccountCreationForm from '../AccountCreation/AccountCreationForm';
import "./dash.css"
import axios from "axios"
const Dashboard = () => {
    
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        axios.get("http://localhost:5001/user/getUsers")
            .then(data => setUsers(data.data))
    }

    const changeDate = (users) => {
        users.map((u) => {
            const originalDate = u.createdAt;

            // Convert the string to a Date object
            const dateObject = new Date(originalDate);

            // Extract the year, month, and day from the Date object
            const year = dateObject.getFullYear();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
            const day = dateObject.getDate().toString().padStart(2, '0');

            // Construct the trimmed date string
            const trimmedDate = `${year}-${month}-${day}`
            
            u.createdAt = trimmedDate

            console.log(u);
        })
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    // State for the selected user and popup visibility
    const [selectedUser, setSelectedUser] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setIsPopupOpen(true);
    };

    const handleGenerateReport = () => {
        // Implement report generation logic here
        console.log(`Generating report for ${selectedUser.username}`);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleAccountCreationSubmit = (formData) => {
        // Implement account creation logic here
        console.log('Creating account with data:', formData);
    };

    return (
        <div>
            {/* Navigation */}
            <nav className='navbar'>
                <NavLink to="/user-details" activeClassName="active">User Details</NavLink>
                <NavLink to="/account-creation" activeClassName="active">Account Creation</NavLink>
            </nav>

            {/* Tab content */}
            <Routes>
                <Route path="/user-details" element={<UserTable users={users} onUserClick={handleUserClick} />} />
                <Route path="/account-creation" element={<AccountCreationForm onSubmit={handleAccountCreationSubmit} />} />
            </Routes>

            {isPopupOpen && (
                <UserDetailsPopup
                    user={selectedUser}
                    onClose={handlePopupClose}
                    onGenerateReport={handleGenerateReport}
                />
            )}
        </div>
    );
};

export default Dashboard;
