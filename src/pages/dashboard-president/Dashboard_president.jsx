import React,{useState} from "react";
import './dashboard_president.css';
export const Dashboard_president = () => {
    const [members, setMembers] = useState([
        { id: 1, name: 'Member 1',cin: 'CIN 1', email: 'Email 1', phone: 'Phone 1',department: 'Department 1',university:'University 1' ,  club: 'Club 1',    },
      ])
      const handlacceptmember = (id) => {
      }
      const handlrefusemember = (id) => {
          
      }
  return (  
      <div className="container">
      <div className="content">
            <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>194</h1>
                        <h3>Member</h3>
                    </div>
                    <div className="icon-case">
                         
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>2</h1>
                        <h3>Clubs</h3>
                    </div>
                    <div className="icon-case">
                         
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>15</h1>
                        <h3>Evenement</h3>
                    </div>
                    <div className="icon-case">
                                             </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>35</h1>
                        <h3>Request join </h3>
                    </div>
                    <div className="icon-case">
                                            </div>
                </div>
            </div>
            <div className="content-2">
                <div className="Request-join">
                    <div className="title">
                        <h2>Request join</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>cin</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>University</th>
                            <th>Club</th>
                            <th>Actions</th>
                        </tr>
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td>{member.name}</td>
                                <td>{member.cin}</td>
                                <td>{member.email}</td>
                                <td>{member.phone}</td>
                                <td>{member.department}</td>
                                <td>{member.university}</td> 
                                <td>{member.club}</td>   
                                <td><button className="action-button green" onClick={() => handlacceptmember(member.id)}>Accept</button>
                                <button className="action-button red" onClick={() => handlrefusemember(member.id)}>Refuse</button></td>
                            </tr>))}
                    </table>
                </div>
                
     
  </div>
  </div>
   
     
     
      
     
  </div>
     
      
      
 
  )}