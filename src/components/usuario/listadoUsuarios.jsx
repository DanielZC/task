import React from "react";

class ListadoUsuarios extends React.Component {

    render() {
        const componente = (
            <div className="card shadow">
                <div className="card-body">
                    <h3>Listado de usuarios</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Nombre</th>
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

export default ListadoUsuarios