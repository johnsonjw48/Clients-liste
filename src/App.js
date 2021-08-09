import React, { Component } from 'react';
import Add from './Composants/Add';
import Client from './Composants/Client';


class App extends Component {

  state = {
    clients: [],
};

    handleDelete = (id) => {
      const client1= this.state.clients.slice();
      const index= client1.findIndex((client1)=>{
        return client1.id===id;
      })
      client1.splice(index, 1);
      this.setState({clients: client1})
    };


    handleUpdate = (id, client) => {
      const client1= this.state.clients.slice();
      const index= client1.findIndex((client1)=>{
        return client1.id===id;
      })
      
      client1[index]= client;

      this.setState({
        clients: client1
      })
    }

    handleAddClient = (client)=>{
      const clients=this.state.clients.slice();
  
      clients.push(client);
  
  
      this.setState({
          clients: clients
      })
    }
    

  render() {
    let {clients}=this.state;
    return (
      <div>
          <h1>Liste de Clients</h1>
          <ol>
            {
               clients.map((item)=>(
               <Client details={item} onDelete={this.handleDelete}   onUp={this.handleUpdate}/>
              ))
            }
          </ol>

          <h2>Ajouter un client</h2>
            <Add onAdd={this.handleAddClient}  onDelete={this.handleUpdate}/>

      </div>
    );
  }
}

export default App;
