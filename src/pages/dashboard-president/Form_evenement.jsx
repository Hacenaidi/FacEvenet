import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import './style_from.css';

export const Form_evenements = ({ action, formData }) => {
    

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        organizing_club: '',
        starting_date_time: '',
        ending_date_time: '',
        location: '',
        max_attendees: '',
        event_type: '',
        cover: ''
    });

    const organizingClubs = [
        { label: 'Club A', value: 'Club A' },
        { label: 'Club B', value: 'Club B' },
        { label: 'Club C', value: 'Club C' },
        { label: 'Club D', value: 'Club D' },
    ];

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        formData[fieldName] = value; // Update the form data
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: ''
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.files[0];
        formData['cover'] = file; // Update the form data
        setErrors(prevState => ({
            ...prevState,
            cover: ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValid = true;
        const newErrors = {};

        // Validation des champs
        if (formData.name === '') {
            newErrors.name = 'Name is required';
            formValid = false;
        }
        if (formData.description === '') {
            newErrors.description = 'Description is required';
            formValid = false;
        }
        if (formData.organizing_club === '') {
            newErrors.organizing_club = 'Organizing Club is required';
            formValid = false;
        }
        if (formData.starting_date_time === '') {
            newErrors.starting_date_time = 'Starting Date Time is required';
            formValid = false;
        }
        if (formData.ending_date_time === '') {
            newErrors.ending_date_time = 'Ending Date Time is required';
            formValid = false;
        }
        if (formData.location === '') {
            newErrors.location = 'Location is required';
            formValid = false;
        }
        if (formData.max_attendees === '') {
            newErrors.max_attendees = 'Max Attendees is required';
            formValid = false;
        }
        if (formData.event_type === '') {
            newErrors.event_type = 'Event Type is required';
            formValid = false;
        }
        if (!formData.cover) {
            newErrors.cover = 'Cover is required';
            formValid = false;
        }
        console.log(formData);
        // Si le formulaire est valide, soumettre les données
        if (formValid) {
            // Handle form submission logic here
            console.log(formData);
        } else {
            // Afficher les erreurs
            setErrors(newErrors);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">{action === 'add' ? 'Add' : 'Edit'} Event</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-field">
                    <label htmlFor="name" className="form-label">Name</label>
                    <InputText id="name" value={formData.name} onChange={(e) => handleChange(e, 'name')} className="form-input" />
                    {errors.name && <small className="form-error">{errors.name}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="description" className="form-label">Description</label>
                    <InputTextarea  id="description" value={formData.description} onChange={(e) => handleChange(e, 'description')} className="form-input" rows={5} cols={30} />
         
                    {errors.description && <small className="form-error">{errors.description}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="organizing_club" className="form-label">Organizing Club</label>
                    <Dropdown id="organizing_club" value={formData.organizing_club} options={organizingClubs} onChange={(e) => handleChange(e, 'organizing_club')} optionLabel="label" className="form-input" placeholder="Select an organizing club" />
                    {errors.organizing_club && <small className="form-error">{errors.organizing_club}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="starting_date_time" className="form-label">Starting Date Time</label>
                    <input type="datetime-local" id="starting_date_time" value={formData.starting_date_time} onChange={(e) => handleChange(e, 'starting_date_time')} className="form-input" />
                    {errors.starting_date_time && <small className="form-error">{errors.starting_date_time}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="ending_date_time" className="form-label">Ending Date Time</label>
                    <input type="datetime-local" id="ending_date_time" value={formData.ending_date_time} onChange={(e) => handleChange(e, 'ending_date_time')} className="form-input" />
                    {errors.ending_date_time && <small className="form-error">{errors.ending_date_time}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="location" className="form-label">Location</label>
                    <InputText id="location" value={formData.location} onChange={(e) => handleChange(e, 'location')} className="form-input" />
                    {errors.location && <small className="form-error">{errors.location}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="max_attendees" className="form-label">Max Attendees</label>
                    <input type="number" id="max_attendees" value={formData.max_attendees} onChange={(e) => handleChange(e, 'max_attendees')} className="form-input" />
                    {errors.max_attendees && <small className="form-error">{errors.max_attendees}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="event_type" className="form-label">Event Type</label>
                    <InputText id="event_type" value={formData.event_type} onChange={(e) => handleChange(e, 'event_type')} className="form-input" />
                    {errors.event_type && <small className="form-error">{errors.event_type}</small>}
                </div>
                <div className="form-field">
                    <label className="form-label">Cover</label>
                    <FileUpload mode="basic" name="cover" accept="image/*" maxFileSize={1000000} onSelect={handleFileUpload} className="form-input" />
                    {errors.cover && <small className="form-error">{errors.cover}</small>}
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );

}
