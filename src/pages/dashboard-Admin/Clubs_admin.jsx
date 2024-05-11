import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import './clubs_admin.css';
import { Form_clubs } from "./Form_clubs";

export const Clubs_admin = () => {
    const [clubs, setClubs] = useState([
        { id: 1, name: 'Club 1', description: 'Description 1', field: 'Field 1', department: 'Department 1', manager: 'Manager 1', image: 'https://example.com/image1.jpg' },
       
      ]);
      const [dialogVisible, setDialogVisible] = useState(false);
      const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
        field: '',
        department: '',
        manager: '',
        image: ''
      });
      const managers = [
        { label: 'John Doe', value: 'John Doe' },
        { label: 'Jane Doe', value: 'Jane Doe' },
        { label: 'Alice Smith', value: 'Alice Smith' },
        { label: 'Bob Johnson', value: 'Bob Johnson' },
    ];
      const [action, setAction] = useState('');
    
      const handleDialogShow = (id) => {
        if (id) {
          const clubToEdit = clubs.find(club => club.id === id);
          setFormData({ ...clubToEdit });
          setAction('edit');
        } else {
          setFormData({ id: null, name: '', description: '', field: '', department: '', manager: '', image: '' });
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
                    <h1 className="app-content-headerText">Clubs</h1>
                    <Button label="Add Clubs" icon="pi pi-plus" className="app-content-headerButton" onClick={() => handleDialogShow(null)} />
                </div>
                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Search..." type="text" />
                </div>
                <div className="clubs">
                    <div className="flex-row">
                        

                        <div className="col" >
                            <div className="card">
                                <img src="https://picsum.photos/200" alt="" className="card-image" />
                                <p className="card-title">Orange</p>
                                <p className="card-title">President : follen folani</p>
                                <p className="card-body">Member : 80 </p>
                                <button className="btn btn-delete" onClick={() => { confirm("Are you sure!") }}>
                                    <i className="pi pi-trash"></i>
                                </button>
                                <Button className="btn btn-edit" onClick={() => handleDialogShow(clubs.id)}>
                                    <i className="pi pi-pencil"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog header={action === 'add' ? "Add Clubs" : "Edit Clubs"} visible={dialogVisible} style={{ width: '50vw' }} onHide={handleCloseDialog}>
                <Form_clubs  action={action} formData={formData} />
            </Dialog>
        </>
    );
}
