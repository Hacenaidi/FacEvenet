import React ,{ useRef,useState } from "react";
import "./Clubs.css";

import { Link } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { NavBar } from "../../components/navbar";


export const Clubs = () => {
  const toast = useRef(null);

  const accept = () => {
      toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  }

  const reject = () => {
      toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  const showTemplate = () => {
    confirmDialog({
        group: 'templating',
        header: 'Confirmation',
        message: (
            <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                <span>Please confirm to proceed moving forward.</span>
            </div>
        ),
        accept,
        reject
    });
};
  return (
    <div className="home">
       <Toast ref={toast} />
        <ConfirmDialog  group="templating"/>
      <div className="div">
      <NavBar/>     
         <div className="lanternes" />
         <div className="content-clubs">
         <div className="text-center text-xl">Clubs</div>
         <div className="list-clubs">
            <div className="best-club">
              <img className="img_club" alt="image" src="https://picsum.photos/200" />
              <div className="nom-club">Club 1</div>
             
    
              <Button onClick={showTemplate}   className="mr-2 btn-join-club">Join</Button>

            </div>
            <div className="clubs_user">
                <div className="flex-row">

               
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src="https://picsum.photos/200" />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Button onClick={showTemplate}   className="mr-2 btn-join-club">Join</Button>
                    </div>
                   
                </div>

                </div>
               
            </div>

         </div>
         </div>
      </div>
    </div>
  );
};
