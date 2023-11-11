import { TCURRENCIES } from '@/constants/currencies';

interface IFormatCurrencyToString {
    base: TCURRENCIES,
    amount: number,
    convertedBase: TCURRENCIES,
    convertedAmount: number
}

export const formatCurrencyToString = (currency: IFormatCurrencyToString ) => {
    return `${currency.amount} ${currency.base}  =>  ${currency.convertedAmount} ${currency.convertedBase}`
}