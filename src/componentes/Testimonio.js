import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//Componente funcional
function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma' />
      <div className="contenedor-texto-testimonio">
        <p classname="nombre-testimonio">Emma Bostian en Suecia</p>
        <p classname="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p classname="texto-testimonio">Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p>
      </div>

    </div>
  )
}
//Exportacion por defecto, Este va a ser el unico componente de este archivo.
export default Testimonio;

//La exportacion nombrada se agrega export delante de cada componente
// y la importacion se hace agregando llaves.