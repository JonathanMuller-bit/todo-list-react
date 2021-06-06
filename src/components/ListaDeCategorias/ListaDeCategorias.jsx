import React, {Component} from 'react';
import './ListaDeCategorias.css'
class ListaDeCategorias extends Component{


    _handleCategoriaInput(event){
        if(event.key === 'Enter'){
            this.props.criaCategoria(event.target.value)
        }
    }

    render(){
        return(
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {this.props.categorias.map((categoria, index)=>{
                       return (
                        <li className='lista-categorias_item' key={index}>{categoria}</li>
                    )})}
                   
                </ul>
                <input type='text' className='lista-categorias_input'placeholder='Adicionar Categoria' onKeyUp={this._handleCategoriaInput.bind(this)}/>
            </section>
        );
    }
}

export default ListaDeCategorias