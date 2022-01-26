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
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
    fontSize: 12,
  },

  info: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});
