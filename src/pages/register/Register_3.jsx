import React, { useState } from "react";
import "./Register_3.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Register_3 = () => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation du numéro de téléphone
        const phoneRegex = /^\+?\d{10,}$/;
        if (!phoneRegex.test(phone)) {
            setError('Please enter a valid phone number');
            return;
        }
        if (phone.length < 8)
            setError('Phone must be at least 8 digits');

        // Si la validation passe, rediriger
        window.location.href = '/verificationcode';
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setPhone(value);
        setError(''); 
    };
    return (
        <div className="image-register_2">
            <div className="register">
                <div className="div">
                    <form onSubmit={handleSubmit}>
                        {/* Contenu du formulaire */}
                        <table className="table_form">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="label font">Are you sure to use this phone ?</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <InputText className="p-inputtext input_register" value={phone} onChange={(e) =>handleChange(e, 'Phone')} />
                                        {error && <div className="error-message">{error}</div>}
                                    </td>
                                    <td>
                                        <Button className="btn-register-4 " type="submit">
                                            <div className="text-2">Continue</div>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Affichage de l'erreur */}
                       
                        <div className="text-wrapper-1">Phone validation</div>
                    </form>
                </div>
            </div>
        </div>
    );
};
