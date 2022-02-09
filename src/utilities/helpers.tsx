import React from "react";
import {HomeIcon, WalletIcon, SendIcon, DiagramIcon, SettingsIcon} from "../images/svg";
import {IconProp, Tabs} from "./types";

export const dataGenerator = (data1: any, data2: any) => ({0: data1, 1: data2})

export const getData = (active: number | string, data: any) => active === 0 ? data[0] : data[1]

export const tabsGenerator = (tabs: string[]): Tabs[] =>
  tabs.map((item: string, index: number) => ({id: index, title: item}))

export const Icons = {
  home: ({color}: IconProp) => <HomeIcon color={color}/>,
  wallet: ({color}: IconProp) => <WalletIcon color={color}/>,
  send: ({color}: IconProp) => <SendIcon color={color}/>,
  diagram: ({color}: IconProp) => <DiagramIcon color={color}/>,
  settings: ({color}: IconProp) => <SettingsIcon color={color}/>,
}
