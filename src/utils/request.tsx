import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Authorization': 'Token token=8e5601340ccf11d6f6689bfa2f7a73c0',
    'Content-Type': 'application/json'
  }
});

export default instance