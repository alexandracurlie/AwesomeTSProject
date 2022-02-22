import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from "../Avatar/Avatar";
import {Colors, Fonts} from "../../styles";

export type Props = {
  title?: string;
  content: string;
};

export const Header = ({ title, content }: Props) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.content}>
      <Text style={styles.text}>{content}</Text>
      <Avatar userMode={true}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },

  title: {
    color: Colors.gray,
    fontFamily: Fonts.font,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42,
    marginTop: 4,
  },

  text: {
    color: Colors.black,
    fontFamily: Fonts.font,
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 42,
  },
});
