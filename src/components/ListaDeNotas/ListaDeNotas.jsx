import React, {Component} from 'react';
import CardNota from '../CardNota/CardNota';
import ListaDeCategorias from '../ListaDeCategorias/ListaDeCategorias';
import './ListaDeNotas.css'
class ListaDeNotas extends Component{
    
    render(){
        return(
            <section className='lista-nota'>
                <ListaDeCategorias criaCategoria={this.props.criaCategoria} categorias={this.props.categorias}/>
                <ul className='lista-nota_lista'>
                    {this.props.notas.map((card, index) => {
                        return(
                            <li key={index} className='lista-nota_card' categorias={this.props.categorias}>
                                <CardNota titulo={card.titulo} texto={card.texto} categoria={card.categoria}indice={index} apagarNota={this.props.apagarNota}/>
                            </li>
                        )
                    })}
                    </ul>
            </section>
            
        );
    }
}

export default ListaDeNotas;