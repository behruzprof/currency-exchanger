import axios from 'axios'
import { ENV_KEYS } from '@/constants/env-keys'

export const apiInstance = axios.create({
  baseURL: ENV_KEYS.BASE_API_URL,
  params: {
    api_key: ENV_KEYS.API_KEY
  }
})
