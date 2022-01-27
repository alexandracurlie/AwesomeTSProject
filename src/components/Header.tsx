import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from "./Avatar/Avatar";

export type HeaderProps = {
  title?: string;
  amount: string;
};

export const Header = ({ title, amount }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.amount}>{amount}</Text>
        <Avatar userMode={true}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#A6AAB4',
    fontFamily: "Sarabun-Bold",
  },

  content: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  amount: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '600',
    color: '#171D33',
    fontFamily: "Sarabun-SemiBold",
  },
});
