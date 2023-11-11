## RochWin

#### Stack 🪄:  NextJs / TypeScript / Mantine UI / Axios / SCSS 
#### Started ⛹️‍♂️: 11/11/2023 🕑 || Finished 🌉: 11.11.2023 ~23:40 🕦

## Functionality: :accessibility Accessibility / Convertor ⏭️ / Get Current Currency 💱

<img src="https://i.ibb.co/GxZmFQD/Screenshot-2023-11-12-000442.png" alt="example"/>

```javascript
// example code block
import axios from 'axios'
import { ENV_KEYS } from '@/constants/env-keys'

export const apiInstance = axios.create({
  baseURL: ENV_KEYS.BASE_API_URL,
  params: {
    api_key: ENV_KEYS.API_KEY
  }
})
```
