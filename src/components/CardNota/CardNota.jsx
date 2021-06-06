import React, {Component} from 'react'
import './CardNota.css'
import {ReactComponent as DeletarSvg} from '../../assets/delete.svg'
class CardNota extends Component{

    apagarNota(){
        this.props.apagarNota(this.props.indice)
    }
    render(){
        return(
            <section className="card-nota">

                <header className='card-nota_header'><span className='card-nota_categoria'>{this.props.categoria}</span>
                <DeletarSvg onClick={this.apagarNota.bind(this)} className='card-nota_deletar'/>
                </header>
                <h4 className="card-nota_titulo">{this.props.titulo} </h4>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>      
        );
    }
}

export default CardNota;