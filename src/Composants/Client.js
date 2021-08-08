import React, { Component } from 'react';

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
    <form >
              <input type="text" placeholder="Nouveau nom" value={nom}  name="nom" />
              <input type="text" placeholder="Nouveau prenom" value={prenom}  name= "prenom" />
              <input type="number" placeholder="Nouvel age" value={age}  name= "age" />
              <input type="text" placeholder="Nouvel identifiant"  value={username}  name= "username"/>
              <button onClick={()=> onUpdate(details.id)}>Update</button> 
     </form>
    
    </li>
           
            
        );
    }
}

export default Client;
