import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import Ofertas from './pages/Ofertas';
import MisCompras from './pages/MisCompras'
import Categorias from './pages/Categorias';
import { LayoutPrincipal } from './layouts/LayoutPrincipal';
import {RouteProvider} from './contexts/RouteContext';
function App() {
  return (
    <RouteProvider>
      <Router>
            <Nav />
            <Routes>
              <Route  element={<LayoutPrincipal/>} >
            <Route exact path='/' element={<Home />} />
                  <Route exact path='categorias'  element={<Categorias/>} />
                  <Route exact path='ofertas'  element={<Ofertas/>} />
                  <Route exact path='mis-compras'  element={<MisCompras/>} />
              </Route>
            </Routes>
      </Router>
    </RouteProvider>
  );
}

export default App;
