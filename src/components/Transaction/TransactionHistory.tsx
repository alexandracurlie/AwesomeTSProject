import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {TabPanel} from "../TabPanel/TabPanel";
import {History} from "./History/History";
import {Switcher} from "../Switcher/Switcher";
import {Colors, Fonts} from "../../styles";
import {ContainerProps} from "../../utilities/";

const Container = ({activeTab, onPress, data, tabs}: ContainerProps) => (
  <View style={styles.content}>
    <TabPanel tabs={tabs}
              activeTab={activeTab}
              onPress={onPress}/>

    <TextInput placeholder={"Search transaction"}
               placeholderTextColor={"#A6AAB4"}
               style={styles.input}
    />
    <History data={data}/>
  </View>
)

const styles = StyleSheet.create({
  content: {
    padding: 16,
    height: "100%",
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
