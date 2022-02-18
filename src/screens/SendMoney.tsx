import React from "react";
import {SafeAreaView, StyleSheet, ScrollView} from "react-native";
import {Header} from "../components/Header/Header";
import {CreateTransaction} from "../components/Transaction/Create/CreateTransaction";
import {Colors} from "../styles";

export const SendMoney = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <Header content={"Send money"} />
      <CreateTransaction tabs={['Card', 'Bank']} />
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
