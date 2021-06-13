import React, { Component } from "react";
import "./filtro.css";
class Filtro extends Component {
    constructor() {
        super();
        this.notas = [];
        this.textos = [];
    }

    _filtraNota(event) {
        const valor = event.target.value;
        this.props.filtraNotas(valor);
    }
    render() {
        return (
            <input
                type="text"
                placeholder="Filtre sua nota"
                className="input-filtro"
                onChange={this._filtraNota.bind(this)}
            />
        );
    }
}

export default Filtro;
