import React, {useMemo} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {TabPanel} from "../../TabPanel/TabPanel";
import {History} from "../History/History";
import {Switcher} from "../../Switcher/Switcher";
import {Colors, Fonts} from "../../../styles";
import {getData, received, sent, ContainerProps} from "../../../utilities";

const newData = {
  0: sent,
  1: received,
}

const Container = ({activeTab, onPress, tabs}: ContainerProps) => {

  const data = useMemo(() => getData(activeTab, newData), [activeTab])

  return (
    <View style={styles.content}>
      <TabPanel tabs={tabs}
                activeTab={activeTab}
                onPress={onPress}/>

      <TextInput placeholder={"Search transaction"}
                 placeholderTextColor={Colors.gray}
                 style={styles.input}
      />
      <History data={data}/>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    height: "60%",
    fontFamily: Fonts.font,
  },

  input: {
    backgroundColor: Colors.gray_box,
    opacity: 0.8,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 15,
  },
})

export const TransactionHistory = Switcher(Container)
