import React from "react";
import {StyleSheet, View, Dimensions, Text, Pressable} from "react-native";
import {Colors} from "../../styles";

const width = Dimensions.get('screen').width/100
const height = Dimensions.get('screen').height/100

type CardProps = {
  icon: any,
  title: string,
}

export const Card = ({icon, title}: CardProps) => (
  <View style={styles.container}>
    <Pressable style={styles.avatar}>
      {icon}
    </Pressable>
    <Text>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: width * 43.7,
    height: height * 17.2,
    padding: 12,
    marginVertical: 7,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: Colors.white,
  },

  avatar: {
    borderRadius: 50,
    backgroundColor: Colors.purple,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
})
