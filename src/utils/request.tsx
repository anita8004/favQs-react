import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  timeout: 10000,
  headers: {
    'Authorization': `Token token=${import.meta.env.VITE_API_TOKEN}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: false
});

instance.interceptors.request.use(
  function (config) {
    const userToken = Cookies.get('User-Token');
    if (userToken) {
      config.headers['User-Token'] = userToken
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  function(response) {
    console.log('success response: ', response);
    if (response.status === 200) {
      if ('error_code' in response.data) {
        if (response.data.error_code === 20) {
          const signInPath = window.location.href + 'sign-in';
          window.location.assign(signInPath)
        } else {
          alert(response.data.message)
        }
      }
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