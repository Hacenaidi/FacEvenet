import React, { useState } from "react";
import './Evenements_president.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Form_evenements } from "./Form_evenement";


export const Evenements_president = () => {
    const [events, setEvents] = useState([
        { id:1,name: 'Event 1', description: 'Description 1', organizing_club: 'Club 1', starting_date_time: '2024-05-15T10:00', ending_date_time: '2024-05-15T12:00', location: 'Location 1', max_attendees: 50, event_type: 'Type 1', cover: 'cover1.jpg', action: 'Refuse', color: 'red' },
        { id:3,name: 'Event 2', description: 'Description 2', organizing_club: 'Club 2', starting_date_time: '2024-05-16T10:00', ending_date_time: '2024-05-16T12:00', location: 'Location 2', max_attendees: 100, event_type: 'Type 2', cover: 'cover2.jpg', action: 'Wait', color: 'orange' },
        { id:2,name: 'Event 3', description: 'Description 3', organizing_club: 'Club 3', starting_date_time: '2024-05-17T10:00', ending_date_time: '2024-05-17T12:00', location: 'Location 3', max_attendees: 75, event_type: 'Type 3', cover: 'cover3.jpg', action: 'Accept', color: 'green' }
    ]);
    const [formData, setFormData] = useState({
        id : null,
        name: '',
        description: '',
        organizing_club: '',
        starting_date_time: '',
        ending_date_time: '',
        location: '',
        max_attendees: '',
        event_type: '',
        cover: '',


    })

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
    const [dialogVisible, setDialogVisible] = useState(false);
   
    const [action, setAction] = useState('');
    
    const handleDialogShow = (id) => {
      if (id) {
        const eventToEdit = events.find(event => event.id === id);
        setFormData(eventToEdit);
        setAction('edit');
      } else {
        setFormData({  id : null,
            name: '',
            description: '',
            organizing_club: '',
            starting_date_time: '',
            ending_date_time: '',
            location: '',
            max_attendees: '',
            event_type: '',
            cover: '',});
        setAction('add');
      }
      setDialogVisible(true);
    };
  
    const handleCloseDialog = () => {
      setDialogVisible(false);
    };
  

    return (
        <>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Evenements</h1>
                    <Button label="Add Evenements" icon="pi pi-plus" className="app-content-headerButton" onClick={() => handleDialogShow(null)} />
                </div>
                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Search..." type="text" />
                </div>
                <div className="products-area-wrapper tableView">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>        
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
                        {events.map((event) => (
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    
                                    <td>{event.organizing_club}</td>
                                    <td>{event.starting_date_time}</td>
                                    <td>{event.ending_date_time}</td>
                                    <td>{event.location}</td>
                                    <td>{event.max_attendees}</td>
                                    <td>{event.event_type}</td>
                                    <td>
                                        <button className={`action-button ${event.color}`} onClick={() => handleActionClick(event.id)}>{event.action}</button>
                                        <button className="action-button green" onClick={() => handleDialogShow(event.id)}>Edit</button>
                                        </td>                           
                                 </tr>
                            ))}
                                                        
                        </tbody>
                    </table>
                </div>
            </div>
            <Dialog header={action === 'add' ? "Add Event" : "Edit Event"} visible={dialogVisible} style={{ width: '50vw' }} onHide={handleCloseDialog}>
                <Form_evenements action={action} formData={formData} />  
                </Dialog>
        </>
    );
}
