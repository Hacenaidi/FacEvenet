import React, { useState } from "react";
import "./Register_2.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Register_2 = () => {
    const [formData, setFormData] = useState({
        University: '',
        Department: '',
        Group: '',
        Email: '',
        Phone: '',
    });
    const [errors, setErrors] = useState({
        University: '',
        Department: '',
        Group: '',
        Email: '',
        Phone: '',
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check for any validation errors before redirecting
        const validationErrors = {};
        Object.keys(formData).forEach(key => {
            if (formData[key].trim() === '') {
                validationErrors[key] = `${key} is required`;
            }
            if (key === 'Phone' && !/^\d+$/.test(formData[key]) ) {
                validationErrors[key] = 'Phone must be a number';
            }
            if (formData[key].length < 8 && key === 'Phone')
                validationErrors[key] = 'Phone must be at least 8 digits';
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Redirect to verification if there are no errors
            window.location.href = '/verification';
        }
    };

    return (
        <div className="image-register_2">
            <div className="register">
                <div className="div">
                    <form onSubmit={handleSubmit}>
                        {/* Form elements */}
                        <table className="table_form">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="label">University</div>
                                        <InputText className="p-inputtext input_register" placeholder="University" value={formData.University} onChange={(e) => handleChange(e, 'University')} />
                                        {errors.University && <div className="error-message">{errors.University}</div>}
                                    </td>
                                    <td>
                                        <div className="label">Department</div>
                                        <InputText className="p-inputtext input_register" placeholder="Department" value={formData.Department} onChange={(e) => handleChange(e, 'Department')} />
                                        {errors.Department && <div className="error-message">{errors.Department}</div>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="label">Group</div>
                                        <InputText className="p-inputtext input_register" placeholder="Group" value={formData.Group} onChange={(e) => handleChange(e, 'Group')} />
                                        {errors.Group && <div className="error-message">{errors.Group}</div>}
                                    </td>
                                    <td>
                                        <div className="label">Email</div>
                                        <InputText className="p-inputtext input_register" placeholder="Email" value={formData.Email} onChange={(e) => handleChange(e, 'Email')} />
                                        {errors.Email && <div className="error-message">{errors.Email}</div>}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <div className="label">Phone</div>
                                        <InputText className="p-inputtext input_register" placeholder="+216" value={formData.Phone} onChange={(e) => handleChange(e, 'Phone')} />
                                        {errors.Phone && <div className="error-message">{errors.Phone}</div>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-wrapper-9">Register additional information</div>
                        <Button className="btn-register " type="submit">
                            <div className="text-wrapper-10">Next</div>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
