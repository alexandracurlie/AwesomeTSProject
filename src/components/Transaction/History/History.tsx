import React from "react";
import {SectionList} from "react-native";
import {Transaction} from "./Transaction";
import {SectionHeader} from "./SectionHeader";
import {HistoryProps, ItemProps} from "../../../utilities";

export const History = ({ data }: HistoryProps) => {

  const renderSectionHeader = ({ section: { day }}: any) => (<SectionHeader title={day} />)

  const renderItem = ({ item }: ItemProps) => (
    <Transaction name={item.name} date={item.date} amount={item.amount}/>
  )

  return (
      <SectionList sections={data}
                   renderItem={renderItem}
                   renderSectionHeader={renderSectionHeader}
                   bounces
      />
  )
}
