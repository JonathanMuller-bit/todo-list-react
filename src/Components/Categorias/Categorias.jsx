import React, { Component } from "react";
import "./categorias.css";
class Categorias extends Component {
    _handlerInput(event) {
        event.stopPropagation();
        const tecla = event.key;
        if (tecla === "Enter") {
            this.props.adicionarCategoria(event.target.value);
            event.target.value = "";
        }
    }

    _apagarCategoria(index) {
        this.props.apagarCategoria(index);
    }

    _adicionarCategoria(categoria) {}

    render() {
        return (
            <section className="menu-categorias">
                <ul className="menu-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <li
                                className="menu-categorias_item"
                                key={index}
                                onDoubleClick={this._apagarCategoria.bind(
                                    this,
                                    index
                                )}
                            >
                                {categoria}
                            </li>
                        );
                    })}
                </ul>
                <input
                    type="text"
                    className="menu-categorias_input"
                    placeholder="Digite aqui a sua categoria"
                    onKeyUp={this._handlerInput.bind(this)}
                />
            </section>
        );
    }
}

export default Categorias;
