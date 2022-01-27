export type TransactionProps = { name: string, date: string, amount: string }

export type ItemProps = { item: TransactionProps}

export type DailyTransactionItem = { day: string, data: TransactionProps[] }

export type HistoryProps = { data: DailyTransactionItem[] }

export type SectionHeaderProps = {
  title: string,
}

export const tabs = [
  {id: 0, title: "Sent"},
  {id: 1, title: "Received"},
]

const sent = [
  {
    day: "Today",
    data: [
      {name: "Rebecca Moore", date: "31 Jan, 2022", amount: "972.00"},
      {name: "Daniel Craig", date: "31 Jan, 2022", amount: "172.22"},
    ]
  },
  {
    day: "Yesterday",
    data: [
      {name: "Jolie Pitt", date: "30 Jan, 2022", amount: "32.00"},
      {name: "Jeffrey Pink", date: "30 Jan, 2022", amount: "523.96"},
    ]
  },
]
const received = [
  {
    day: "Today",
    data: [
      {name: "Rebecca Moore", date: "31 Jan, 2022", amount: "54.00"},
    ]
  },
  {
    day: "Yesterday",
    data: [
      {name: "Daniel Craig", date: "30 Jan, 2022", amount: "32.00"},
      {name: "Jeffrey Pink", date: "30 Jan, 2022", amount: "523.96"},
      {name: "Jolie Pitt", date: "31 Jan, 2022", amount: "123.22"},
    ]
  },
]

export const getData = (active: number) => active === 0 ? sent : received