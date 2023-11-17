import React, { useEffect, useState } from 'react';
import './UserTable.css';

const UserTable = ({ users, onUserClick }) => {
    const [formattedUsers, setFormattedUsers] = useState([]);

    useEffect(() => {
        const updatedUsers = users.map((u) => {
            const originalDate = u.createdAt;

            // Convert the string to a Date object
            const dateObject = new Date(originalDate);

            // Extract the year, month, and day from the Date object
            const year = dateObject.getFullYear();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
            const day = dateObject.getDate().toString().padStart(2, '0');

            // Construct the trimmed date string
            const trimmedDate = `${year}-${month}-${day}`;

            // Create a new object with the updated createdAt value
            return { ...u, createdAt: trimmedDate };
        });

        // Update the state with the new array of formatted users
        setFormattedUsers(updatedUsers);
    }, [users]);

    return (
        <table>
            {/* Table headers */}
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>ID</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            {/* Table body */}
            <tbody>
                {formattedUsers.map((user) => (
                    <tr key={user.id} onClick={() => onUserClick(user)}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.id}</td>
                        <td>{user.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
