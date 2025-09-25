// Componentes (includes)
import Navbar from './components/include/Navbar'
import Footer from './components/include/Footer'

// Componentes (pages)
import Home from './components/Home'

function App() {
    return (
        <div className="bg-gray-900 text-white font-fancy">
            {/* Navbar (navegación) */}
            <Navbar />
                {/* Cuerpo */}
                <main className='pt-20'>
                    <Home />
                </main>
            {/* Footer (redes) */}
            <Footer />
        </div>
    )
}

export default App