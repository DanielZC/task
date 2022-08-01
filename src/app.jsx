import React from "react";
import FormularioTarea from "./components/tarea/formularioTarea";
import FormularioUsuario from "./components/usuario/formularioUsuario";
import ListadoTareas from "./components/tarea/listadoTareas";
import ListadoUsuarios from "./components/usuario/listadoUsuarios";

class App extends React.Component {

    render() {
        const componente = (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <FormularioTarea></FormularioTarea>
                    </div>
                    <div className="col-md-3">
                        <ListadoTareas></ListadoTareas>
                    </div>
                    <div className="col-md-3">
                        <FormularioUsuario></FormularioUsuario>
                    </div>
                    <div className="col-md-3">
                        <ListadoUsuarios></ListadoUsuarios>
                    </div>
                </div>
            </div>
        )

        return componente
    }
    
}

export default App