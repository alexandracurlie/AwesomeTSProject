import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header';

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View>
          <Header amount={'$ 926.21'} title={'Your balance'} />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
