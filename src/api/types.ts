import { TCURRENCIES } from '@/constants/currencies'

export interface IApiParams {
  from: TCURRENCIES
  to: TCURRENCIES | string
}

export interface IApiResult {
  base: TCURRENCIES
  ms: number
}
