import { FormEventHandler, useState } from 'react';
import { Button, Flex, Loader, LoadingOverlay, NumberInput, Select, Text } from '@mantine/core'
import { isInRange, useForm } from '@mantine/form'

import { CURRENCIES, TCURRENCIES } from '@/constants/currencies';
import { IConvertedCurrency, getConvertedCurrency } from '@/api/getConvertedCurrency';
import { formatCurrencyToString } from '@/helpers/formatConvertedCurrency';

interface IFormValues {
    from: TCURRENCIES,
    to: TCURRENCIES,
    amount: number
}

export const ConverterPanel = () => {
    const [convertedCurrency, setConvertedCurrency] = useState<IConvertedCurrency>()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<IFormValues>({
        initialValues: {
            from: CURRENCIES[0],
            to: CURRENCIES[1],
            amount: 1,
        },
        validate: {
            amount: (value) => {
                if (isNaN(Number(value))) {
                    return 'value must be number'
                }
                return isInRange({ min: 1 }, 'value must be 1 or more')(Number(value))
            }
        },
    });

    async function handleConvertCurrency(values: IFormValues) {
        setIsLoading(true)
        const res = await getConvertedCurrency(values)
        setConvertedCurrency(res)
        setIsLoading(false)
    }

    return (
        <Flex
            pos='relative'
            component="form"
            direction='column'
            w='100%'
            rowGap='md'
            onSubmit={form.onSubmit((values) => {
                handleConvertCurrency(values)
            }) as FormEventHandler}
        >
            <Select
                withAsterisk
                label="From"
                checkIconPosition="right"
                data={[...CURRENCIES]}
                {...form.getInputProps('from')}
            />
            <Select
                withAsterisk
                label="To"
                checkIconPosition="right"
                data={[...CURRENCIES]}
                {...form.getInputProps('to')}
            />

            <NumberInput
                clampBehavior='strict'
                min={1}
                label="Amount"
                withAsterisk
                {...form.getInputProps('amount')}
            />
            <Button type="submit">Submit</Button>
            {convertedCurrency &&
                <Text>
                    {formatCurrencyToString({
                        amount: convertedCurrency.amount,
                        base: convertedCurrency.base,
                        convertedAmount: Object.values(convertedCurrency.result)[0],
                        convertedBase: Object.keys(convertedCurrency.result)[0] as TCURRENCIES,
                    })}
                </Text>
            }
            <LoadingOverlay visible={isLoading} loaderProps={{ children: <Loader color="indigo" /> }} />
        </Flex>
    )
}
