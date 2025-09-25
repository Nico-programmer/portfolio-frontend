import axios from 'axios'

// const apiBlog = axios.create({ baseURL: 'http://localhost:8000/blog/api/post/' })
const apiBlog = axios.create({ baseURL: 'https://portfolio-backend-production-9ec3.up.railway.app/blog/api/post/' })
// const apiPortfolio = axios.create({ baseURL: 'http://localhost:8000/portfolio/api/project/' })
const apiPortfolio = axios.create({ baseURL: 'https://portfolio-backend-production-9ec3.up.railway.app/portfolio/api/project/' })

// portfolio (projects)
export const getAllProjects = () => apiPortfolio.get("/")

// Blog (POST, POST_DETAIL)
export const getAllBlogs = () => apiBlog.get("/")
export const getBlog = (id) => apiBlog.get(`/${id}/`)