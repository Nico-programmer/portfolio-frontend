import { useEffect, useState } from "react"
// Importamos la petición
import { getAllProjects } from "../../config/axios"

function ProjectsList() {
    const [ projects, setProjects ] = useState([])

    useEffect(
        () => {
            // Función para visualizar proyectos
            async function loadProject() {
                // Obtenemos los datos basados en la petición
                const res = await getAllProjects()
                
                // Almacenamos la información
                setProjects(res.data)
            }
            
            loadProject()
        }, []
    )

    return (
        <div className="row">
            {projects.map(project => (
                <div className="col-md-4 p-3" key={project.id}>
                    <div className="card bg-black text-white h-100 shadow-lg border-0">
                        <img src={project.image} alt="" className="card-img-top" />
                        
                        <div className="card-body d-flex flex-column">
                            <h2 className="card-title">{project.title}</h2>
                            <p className="card-text text-secondary" style={{textAlign: "justify"}}>{project.description}</p>

                            <div className="mt-auto">
                                <a href={project.url} className="btn btn-outline-light w-100 mt-2" target="_blank" rel="noreferrer">
                                    Visita el proyecto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList