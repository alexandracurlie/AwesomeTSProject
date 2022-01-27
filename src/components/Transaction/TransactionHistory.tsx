import React, {useMemo, useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {TabPanel} from "../TabPanel/TabPanel";
import {History} from "./History/History";
import {tabs, getData} from "./History/utilities";

export const TransactionHistory = () => {

  const [active, setActive] = useState<number>(0)
  const data = useMemo(() => getData(active), [active])

  const onPress = (id: number) => { setActive(id) }

  return (
    <View style={styles.content}>
      <TabPanel tabs={tabs}
                activeTab={active}
                onPress={onPress}/>

      <TextInput placeholder={"Search transaction"}
                 placeholderTextColor={"#A6AAB4"}
                 style={styles.input}
      />
      <History data={data}/>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    height: "100%",
  },

  input: {
    backgroundColor: "#E5E5E5",
    opacity: 0.8,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 15,
  },
})