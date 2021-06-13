import React, { Component } from "react";
import "./style.css";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categorias = "Sem categoria";
    }

    _handleMudancaCategoria(event) {
        event.stopPropagation();
        this.categorias = event.target.value;
    }

    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.categorias, this.titulo, this.texto);
    }

    render() {
        return (
            <form className="formulario" onSubmit={this._criarNota.bind(this)}>
                <select
                    className="formulario_titulo"
                    onChange={this._handleMudancaCategoria.bind(this)}
                >
                    <option>Sem categoria</option>
                    {this.props.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>;
                    })}
                </select>
                <input
                    type="text"
                    className="formulario_titulo"
                    placeholder="Titulo de sua nota"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    className="formulario_texto"
                    placeholder="Digite a sua nota"
                    rows="20"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="formulario_botao">Criar Nota</button>
            </form>
        );
    }
}

export default Formulario;
