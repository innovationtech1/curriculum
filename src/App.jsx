import React from 'react';
import './App.css';
import CV24 from './CV24.jpg'; // Importa la imagen desde la misma carpeta

function App() {
  const printImage = () => {
    // Solicitar confirmación al usuario
    const userConfirmed = window.confirm("¿Desea imprimir la imagen?");
    
    if (userConfirmed) {
      // Si el usuario confirma, proceder con la impresión
      const printContents = document.getElementById('printable-image').innerHTML;

      // Crear un nuevo documento para imprimir
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Imprimir Imagen</title>
            <style>
              body { margin: 0; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            ${printContents}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    } else {
      console.log("Impresión cancelada.");
    }
  };

  return (
    <div className="App">
      <h1 className='title'>Curriculum</h1>
      
      <div className="container">
        {/* Utiliza la imagen importada directamente */}
        <div id="printable-image">
          <img className="img" src={CV24} alt="Currículum Vitae" />
        </div>
        <br />
        <button className='button-imp' onClick={printImage}>Imprimir Imagen</button>
      </div>
    </div>
  );
}

export default App;
