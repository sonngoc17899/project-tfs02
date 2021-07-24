import axios from '../utils/axios'

const ApiService = {
  get(resource, config = {}) {
    return axios.get(resource, config)
  },
  post(resource, params, config = {}) {
    return axios.post(resource, params, config)
  },
  update(resource, params, config = {}) {
    return axios.put(resource, params, config)
  },
  updateBulk(resource, params, config = {}) {
    return axios.put(resource, params, config)
  },
  delete(resource, config = {}) {
    return axios.delete(resource, config)
  },
  customRequest(config) {
    return axios(config)
  },
}

export default ApiService


