import React from "react";
import {StyleSheet, View} from "react-native";
import {Tab} from "./Tab";
import {Colors} from "../../styles";
import {TabPanelProps, Tabs} from "../../constants/types";

export const TabPanel = ({ tabs, activeTab, onPress }: TabPanelProps) => (
    <View style={styles.header}>
      {tabs.map((item: Tabs) => (
        <Tab title={item.title}
             id={item.id}
             isActive={activeTab === item.id}
             onPress={onPress}/>
      ))}
    </View>
  )

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_diver,
  },
})
