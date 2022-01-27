import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header';
import {CardCarousel} from "../../components/CardCarousel";
import {TransactionHistory} from "../../components/Transaction/TransactionHistory";

export const HomePage = () => (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Header amount={'$ 926.21'} title={'Your balance'} />
        <CardCarousel />
        <TransactionHistory />
        <View />
      </View>
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F1F4",
  },
});
