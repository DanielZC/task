import React from "react";

class FormularioTarea extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            tarea: {
                nombre: '',
                descripcion: '',
                responsable: '',
                estado: 'Pendiante',
                creado: new Date().toUTCString()
            } 
        }

        this.enviar = this.enviar.bind(this)
    }

    enviar(e)  {
        e.preventDefault()
        console.log(this.state.tarea)
    }

    render() {
        const componente = (
            <div className="card shadow">
                <div className="card-body">
                    <h3>Componente</h3>
                    <form onSubmit={this.enviar}>
                        <div className="mb-3">
                            <label>Nombre de tarea</label>
                            <input type="text" className="form-control" onChange={(e) => this.state.tarea.nombre = e.target.value} />
                        </div>
                        <div className="mb-3">
                            <label>Descripcion</label>
                            <textarea className="form-control" cols="30" rows="3" onChange={(e) => this.state.tarea.descripcion = e.target.value} ></textarea>
                        </div>
                        <div className="mb-3">
                            <label>Responsable</label>
                            <input type="text" className="form-control" onChange={(e) => this.state.tarea.responsable = e.target.value} />
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

export default FormularioTarea