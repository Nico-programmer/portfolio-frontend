import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import parse from "html-react-parser"

// Importamos la petición
import { getBlog } from "../../config/axios"

function PostDetail() {
    // Obtenemos el id
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(
        () => {
            // Función para visualizar proyectos
            async function loadBlog() {
                // Obtenemos los datos basados en la petición
                const res = await getBlog(id)

                // Almacenamos la información
                setBlog(res.data)
            }
            
            loadBlog()
        }, [id]
    )
    
    if(!blog) return <p>Cargando...</p>

    return (
        <div className="container py-5">
            <div className="text-center">
                {/* Título */}
                <h1 className="fw-bold">{blog.title}</h1>

                {/* Fecha */}
                <h2 className="my-2 h6 text-secundary">{blog.date}</h2>

                {/* Imagen */}
                {blog.image && <img src={blog.image} alt={blog.title} className="img-fluid rounded shadow my-4" style={{ maxHeight: "400px", objectFit: "cover" }} />}

                {/* Contenido */}
                <div className="mt-4 mx-auto" style={{ maxWidth: "800px" }}>
                    <p className="lead text-start" style={{textAlign: "justify"}}>{parse(blog.description)}</p>
                </div>

                {/* Boton para volver */}
                <Link to="/blog/" className="btn btn-outline-primary btn-sm rounded-1">Volver</Link>
            </div>
        </div>
    )
}

export default PostDetail