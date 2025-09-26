import axios from 'axios'

// --- Blog ---
const apiBlog = axios.create({
    baseURL: 'https://portfolio-backend-production-9ec3.up.railway.app/blog/api/post/'
})

// --- Portfolio ---
const apiPortfolio = axios.create({
    baseURL: 'https://portfolio-backend-production-9ec3.up.railway.app/portfolio/api/project/'
})

// Portfolio (projects)
export const getAllProjects = () => apiPortfolio.get("/")

// Blog (POST, POST_DETAIL)
export const getAllBlogs = () => apiBlog.get("/")
export const getBlog = (id) => apiBlog.get(`/${id}/`)