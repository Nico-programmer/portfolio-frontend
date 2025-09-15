import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Componentes
import Home from './components/Home'
import Blog from './components/blog/Blog'
import PostDetail from './components/blog/PostDetail'

// Navegación
import { Navigation } from './components/partials/Navigation'

function App() {
  return (
    <BrowserRouter basename="/portfolio-frontend">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/' element={<Blog />} />
        <Route path='/post/:id/' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App