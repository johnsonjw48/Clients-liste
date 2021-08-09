import React, { Component } from 'react';


class Client extends Component {

    state={
        id:'', nom:'', prenom:'', age:'', username:''
    }

    handleChange = (event)=> {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value
        })
      }


    handleSubmit = (event)=>{
        event.preventDefault();
        
        let {nom, prenom, age, username}= this.state;

        this.props.onUp(this.props.details.id, {id: this.props.details.id, nom: nom, prenom: prenom, age : age, username: username});

    }
    
    render() {
    let {nom,prenom,age,username}=this.state;
    let {details, onDelete}=this.props;
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
            <div>
            <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Nouveau nom" value={nom} onChange={this.handleChange}  name="nom" />
                    <input type="text" placeholder="Nouveau prenom" value={prenom} onChange={this.handleChange}  name= "prenom" />
                    <input type="number" placeholder="Nouvel age" value={age}  onChange={this.handleChange} name= "age" />
                    <input type="text" placeholder="Nouvel identifiant"  value={username} onChange={this.handleChange} name= "username"/>
                    <button>Update</button> 
            </form>
            </div> 
        </li>
           
            
        );
    }
}

export default Client;
