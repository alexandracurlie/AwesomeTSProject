import React from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import {Colors} from "../styles";
import {Header} from "../components/Header/Header";
import {CreateTransaction} from "../components/Transaction/Create/CreateTransaction";

export const SendMoney = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Header content={"Send money"} />
        <CreateTransaction tabs={['Card', 'Bank']} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
