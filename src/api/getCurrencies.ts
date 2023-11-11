import { CURRENCIES } from '@/constants/currencies'
import { IApiParams, IApiResult } from './types'
import { apiInstance } from './api-instance'

export type ICurrenciesResult = {
  [currency in (typeof CURRENCIES)[number]]?: number
}

export type ICurrencies = IApiResult & {
  results: ICurrenciesResult
  updated: string
}

export const getCurrencies = async (params: IApiParams) => {
  try {
    const { data } = await apiInstance<ICurrencies>({
      url: 'fetch-multi',
      params
    })
    return data
  } catch (error) {
    // handle error
    console.log(error)
  }
}
