import React, { Component } from 'react';

class Client extends Component {
    
    render() {

        let {details, onDelete}=this.props;
        return (

    <li key={details.id}> Nom: {details.nom} Prenom: {details.prenom} Age: {details.age}  Username: {details.username} 
    <button onClick={() => onDelete(details.id)}> Delete </button>  
    <button>Update</button>
    </li>
           
            
        );
    }
}

export default Client;
