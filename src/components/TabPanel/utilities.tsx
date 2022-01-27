
export interface Tabs  {
  id: string | number,
  title: string,
}

export interface TabProps extends Tabs  {
  isActive: boolean,
  onPress: any,
}

export type TabPanelProps = {
  tabs: Tabs[],
  activeTab: number,
  onPress: (id: number)=> void,
}