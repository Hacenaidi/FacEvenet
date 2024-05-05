import React from "react";
import "./Register_5.css";
import "./Register_3.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Register_5 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // redirect to confirmverification
        window.location.href = '/home';
    };

    return (
        <div className="image-register_2">
        <div className="register">
            <div className="div">
                    <div className="overlap-group">
                        <div className="frame" />
                        <div className="text-wrapper">2</div>
                        <hr className="green-hr"/>
                        <div className="text-wrapper-2">1</div>
                        <div className="frame-2" />
                    </div>
                    <div className="overlap-2">
                        <div className="frame-green" />
                        <hr className="green-hr-2"/>
                        <div className="text-wrapper-3">3</div>
                    </div>
                 
                        <Button className="btn-home" type="button" onClick={handleSubmit}>
                        <div className="text-2">Go To Home Page</div>
                            </Button>
                      
                    <div className="text-wrapper-7">Registration successfully completed </div>
                    
            </div>
        </div>
        </div>
    );
};
