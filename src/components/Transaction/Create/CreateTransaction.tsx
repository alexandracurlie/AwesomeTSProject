import React, {useMemo} from "react";
import {View} from "react-native";
import {TabPanel} from "../../TabPanel/TabPanel";
import {Switcher} from "../../Switcher/Switcher";
import {dataGenerator, getData, ContainerProps} from "../../../utilities";
import {BankTransaction} from "./BankTransaction";
import {CardTransaction} from "./CardTransaction";

const Container = ({activeTab, onPress, tabs}: ContainerProps) => {

  const newData = dataGenerator(CardTransaction, BankTransaction)
  const Data = useMemo(() => getData(activeTab, newData), [activeTab])

  return (
    <View>
      <TabPanel tabs={tabs}
                activeTab={activeTab}
                onPress={onPress}/>
      <Data />
    </View>
  )
}

export const CreateTransaction = Switcher(Container)
