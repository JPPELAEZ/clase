import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Empresa</h1>
        <div className="buttons">
          <button>Inicio</button>
          <button>Perfil</button>
          <button>Cerrar Sesión</button>
        </div>
      </div>
      
      <div className="content">
        <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
           También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras,
           un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.</p>
        
        <ul className="list">
          <li>1</li>
          <li> 2</li>
          <li> 3</li>
        </ul>
        <div className="card-container">
          <div className="card">
            <h3>Tarjeta 1</h3>
            <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
           También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras,
           un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto..</p>
            <button>Más información</button>
          </div>
          <div className="card">
            <h3>Tarjeta 2</h3>
            <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
           También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras,
           un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.</p>
            <button>Más información</button>
          </div>
          <div className="card">
            <h3>Tarjeta 3</h3>
            <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
           También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras,
           un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.</p>
            <button>Más información</button>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default App;