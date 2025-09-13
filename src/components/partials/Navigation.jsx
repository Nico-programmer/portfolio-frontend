import { Link } from "react-router-dom"
import cv from "/CV.pdf"

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold fst-italic fs-4" to="/">Mi portafolio</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        <li className="nav-item">
                            <Link to="/blog/" className="nav-link">Blog</Link>
                        </li>

                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <a href={cv} className="btn btn-primary btn-sm px-3 shadow-sm" rel="noreferrer" download="cv.pdf">
                                Descargar CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}