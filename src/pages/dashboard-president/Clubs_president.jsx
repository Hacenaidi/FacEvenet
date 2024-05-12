import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import './clubs_president.css';


export const Clubs_president = () => {
    const [clubs, setClubs] = useState([
        { id: 1, name: 'Club 1', description: 'Description 1', field: 'Field 1', department: 'Department 1', manager: 'Manager 1', image: 'https://example.com/image1.jpg',member:20 },
        { id: 2, name: 'Club 1', description: 'Description 1', field: 'Field 1', department: 'Department 1', manager: 'Manager 1', image: 'https://example.com/image1.jpg',member:20 },
       
      ]);
      const [members, setMembers] = useState([
        { id: 1, name: 'Member 1',cin: 'CIN 1', email: 'Email 1', phone: 'Phone 1',department: 'Department 1',university:'University 1'    },
      ])
      const [index , setIndex] = useState(1);
      const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
        field: '',
        department: '',
        manager: '',
        image: ''
      });
      const [action, setAction] = useState('');
    
      const handleListmember = (id) => {
        setIndex(2);

      }
    useEffect(() => {
    })
    const handledeltemember = (id) => {
        // affiche messsge de confirmation de suppression
        // si oui

        // supprimer le membre
        // rediriger vers la page Clubs_president
        const valid = confirm("Are you sure you want to delete this member?");
        if (valid) {
            setIndex(1);    
        } else {
            // Do nothing
        }
        } 

    

    return (
        <>
            <div className="app-content">

                {index === 1 && (
                    <>
                     <div className="app-content-header">
                     <h1 className="app-content-headerText">Clubs</h1>
                 </div>
                 <div className="app-content-actions">
                     <input className="search-bar" placeholder="Search..." type="text" />
                 </div>
                 <div className="clubs">
                     <div className="flex-row">
                         
                       {clubs.map((club) => (
                           <div className="col" onClick={() => handleListmember(club.id)} key={club.id}>
                           <div className="card">
                               <img src="https://picsum.photos/200" alt="" className="card-image" />
                               <p className="card-title">{club.field}</p>
                               <p className="card-title">President : {club.manager}</p>
                               <p className="card-body">Member : {club.member} </p>
                               
                           </div>
                       </div>
                       
                       ))}
                         
                     </div>
                 </div>
                 </>
                )}

                {index === 2 && (
                    <>
                    <div className="app-content-header">
                    <h1 className="app-content-headerText">Clubs</h1>
                </div>
                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Search..." type="text" />
                </div>
                     <div className="products-area-wrapper tableView">
                     <table>
                         <thead>
                             <tr>
                                 <th>Name</th>        
                                 <th>CIN</th>
                                 <th>Email</th>
                                 <th>Phone</th>
                                 <th>Department</th>
                                 <th>University</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody>
                         {members.map((member) => (
                                 <tr key={member.id}>
                                     <td>{member.name}</td>     
                                     <td>{member.cin}</td>
                                     <td>{member.email}</td>
                                     <td>{member.phone}</td>
                                     <td>{member.department}</td>
                                     <td>{member.university}</td>
                                  
                                     <td>
                                         <button className="action-button red" onClick={() => handledeltemember(member.id)}>Delete</button>
                                         </td>                           
                                  </tr>
                             ))}
                                                         
                         </tbody>
                     </table>
                 </div>
                 </>)}
               


            </div>
        </>
    );
}
