import React from "react";
import {StyleSheet, View} from "react-native";
import {Tab} from "./Tab";
import {TabPanelProps, Tabs} from "./utilities";

export const TabPanel = ({ tabs, activeTab, onPress }: TabPanelProps) => (
    <View style={styles.container}>
      {tabs.map((item: Tabs) => (
        <Tab title={item.title}
             id={item.id}
             isActive={activeTab === item.id}
             onPress={onPress}/>
      ))}
    </View>
  )

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E9EC",
  },
})
