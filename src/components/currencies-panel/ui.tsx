import { useEffect, useState } from 'react'
import { Flex, Select, Text } from '@mantine/core'

import { CURRENCIES, TCURRENCIES } from '@/constants/currencies'
import { ICurrencies, getCurrencies } from '@/api/getCurrencies'
import { formatCurrencyToString } from '@/helpers/formatConvertedCurrency'

export const CurrenciesPanel = () => {
  const [currency, setCurrency] = useState<TCURRENCIES>()
  const [currencies, setCurrencies] = useState<ICurrencies>()

  useEffect(() => {
    handleGetCurrencies(CURRENCIES[0])
  }, [])

  async function handleGetCurrencies(value: string | null) {
    const res = await getCurrencies({
      from: value as TCURRENCIES,
      to: CURRENCIES.join(',')
    })
    setCurrencies(res)
    setCurrency(value as TCURRENCIES)
  }

  return (
    <Flex direction='column' rowGap='md' w='100%'>
      <Select
        label="Base Currency"
        withAsterisk
        checkIconPosition="right"
        data={[...CURRENCIES]}
        value={currency}
        onChange={handleGetCurrencies}
      />
      <Flex direction='column' rowGap='10px'>
        {
          currencies && Object.entries(currencies.results).map(values => (
            <Text key={values[0]} size='lg' fw='bold'>
              {formatCurrencyToString({
                amount: 1,
                base: currencies.base,
                convertedAmount: values[1],
                convertedBase: values[0] as TCURRENCIES
              })}
            </Text>
          ))
        }
      </Flex>
    </Flex>

  )
}
