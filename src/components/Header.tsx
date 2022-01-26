import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export type HeaderProps = {
  title?: string;
  amount: string;
};

export const Header = ({title, amount}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.amount}>{amount}</Text>
        <View style={styles.imgContainer}>
          <Image source={require('./artworks.jpg')}
                 style={styles.img}

          />
        </View>
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

  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#DDDDEB',
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: 40,
    height: 40,
  }
});
