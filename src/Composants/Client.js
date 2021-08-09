import React, { Component } from 'react';
import UpdateClient from './UpdateClient';

class Client extends Component {
    
    render() {

        let {details, onDelete, onUpdate, nom, prenom, age, username}=this.props;
        return (

    <li key={details.id}> 
    
    <ul>
        <li>
        Nom: {details.nom}
        </li>
        <li>
        Prenom: {details.prenom}
        </li>
        <li>
        Age: {details.age}
        </li>
        <li>
        Username: {details.username} 
        </li>
    </ul>
    <button onClick={() => onDelete(details.id)}> Delete </button> 
    <UpdateClient/>
    <button onClick={()=> onUpdate(details.id)}>Update</button> 
    </li>
           
            
        );
    }
}

export default Client;
