import axios from 'axios'
import cookie from 'cookie'

export const apiClient = axios.create({
  baseURL: 'http://localhost/api',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const csrf = async () => {
  try {
    await apiClient.get('http://localhost/sanctum/csrf-cookie')
  } catch (e) {
    console.log('ERROR: ', e)
  }
}
