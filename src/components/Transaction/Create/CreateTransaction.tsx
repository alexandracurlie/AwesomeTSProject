import React, {useMemo} from "react";
import {View} from "react-native";
import {TabPanel} from "../../TabPanel/TabPanel";
import {Switcher} from "../../Switcher/Switcher";
import {dataGenerator, getData, ContainerProps} from "../../../utilities";
import {BankTransaction} from "./BankTransaction";
import {CardTransaction} from "./CardTransaction";

const Container = ({activeTab, onPress, tabs}: ContainerProps) => {
  const data = dataGenerator(CardTransaction, BankTransaction)
  const DataComp = useMemo(() => getData(activeTab, data), [activeTab])

  return (
    <View>
      <TabPanel tabs={tabs}
                activeTab={activeTab}
                onPress={onPress}/>
      <DataComp />
    </View>
  )
}

export const CreateTransaction = Switcher(Container)
