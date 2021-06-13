import React, { Component } from "react";
import "./App.css";
import Categorias from "./Components/Categorias/Categorias";
import Filtro from "./Components/Filtro/Filtro";
import Formulario from "./Components/Formulario/Formulario";
import ListaNotas from "./Components/ListaNotas/ListaNotas";

class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: [],
            categorias: [],
            busca: [],
        };
    }

    adicionarCategoria(categoria) {
        const novoArrayCategorias = [...this.state.categorias, categoria];
        const novoEstadoCategorias = { categorias: novoArrayCategorias };
        this.setState(novoEstadoCategorias);
    }

    apagarCategoria(index) {
        let arrCategorias = this.state.categorias;
        const categoriaDeletada = this.state.categorias[index];
        arrCategorias.splice(index, 1);

        this.setState({ categorias: arrCategorias });
        this.atualizarCategorias(categoriaDeletada);
    }

    apagarNotas(index) {
        let arrNotas = this.state.notas;
        arrNotas.splice(index, 1);
        this.setState({ notas: arrNotas });
    }

    adicionarNota(categoria, titulo, texto) {
        const novaNota = { categoria, titulo, texto };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoEstadoNotas = { notas: novoArrayNotas };
        this.setState(novoEstadoNotas);
    }

    atualizarCategorias(categoriaDeletada) {
        this.state.notas.forEach((nota) => {
            if (nota.categoria == categoriaDeletada) {
                return (nota.categoria = "Categoria Removida");
            }
        });
    }

    render() {
        return (
            <section className="conteudo">
                <Formulario
                    criarNota={this.adicionarNota.bind(this)}
                    categorias={this.state.categorias}
                />

                <section className="conteudo-principal">
                    <Categorias
                        categorias={this.state.categorias}
                        apagarCategoria={this.apagarCategoria.bind(this)}
                        adicionarCategoria={this.adicionarCategoria.bind(this)}
                    />

                    <ListaNotas
                        notas={this.state.notas}
                        apagarNotas={this.apagarNotas.bind(this)}
                    />
                </section>
            </section>
        );
    }
}

export default App;
