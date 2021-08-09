import React, { Component } from 'react';

class UpdateClient extends Component {
    state = {
        id:'', nom:'', prenom:'', age:'', username:''
    }

    handleChange = (event)=> {

        const name = event.target.name;
        
        this.setState({
          [name]: event.target.value
        })
  
      }

    render() {
        let {nom,prenom,age,username}=this.state;
        return (
            <form >
              <input type="text" placeholder="Nouveau nom" value={nom} onChange={this.handleChange}  name="nom" />
              <input type="text" placeholder="Nouveau prenom" value={prenom} onChange={this.handleChange}  name= "prenom" />
              <input type="number" placeholder="Nouvel age" value={age}  onChange={this.handleChange} name= "age" />
              <input type="text" placeholder="Nouvel identifiant"  value={username} onChange={this.handleChange} name= "username"/>
            </form>
        );
    }
}

export default UpdateClient;