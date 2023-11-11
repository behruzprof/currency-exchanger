import Head from 'next/head'
import { CurrencyTabs } from '@/components/currency-tabs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Currency Exchanger</title>
        <meta name="description" content="Use our free currency converter. Get accurate and reliable foreign exchange rates." />
        <meta property="og:title" content="Currency Converter | Foreign Exchange Rates | FARXAD TASK FOR ME"/>
        <meta property="og:type" content="webpage"/>
        <meta property="og:description" content="Use our free currency converter. Get accurate and reliable foreign exchange rates."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CurrencyTabs />
      </main>
    </>
  )
}
