import React, { Component } from "react";
import Card from "../Card/Card";
import "./style.css";
class ListaNotas extends Component {
    render() {
        return (
            <section className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <Card
                                categoria={nota.categoria}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                indice={index}
                                apagarNotas={this.props.apagarNotas}
                                categorias={this.props.categorias}
                            />
                        </li>
                    );
                })}
            </section>
        );
    }
}

export default ListaNotas;
