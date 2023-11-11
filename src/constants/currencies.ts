export const CURRENCIES = [
  'USD',
  'RUB',
  'EUR',
  'UZS',
  'CNY',
  'JPY',
  'KZT',
  'TJS'
] as const

export type TCURRENCIES = typeof CURRENCIES[number] 
