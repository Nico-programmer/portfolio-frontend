import ProjectsList from "./portfolio/ProjectsList"
// profile
import profile from "../assets/profile.jpeg"
import cv from "/CV.pdf"

function Home() {
    return (
        <div className="container-fluid p-4">
            {/* Hero section */}
            <header className="row bg-black text-white align-items-center py-5">
                <div className="col-md-4 text-center">
                    <img src={profile} alt="..." className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: "250px" }} />
                </div>

                <div className="col-md-8 my-auto p-4">
                    <h1 className="display-5 fw-bold">Yo soy <strong className="text-primary">Nicolás Paulo Vega</strong></h1>

                    <h3 className="fw-light">Soy un desarrollador fullstack especializado en el framework de Django</h3>

                    <p className="mt-3 text-secondary" style={{textAlign: "justify"}}>
                        Soy un desarrollador apasionado por el aprendizaje constante en el mundo del desarrollo de software. Tengo experiencia con lenguajes como Python, JavaScript y PHP, así como en frameworks modernos como Django, React.js y Vue.js, entre otros.
                        <br />
                        Este portafolio no solo busca mostrar mis habilidades técnicas y proyectos realizados, sino también compartir mis experiencias con otros desarrolladores. Mi objetivo es que esta plataforma se convierta en un espacio de apoyo y aprendizaje para quienes están iniciando en el desarrollo web y/o de software, fomentando así el crecimiento colectivo y la colaboración dentro de la comunidad tecnológica.
                    </p>

                    <a href={cv} className="btn btn-primary btn-lg rounded-1 mt-3 shadow" target="_blank">Ve mi CV</a>
                </div>
            </header>

            {/* Portfolio section */}
            <div className="container my-5 text-center">
                <h3 className="fw-bold">Mis proyectos</h3>
                <p className="text-secondary">
                    Aquí encontrarás una selección de mis proyectos, desde los más sencillos hasta los más avanzados. Cada uno refleja mi crecimiento y aprendizaje como desarrollador. Espero que disfrutes explorándolos tanto como yo disfruté creándolos.
                </p>

                {/* Projects */}
                <div className="row">
                    <ProjectsList />
                </div>
            </div>
        </div>
    )
}

export default Home