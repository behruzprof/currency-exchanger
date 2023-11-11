import { TCURRENCIES } from '@/constants/currencies'
import { IApiParams, IApiResult } from './types'
import { apiInstance } from './api-instance'

export type IConvertedCurrencyResults = {
  [currency in TCURRENCIES]?: number
}

export type IConvertedCurrency = IApiResult & {
  result: IConvertedCurrencyResults & { rate: number }
  amount: number
}

export const getConvertedCurrency = async (
  params: IApiParams & { amount: number }
) => {
  try {
    const { data } = await apiInstance<IConvertedCurrency>({
      url: '/convert',
      params
    })
    return data
  } catch (error) {
    // handle error
    console.log(error)
  }
}
