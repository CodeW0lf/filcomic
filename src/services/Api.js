import axios from 'axios'

export default () => {
  const baseURL =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:8081/' : '/api'
  return axios.create({
    baseURL,
  })
}
