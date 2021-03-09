import React from "react"
import ReactDOM from "react-dom"
import Client from "./Client"
import ClientForm from "./ClientForm"

class App extends React.Component {

    state = {
        clients: [
            { id: 1, nom: "Kenne Roosvelt" },
            { id: 2, nom: "KN Coorporation" },
            { id: 3, nom: "Teacher mate" }
        ]
    }

    handleDelete = id => {
        const clients = [... this.state.clients]
        const index = clients.findIndex(client => client.id === id);

        clients.splice(index, 1);
        this.setState({ clients });
    }


    handleAdd = client => {
        const clients = [...this.state.clients]
        clients.push(client);

        this.setState({ clients });
    }

    render() {
        const title = "Liste de clients"
        return <div>
            <h1>{title}</h1>
            <ul>
                {this.state.clients.map(client =>
                    <Client details={client} onDelete={this.handleDelete} />)}
            </ul>
            <ClientForm handleAdd={this.handleAdd} />
        </div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);