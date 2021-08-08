import React, { Component } from 'react';
import Client from './Composants/Client';


class App extends Component {

  state = {
    clients: [],
    id:'', nom:'', prenom:'', age:'', username:''
};

    handleDelete = (id) => {
      const client1= this.state.clients.slice();
      const index= client1.findIndex((client1)=>{
        return client1.id===id;
      })
      client1.splice(index, 1);
      this.setState({clients: client1})
    };

    handleUpdate = (id) => {
     
      const client1= this.state.clients.slice();
      const index= client1.findIndex((client1)=>{
        return client1.id===id;
      })

      console.log(index);
      

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

      const client = {id: new Date().getTime(), nom: nom, prenom: prenom, age : age, username: username};

      const clients=this.state.clients.slice();

      clients.push(client);


      this.setState({
        clients: clients, nom:'', prenom:'', age:'', username:''
      })

    }



    

  render() {
    let {clients,nom,prenom,age,username}=this.state;
    return (
      <div>
          <h1>Liste de Clients</h1>
          <ol>
            {
               clients.map((item)=>(
               <Client details={item} onDelete={this.handleDelete} onUpdate={this.handleUpdate} onChange={this.handleChange} nom={nom} prenom={prenom} age={age} username={username}/>
              ))
            }
          </ol>

          <h2>Ajouter un client</h2>

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
            {/* {JSON.stringify(this.state)} */}

      </div>
    );
  }
}

export default App;
