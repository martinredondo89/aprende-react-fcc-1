import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
//Componente clase * this.props.nombre*
class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className="cargo-testimonio">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>

      </div>
    )
  }
}

/*Componente funcional
function Testimonio(props) {
  return (
    //Con las plantillas literales podemos usar js dentro
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>

    </div>
  )
}
*/


//Exportacion por defecto, Este va a ser el unico componente de este archivo.
export default Testimonio;

//La exportacion nombrada se agrega export delante de cada componente
// y la importacion se hace agregando llaves.

// ***** Reto : freecode en negrita y cargos los props desde un archivo