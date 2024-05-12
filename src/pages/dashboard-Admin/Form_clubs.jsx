import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import './style_from.css';
export const Form_clubs = (formData) => {
    
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        field: '',
        department: '',
        manager: '',
        image: ''
    });
    formData = formData.formData;

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
        // Clear the error message when user starts typing again
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: ''
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.files[0];
        setFormData(prevState => ({
            ...prevState,
            image: file
        }));
        // Clear the error message when user selects a file
        setErrors(prevState => ({
            ...prevState,
            image: ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formValid = true;
        const newErrors = {};

        // Validation des champs
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            formValid = false;
        }
        if (formData.description.trim() === '') {
            newErrors.description = 'Description is required';
            formValid = false;
        }
        if (formData.field.trim() === '') {
            newErrors.field = 'Field is required';
            formValid = false;
        }
        if (formData.department.trim() === '') {
            newErrors.department = 'Department is required';
            formValid = false;
        }
        if (formData.manager.trim() === '') {
            newErrors.manager = 'Manager is required';
            formValid = false;
        }
        if (!formData.image) {
            newErrors.image = 'Image is required';
            formValid = false;
        }

        // Si le formulaire est valide, soumettre les données
        if (formValid) {
            // Handle form submission logic here
            console.log(formData);
        } else {
            // Afficher les erreurs
            setErrors(newErrors);
        }
    };
    const managers = [
        { label: 'John Doe', value: 'John Doe' },
        { label: 'Jane Doe', value: 'Jane Doe' },
        { label: 'Alice Smith', value: 'Alice Smith' },
        { label: 'Bob Johnson', value: 'Bob Johnson' },
    ];

    return (
        <div className="form-container">
          
            <form onSubmit={handleSubmit} className="form">
                <div className="form-field">
                    <label htmlFor="name" className="form-label">Name</label>
                    <InputText id="name" value={formData.name} onChange={(e) => handleChange(e, 'name')} className="form-input" />
                    {errors.name && <small className="form-error">{errors.name}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="description" className="form-label">Description</label>
                    <InputText id="description" value={formData.description} onChange={(e) => handleChange(e, 'description')} className="form-input" />
                    {errors.description && <small className="form-error">{errors.description}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="field" className="form-label">Field</label>
                    <InputText id="field" value={formData.field} onChange={(e) => handleChange(e, 'field')} className="form-input" />
                    {errors.field && <small className="form-error">{errors.field}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="department" className="form-label">Department</label>
                    <InputText id="department" value={formData.department} onChange={(e) => handleChange(e, 'department')} className="form-input" />
                    {errors.department && <small className="form-error">{errors.department}</small>}
                </div>
                <div className="form-field">
                    <label htmlFor="manager" className="form-label">Manager</label>
                    <Dropdown id="manager" value={formData.manager} options={managers} onChange={(e) => handleChange(e, 'manager')} optionLabel="label" className="form-input" placeholder="Select a manager" />
                    {errors.manager && <small className="form-error">{errors.manager}</small>}
                </div>
                <div className="form-field">
                    <label className="form-label">Image</label>
                    <FileUpload mode="basic" name="image" accept="image/*" maxFileSize={1000000} onSelect={handleFileUpload} className="form-input" />
                    {errors.image && <small className="form-error">{errors.image}</small>}
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
}
