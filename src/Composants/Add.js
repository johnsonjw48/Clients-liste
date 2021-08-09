import React, { Component } from 'react';

class Add extends Component {

    state = {
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

        this.props.onAdd({id: new Date().getTime(), nom: nom, prenom: prenom, age : age, username: username});

        this.setState({
            nom:'', prenom:'', age:'', username:''
        })
  
      }
  


    render() {
        let {nom,prenom,age,username}=this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="nom">Nom</label>
              <input type="text" placeholder="" value={nom} onChange={this.handleChange} name="nom"/>
            </div>
            <div>
              <label htmlFor="prenom">Prenom</label>
              <input type="text" placeholder="" value={prenom} onChange={this.handleChange} name= "prenom" />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" placeholder="" value={age} onChange={this.handleChange} name= "age" />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="" value={username}  onChange={this.handleChange} name= "username"/>
            </div>
            <button >Add</button>
            </form>
        );
    }
}

export default Add;