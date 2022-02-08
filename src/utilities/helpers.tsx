import React from "react";
import {HomeIcon, WalletIcon, SendIcon, DiagramIcon, SettingsIcon} from "../images/svg";
import {IconProp, Tabs} from "./types";
import {sent, received} from "./constants";

export const getData = (active: number | string) => active === 0 ? sent : received

export const tabsGenerator = (tabs: string[]): Tabs[] =>
  tabs.map((item: string, index: number) => ({id: index, title: item}))

export const Icons = {
  home: ({color}: IconProp) => <HomeIcon color={color}/>,
  wallet: ({color}: IconProp) => <WalletIcon color={color}/>,
  send: ({color}: IconProp) => <SendIcon color={color}/>,
  diagram: ({color}: IconProp) => <DiagramIcon color={color}/>,
  settings: ({color}: IconProp) => <SettingsIcon color={color}/>,
}
