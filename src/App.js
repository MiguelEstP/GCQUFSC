import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contatos from './pages/contatos';
import Egressos from './pages/egressos';
import Pessoal from './pages/pessoal';
import Artigos from './pages/artigos';
import Projetos from './pages/projetos'; 
import Home from './pages/home';
import Footer from './components/footer'
import Sidebar from './components/sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/GCQUFSC/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/pessoal" element={<Pessoal />} />
          <Route path="/egressos" element={<Egressos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
        <>
  <Sidebar />
  <Routes>
  </Routes>
  <Footer />
</>
      </div>
    </Router>
  );
}


export default App;
