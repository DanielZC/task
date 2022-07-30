import React, {useState} from "react";

class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nuevaTarea: '',
            count: 0
        }
    }

    enviar (e)  {
        e.preventDefault()

        console.log('Enviado')
    }

    render() {
        const componente = (
            <div>
                <h1>Componente</h1>
                <form onSubmit={this.enviar}>
                    <span>Tarea: {this.state.nuevaTarea}</span>
                    <br />
                    <input type="text" onChange={(e) => this.setState({ nuevaTarea: e.target.value})} />
                    <button type="submit">Enviar</button>
                </form>
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Click me
                    </button>
                </div>
            </div>
        )

        return componente
    }
    
}

export default App