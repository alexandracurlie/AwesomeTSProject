import React from "react";
import {Tabs} from "./types";

export const dataGenerator = (data1: any, data2: any) => ({0: data1, 1: data2})

export const getData = (active: number | string, data: any) => active === 0 ? data[0] : data[1]

export const tabsGenerator = (tabs: string[]): Tabs[] =>
  tabs.map((item: string, index: number) => ({id: index, title: item}))
