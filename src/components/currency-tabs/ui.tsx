import { useState } from 'react';
import { Tabs, TabsList, TabsTab } from '@mantine/core'

import { ConverterPanel } from '../converter-panel';
import { CurrenciesPanel } from '../currencies-panel';

import classes from './styles.module.scss'

export const CurrencyTabs = () => {
  const [activeTab, setActiveTab] = useState<string | null>('converter');

  return (
    <Tabs
      aria-label="currency exchanger"
      value={activeTab}
      onChange={setActiveTab}
      classNames={{
        root: classes.root,
        panel: classes.panel,
        tab: classes.tab,
      }}
    >
      <TabsList>
        <TabsTab value="converter">Converter</TabsTab>
        <TabsTab value="currencies">Currencies</TabsTab>
      </TabsList>

      <Tabs.Panel value="converter" pt="xs">
        <ConverterPanel />
      </Tabs.Panel>

      <Tabs.Panel value="currencies" pt="xs">
        <CurrenciesPanel />
      </Tabs.Panel>
    </Tabs>
  )
}
