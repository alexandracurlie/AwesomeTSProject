import React from "react";
import {IconProp} from "./types";
import {HomeIcon, WalletIcon, SendIcon, DiagramIcon, SettingsIcon} from "../images/svg";

export const cards = [
  {backgroundColor: '#F09D5A', cardNumber: "2001", expires: "12/25", cardHolder: "Lindsey Johnson"},
  {backgroundColor: '#8C72FB', cardNumber: "8014", expires: "08/21", cardHolder: "Lindsey Johnson"},
  {backgroundColor: '#54D3AD', cardNumber: "3881", expires: "21/24", cardHolder: "Lindsey Johnson"},
];

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

export const Icons = {
  home: ({color}: IconProp) => <HomeIcon color={color}/>,
  wallet: ({color}: IconProp) => <WalletIcon color={color}/>,
  send: ({color}: IconProp) => <SendIcon color={color}/>,
  diagram: ({color}: IconProp) => <DiagramIcon color={color}/>,
  settings: ({color}: IconProp) => <SettingsIcon color={color}/>,
}
