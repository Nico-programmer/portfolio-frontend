import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// Importamos las peticiones
import { getAllBlogs } from "../../config/axios"

// Importamos los utils
import { truncateText } from "../../utils/truncateText"

function Blog() {
    const [ blogs, setBlogs ] = useState([])

    useEffect(
        () => {
            // Función para visualizar proyectos
            async function loadBlogs() {
                // Obtenemos los datos basados en la petición
                const res = await getAllBlogs()

                // Almacenamos la información
                setBlogs(res.data)
            }

            loadBlogs()
        }, []
    )

    return (
        <div className="container py-4">
            <h1 className="fs-2 fw-bold mb-3">Blog</h1>
            <p className="text-secondary">Aquí podras ver publicaciones y datos de mi persona en manera de posts o publicaciones</p>

            {blogs.map(blog => (
                <div className="py-3" key={blog.id}>
                    <div className="card bg-black text-white shadow border-0">
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={blog.image} alt={blog.title} className="img-fluid rounded-start" style={{ objectFit: "cover", height: "100%" }} />
                            </div>

                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text text-secondary" style={{textAlign: "justify"}}>{truncateText(blog.description, 200)}</p>
                                    <p className="card-text">
                                        <small className="text-secondary">{blog.date}</small>
                                    </p>

                                    <Link to={`/post/${blog.id}`} className="btn btn-outline-primary btn-sm rounded-1">
                                        Ver publicación
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog