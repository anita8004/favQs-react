import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Authorization': 'Token token=8e5601340ccf11d6f6689bfa2f7a73c0',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(
  function(response) {
    console.log('success response: ', response);
    if (response.status === 200) {
      return response.data
    }
    return response
  },
  function(error) {
    console.log('error response: ', error);
    return Promise.reject(error);
  }
)

export default instance