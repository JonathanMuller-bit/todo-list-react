import { Component } from "react";
import Formulario from "./components/formulario/formulario";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import './assets/App.css'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[],
      categorias: [],
    }
  }
  criarNota(titulo, texto, categoria){
    const novaNota  = {titulo, texto, categoria}
    const novoArrayNotas = [...this.state.notas,novaNota]
    console.log(novoArrayNotas)
    const novoEstado = {
      notas:novoArrayNotas
    }
    
    this.setState(novoEstado)
  }

  apagarNota(indice){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1)
    this.setState(arrayNotas)
  }

  criaCategoria(categoria){
    const novaCategoria = categoria;
    const novoArrayCategoria = [...this.state.categorias,novaCategoria];
    const novoEstadoCategoria = {
      categorias: novoArrayCategoria,
    }
    this.setState(novoEstadoCategoria);
    
  }

  render(){
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)} categorias={this.state.categorias} />
        <ListaDeNotas notas={this.state.notas} categorias={this.state.categorias} apagarNota={this.apagarNota.bind(this)} criaCategoria={this.criaCategoria.bind(this)}/>
      </section>
      
    )
  }
  
}

export default App;
