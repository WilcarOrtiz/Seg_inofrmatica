import { Routes, Route } from 'react-router-dom';
import Campaña from './vista/campañaEducativa';
import InicioSesion from './vista/inicioSesion';
import "./App.css"

function App() {
  return (

    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/phishing" element={<Campaña />} />
      </Routes>
    </div>

  );
}

export default App;
