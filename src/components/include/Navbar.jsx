import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react" // íconos hamburguesa

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed w-full top-0 z-50 bg-black bg-opacity-60 backdrop-blur-md shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-title text-indigo-500">Portafolio</h1>

                {/* Menú Desktop */}
                <ul className="hidden md:flex space-x-6 font-semibold">
                    <li>
                        <Link to="home" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-indigo-400 transition">Inicio</Link>
                    </li>

                    <li>
                        <Link to="projects" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-indigo-400 transition">Proyectos</Link>
                    </li>

                    <li>
                        <Link to="contact" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-indigo-400 transition">Contáctame</Link>
                    </li>
                </ul>

                {/* Botón hamburguesa Mobile */}
                <button className="md:hidden text-white focus:outline-none"onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú Mobile */}
            {isOpen && (
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-6 py-4 space-y-4">
                    <Link to="home" smooth={true} duration={600} offset={-70} onClick={() => setIsOpen(false)} className="block text-white hover:text-indigo-400 transition">Inicio</Link>

                    <Link to="projects" smooth={true} duration={600} offset={-70} onClick={() => setIsOpen(false)} className="block text-white hover:text-indigo-400 transition">Proyectos</Link>

                    <Link to="contact" smooth={true} duration={600} offset={-70} onClick={() => setIsOpen(false)} className="block text-white hover:text-indigo-400 transition">Contáctame</Link>
                </motion.div>
            )}
        </motion.nav>
    )
}