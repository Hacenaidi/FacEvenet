import React from "react";
import "./Register_2.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Register_2 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // redirect to verification
        window.location.href = '/verification';
    };

    return (
        <div className="image-register_2">
        <div className="register">
            <div className="div">
                <form onSubmit={handleSubmit}>
                    <div className="overlap-group">
                        <div className="frame" />
                        <div className="text-wrapper">2</div>
                        <hr className="green-hr"/>
                        <div className="text-wrapper-2">1</div>
                        <div className="frame-2" />
                    </div>
                    <div className="overlap-2">
                        <div className="frame-3" />
                        <hr className="noir-hr"/>
                        <div className="text-wrapper-3">3</div>
                    </div>
                    <table className="table_form">
                        <tr>
                        
                        <td>
                        <div className="label">Classe</div>
                        <InputText className="p-inputtext input_register" placeholder="Classe" />
                        </td>
                        <td>
                        <div className="label">School</div>
                        <InputText className="p-inputtext input_register" placeholder="School" />
                        </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="label">Email</div>
                        <InputText className="p-inputtext input_register" placeholder="Email" />
                            </td>
                            <td>
                            <div className="label">Parcours</div>
                        <InputText className="p-inputtext input_register" placeholder="Parcours" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="label">Niveau</div>
                        <InputText className="p-inputtext input_register" placeholder="Niveau" />
                            </td>
                        </tr>
                    </table>
                    <div className="text-wrapper-9">Register additional information</div>
                    <Button className="btn-register " type="submit">
                        <div className="text-wrapper-10">Register</div>
                    </Button>
                </form>
            </div>
        </div>
        </div>
    );
};
