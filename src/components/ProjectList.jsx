import { useEffect, useState } from "react"
import { getAllProjects } from "../config/axios.config"

function ProjectsList() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function loadProjects() {
            const res = await getAllProjects()
            setProjects(res.data)
        }
        loadProjects()
    }, [])

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-black text-white rounded-xl shadow-lg overflow-hidden hover:shadow-indigo-500/30 transition">
                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                    <div className="p-5 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-indigo-400">{project.title}</h2>
                        <p className="text-gray-300 text-justify mt-2 flex-grow">{project.description}</p>

                        <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-block w-full text-center border border-gray-400 text-gray-200 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white px-4 py-2 rounded-md transition">
                            Visita el proyecto
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList