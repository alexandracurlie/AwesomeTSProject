
// Avatar

export type AvatarProps = {
  userMode: boolean,
}

// Bank card

export type CardProps = {
  id?: string | number | undefined;
  backgroundColor?: string;
  cardNumber: string;
  expires?: string;
  cardHolder?: string;
  index?: string | number;
  onSwap?: () => void;
  amount?: string | number | undefined;
};

export type BankCardProps = {
  cardNumber: string;
  amount: string;
  id: number | string;
}

export type BankCardSmallProps = {
  id: number | string,
  cardNumber: string,
  amount: string,
  onPress?: () => void,
  active?: number | string
}


// Header

export type HeaderProps = {
  title?: string;
  content: string;
};


// Tab panel

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


// Transaction

export type ContainerProps = {
  activeTab: number,
  onPress: (id: number | string) => void,
  tabs: Tabs[],
}

export type TransactionProps = {
  name: string,
  date: string,
  amount: string }

export type ItemProps = {
  item: TransactionProps
}

export type DailyTransactionItem = {
  day: string,
  data: TransactionProps[]
}

export type HistoryProps = {
  data: DailyTransactionItem[]
}

export type TitleProps = {
  title: string,
}

export type IconProp = {
  color: string,
}
