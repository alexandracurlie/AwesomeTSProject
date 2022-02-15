import React from "react";
import {IconsSettings} from "../images/svg";

export const cards = [
  {
    id: 0,
    backgroundColor: '#F09D5A',
    cardNumber: "2001",
    expires: "12/25",
    cardHolder: "Lindsey Johnson",
    amount: "$ 1,345.56"
  },
  {
    id: 1,
    backgroundColor: '#8C72FB',
    cardNumber: "8014",
    expires: "08/21",
    cardHolder: "Lindsey Johnson",
    amount: "$ 5,131.89"
  },
  {
    id: 2,
    backgroundColor: '#54D3AD',
    cardNumber: "3881",
    expires: "21/24",
    cardHolder: "Lindsey Johnson",
    amount: "$ 0.42"
  },
];

export const cardsShort = [
  {
    id: 0,
    cardNumber: "2001",
    amount: "$ 1,345.56"
  },
  {
    id: 1,
    cardNumber: "8014",
    amount: "$ 5,131.89"
  },
  {
    id: 2,
    cardNumber: "3881",
    amount: "$ 0.42"
  },
];

export const friends = [
  {id: 0, name: "Boris", lastName: "Johnson"},
  {id: 1, name: "Monti", lastName: "Python"},
  {id: 2, name: "Angela", lastName: "Merkel"},
]

export const cardsData = [
  {id: 0, icon: IconsSettings.info, title: "Profile information"},
  {id: 1, icon: IconsSettings.password, title: "Password"},
  {id: 2, icon: IconsSettings.email, title: "Email"},
  {id: 3, icon: IconsSettings.phone, title: "Phone Number"},
  {id: 4, icon: IconsSettings.notification, title: "Notification"},
  {id: 5, icon: IconsSettings.currency, title: "Currency"},
  {id: 6, icon: IconsSettings.lang, title: "Language"},
  {id: 7, icon: IconsSettings.account, title: "Account"},
  {id: 8, icon: IconsSettings.policy, title: "Privacy Policy"},
  {id: 9, icon: IconsSettings.terms, title: "Terms of Use"},
]

export const sent = [
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
export const received = [
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
