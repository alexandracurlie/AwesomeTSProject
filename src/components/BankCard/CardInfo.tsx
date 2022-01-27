import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardTitleProps} from "./utilities";

export const CardInfo = ({title, info}: CardTitleProps) => {
  return (
    <View style={styles.content}>
      <Text style={[styles.title, styles.font]}>{title}</Text>
      <Text style={[styles.info, styles.font]}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  font: {
    fontFamily: "Sarabun-SemiBold",
  },

  title: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: 0.4
  },

  info: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.1
  },
});
