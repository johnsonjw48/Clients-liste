import React, { Component } from 'react';
import Client from './Composants/Client';
import CFormulaire from './Composants/Formulaire';

class App extends Component {

  state = {
    clients: [
      {id: 1, nom: "JOHNSON", prenom:"James", age: "24", username: "johnsonjw48"},
      {id: 2, nom: "PAPA", prenom:"TATA", age: "30", username: "tatajw48"},
      {id: 3, nom: "MAMAN", prenom:"TOTO", age: "24", username: "totojw48"},
     
    ],
    nouveauClient: ''

  };

    handleDelete = (id) => {
      const client1= this.state.clients.slice();
      const index= client1.findIndex((client1)=>{
        return client1.id===id;
      })
      client1.splice(index, 1);
      this.setState({clients: client1})
    };


    handleSubmit = (event)=>{
      event.preventDefault();

      const id= new Date().getTime();
      const nom = this.state.nouveauClient;

      const client= this.state.clients.slice();

     
  }


    // handleChange = (event)=>{

    //   this.setState({newNom: event.currentTarget.value});
    //   this.setState({NewPrenom: event.currentTarget.value});
    //   this.setState({NewAge: event.currentTarget.value});
    //   this.setState({NewUser: event.currentTarget.value});

     
    // }

    

  render() {
    let {clients,nouveauClient}=this.state;
    return (
      <div>
          <h1>Liste de Clients</h1>
          <ul>
            {
               clients.map((item)=>(
               <Client details={item} onDelete={this.handleDelete} />
              ))
            }
          </ul>

          <h2>Ajouter un client</h2>

          <form >
            <input type="text" placeholder="nom" value={nouveauClient} />
            <input type="text" placeholder="prenom" value={nouveauClient} />
            <input type="text" placeholder="age" value={nouveauClient} />
            <input type="text" placeholder="username" value={nouveauClient} />
            <button>Add</button>
            </form>

      </div>
    );
  }
}

export default App;
