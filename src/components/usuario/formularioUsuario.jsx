import React from "react";

class FormularioUsuario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                nombre: '',
                usuario: '',
                creado: new Date().toUTCString()
            }
        }

        this.enviar = this.enviar.bind(this)
    }

    enviar(e) {
        e.preventDefault()
        console.log(this.state.usuario)
    }

    render() {
        const componente = (
            <div className="card shadow">
                <div className="card-body">
                    <h3>Formulario usuario</h3>
                    <form onSubmit={this.enviar}>
                        <div className="mb-3">
                            <label>Usuario</label>
                            <input type="text" className="form-control" onChange={(e) => this.state.usuario.usuario = e.target.value} />
                        </div>
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" onChange={(e) => this.state.usuario.nombre = e.target.value} />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )

        return componente
    }
}

export default FormularioUsuario