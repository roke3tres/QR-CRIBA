import React from 'react';
import QRCode from 'react-qr-code';

const App = () => {
  return (
    <div>
      <h1>Generador de QR Contenedor Elite</h1>
      <QRCode value="https://g2-react.vercel.app/modeloifc" />
    </div>
  );
};

export default App;


