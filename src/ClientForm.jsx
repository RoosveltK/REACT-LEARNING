import React, { Component } from "react"

class ClientForm extends Component {
    state = {
        nouveauClient: ""
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const nom = this.state.nouveauClient;

        this.props.handleAdd({ id, nom });
        this.setState({ nouveauClient: "" })
    }

    handleChange = (event) => {
        this.setState({ nouveauClient: event.currentTarget.value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.nouveauClient} placeholder="Entrez le nom" onChange={this.handleChange} />
                <button>Confirmer</button>
            </form>
        );
    }
}
export default ClientForm;