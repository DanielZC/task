import React from "react";

class ListadoTareas extends React.Component {

    render() {
        const componente = (
            <div className="card shadow">
                <div className="card-body">
                    <h3>Listado de tareas</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Responsable</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

        return componente
    }
}

export default ListadoTareas