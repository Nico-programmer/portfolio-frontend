import ProjectList from './ProjectList'
import cv from "/CV.pdf"
import profile from "/profile.png"

function Home() {
    return (
        <div className="px-4">
            {/* Hero */}
            <header id='home' className="flex flex-col md:flex-row items-center bg-black text-white rounded-2xl shadow-xl overflow-hidden">
                {/* Image */}
                <div className="flex justify-center md:w-1/3 p-6">
                    <img src={profile} alt="profile" className="w-56 h-56 object-cover rounded-full shadow-2xl border-4 border-indigo-500" />
                </div>

                {/* Texto */}
                <div className="md:w-2/3 p-6 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Soy <span className="text-indigo-500">Nicolás Paulo Vega</span>
                    </h1>

                    <h3 className="text-xl font-light">
                        Soy desarrollador web especializado en el framework de <span className="text-indigo-400">Django</span>
                    </h3>

                    <p className="text-gray-300 text-justify leading-relaxed">
                        Soy un desarrollador apasionado por el aprendizaje constante en el mundo del desarrollo de software.
                        Tengo experiencia con lenguajes como <b>Python</b>, <b>JavaScript</b> y <b>PHP</b>, así como en frameworks modernos
                        como <b>Django</b>, <b>React.js</b> y <b>Vue.js</b>.
                        <br /><br />
                        Este portafolio busca mostrar mis habilidades técnicas y proyectos realizados, además de ser un espacio para
                        compartir experiencias y fomentar el crecimiento colectivo dentro de la comunidad tecnológica.
                    </p>

                    <a href={cv} target="_blank" rel="noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition">
                        Ver mi cv
                    </a>
                </div>
            </header>

            {/* Portafolio */}
            <section className="text-center my-16" id='projects'>
                <h3 className="text-3xl font-bold mb-4">Mis proyectos</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    Aquí encontrarás una selección de mis proyectos, desde los más sencillos hasta los más avanzados.
                    Cada uno refleja mi crecimiento como desarrollador y mi pasión por crear soluciones digitales modernas.
                </p>

                <ProjectList />
            </section>

            {/* Contacto */}
            <section id="contact" className="bg-black text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Título */}
                    <h2 className="text-4xl font-bold text-indigo-400 mb-6">Contacto</h2>
                    <p className="text-gray-300 mb-12">
                        Si quieres ponerte en contacto conmigo para colaboraciones, proyectos o simplemente charlar sobre
                        desarrollo, ¡escríbeme aquí!
                    </p>

                    {/* Formulario */}
                    <form className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-4 max-w-2xl mx-auto">
                        <input type="text" placeholder="Tu nombre" className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-indigo-500 outline-none"/>

                        <input type="email" placeholder="Tu correo" className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-indigo-500 outline-none"/>

                        <textarea rows="4" placeholder="Tu mensaje" className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-indigo-500 outline-none"></textarea>

                        <button type="submit" className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg">Enviar</button>
                    </form>

                    {/* Redes sociales */}
                    <div className="mt-12 flex justify-center gap-6">
                        <a href="https://github.com/Nico-programmer" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-2xl">
                            <i className="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/nicolas-paulo-vega-73365928b/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-2xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home