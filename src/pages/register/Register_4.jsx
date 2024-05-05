import React from "react";
import "./Register_3.css";
import "./Register_2.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Register_4 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // redirect to confirmverification
        window.location.href = '/confirmverification';
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
                        <hr className="green-hr-2"/>
                        <div className="text-wrapper-3">3</div>
                    </div>
                    <table className="table_form">
                        <tr>
                        
                        <td>
                        <div className="label font">Enter Code </div>
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <InputText className="p-inputtext input_register" placeholder="Code" />
                            </td>
                            <td>
                            <Button className="btn-register-4 " type="submit">
                        <div className="text-2">Valid</div>
                             </Button>
                            </td>
                        </tr>
                       
                    </table>
                    <div className="text-wrapper-1">Phone validation</div>
                    
                </form>
            </div>
        </div>
        </div>
    );
};
