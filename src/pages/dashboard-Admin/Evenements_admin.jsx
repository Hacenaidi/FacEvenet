import React, { useState } from "react";
import './Evenements_admin.css';

export const Evenements_admin = () => {
    const [events, setEvents] = useState([
        { name: 'Event 1', description: 'Description 1', organizing_club: 'Club 1', starting_date_time: '2024-05-15T10:00', ending_date_time: '2024-05-15T12:00', location: 'Location 1', max_attendees: 50, event_type: 'Type 1', cover: 'cover1.jpg', action: 'Refuse', color: 'red' },
        { name: 'Event 2', description: 'Description 2', organizing_club: 'Club 2', starting_date_time: '2024-05-16T10:00', ending_date_time: '2024-05-16T12:00', location: 'Location 2', max_attendees: 100, event_type: 'Type 2', cover: 'cover2.jpg', action: 'Wait', color: 'orange' },
        { name: 'Event 3', description: 'Description 3', organizing_club: 'Club 3', starting_date_time: '2024-05-17T10:00', ending_date_time: '2024-05-17T12:00', location: 'Location 3', max_attendees: 75, event_type: 'Type 3', cover: 'cover3.jpg', action: 'Accept', color: 'green' }
    ]);

    const handleActionClick = (index) => {
        const updatedEvents = [...events];
        switch (updatedEvents[index].action) {
            case 'Refuse':
                updatedEvents[index].action = 'Wait';
                updatedEvents[index].color = 'orange';
                break;
            case 'Wait':
                updatedEvents[index].action = 'Accept';
                updatedEvents[index].color = 'green';
                break;
            case 'Accept':
                updatedEvents[index].action = 'Refuse';
                updatedEvents[index].color = 'red';
                break;
            default:
                break;
        }
        setEvents(updatedEvents);
    };

    return (
        <>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Evenements</h1>
                </div>
                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Search..." type="text" />
                </div>
                <div className="products-area-wrapper tableView">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Organizing Club</th>
                                <th>Starting Date & Time</th>
                                <th>Ending Date & Time</th>
                                <th>Location</th>
                                <th>Max Attendees</th>
                                <th>Event Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.name}</td>
                                    <td>{event.description}</td>
                                    <td>{event.organizing_club}</td>
                                    <td>{event.starting_date_time}</td>
                                    <td>{event.ending_date_time}</td>
                                    <td>{event.location}</td>
                                    <td>{event.max_attendees}</td>
                                    <td>{event.event_type}</td>
                                    <td><button className={`action-button ${event.color}`} onClick={() => handleActionClick(index)}>{event.action}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
