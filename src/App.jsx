import React from 'react';
import './App.css';
import CV24 from './CV24.jpg';  // Importa la imagen CV24.jpg desde la carpeta public


function App() {
  const printImage = () => {
    const printContents = document.getElementById('printable-image').innerHTML;
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <div className="App">
      
      <h1 className='title'>Curriculum</h1>

      <br />
      
      <div className="container">

        {/* Utiliza la variable CV24 para la ruta de la imagen */}
        <div id="printable-image">
          <img className="img" src={CV24} alt="Currículum Vitae" />
        </div>
        <button onClick={printImage}>Imprimir Imagen</button>
      </div>
    </div>
  );
}

export default App;
