import React from "react";
import {StyleSheet, View} from "react-native";
import {TabPanel} from "../../TabPanel/TabPanel";
import {Switcher} from "../../Switcher/Switcher";
import {ContainerProps} from "../../../utilities";

const Container = ({activeTab, onPress, data, tabs}: ContainerProps) => (
  <View style={styles.content}>
    <TabPanel tabs={tabs}
              activeTab={activeTab}
              onPress={onPress}/>
  </View>
)


const styles = StyleSheet.create({
  content: {

  }
})

export const CreateTransaction = Switcher(Container)
