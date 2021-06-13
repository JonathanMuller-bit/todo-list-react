import React, { Component } from "react";
import "./style.css";
import { ReactComponent as ApagarSVG } from "../../assets/delete.svg";

class Card extends Component {
    apagarNota() {
        this.props.apagarNotas(this.props.indice);
    }

    render() {
        return (
            <section className="card">
                <header className="card_titulo">{this.props.titulo}</header>
                <p className="card_texto">{this.props.texto}</p>
                <bottom className="card_categoria">
                    {this.props.categoria}{" "}
                    <ApagarSVG onClick={this.apagarNota.bind(this)} />
                </bottom>
            </section>
        );
    }
}

export default Card;
