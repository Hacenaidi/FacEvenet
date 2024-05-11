import React, { useState } from "react";
import './Evenements_president.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Form_evenements } from "./Form_evenement";


export const Evenements_president = () => {
    const [events, setEvents] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
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
    const [action, setAction] = useState('');
    
    const handleDialogShow = (id) => {
      if (id) {
        const clubToEdit = clubs.find(club => club.id === id);
        setEvents({ ...clubToEdit });
        setAction('edit');
      } else {
        setEvents({ id: null, name: '', description: '', field: '', department: '', manager: '', image: '',action: '' ,color: '' });
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
                    
                            <tr>
                                <td>{events.name}</td>
                                <td>{events.description}</td>
                                <td>{events.organizing_club}</td>
                                <td>{events.starting_date_time}</td>
                                <td>{events.ending_date_time}</td>
                                <td>{events.location}</td>
                                <td>{events.max_attendees}</td>
                                <td>{events.event_type}</td>
                                <td><button className={`action-button ${events.color}`} onClick={() => handleActionClick(index)}>{events.action}</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Dialog header={action === 'add' ? "Add Event" : "Edit Event"} visible={dialogVisible} style={{ width: '50vw' }} onHide={handleCloseDialog}>
                <Form_evenements action={action} formData={events} />  
                </Dialog>
        </>
    );
}
