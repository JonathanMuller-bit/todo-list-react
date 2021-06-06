import React, {Component } from 'react';
import './formulario.css'


class Formulario extends Component{


    constructor(props){
        super(props);
        this.titulo = '';
        this.texto = ''
        this.categoria = '';
    }
    _mudaCategoria(event){
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _mudaTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _mudaTexto(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criaNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
        console.log(this.categoria)
    }


    render(){
        return(
            <form className="formulario" onSubmit={this._criaNota.bind(this)}>
                <select className='formulario_select' onChange={this._mudaCategoria.bind(this)}>
                    {this.props.categorias.map((categoria,index) => {
                        return (
                            <option key={index }value={categoria}>{categoria}</option>
                        )
                    })}
                </select>
                <input type="text" placeholder="Digite o titulo da sua nota" className="formulario_titulo" onChange={this._mudaTitulo.bind(this)}/>
                <textarea placeholder="Digite a sua nota" className="formulario_nota" onChange={this._mudaTexto.bind(this)}/>
                <button className="formulario_botao">Criar Nota</button>
            </form>
        );
    }
}
export default Formulario;