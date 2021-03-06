import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {Colors} from "../../styles";

type Props = {
  userMode: boolean,
}

export const Avatar = ({userMode}: Props) => (
  <View style={styles.imgContainer}>
    <Image source={require('../../images/avatars/artworks.jpg')}
           style={[styles.img, userMode && styles.mode]} />
  </View>
)

const styles = StyleSheet.create({
  imgContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 50,
  },

  img: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 50,
  },

  mode: {
    borderColor: Colors.avatar_border,
    borderWidth: 3,
  }
})
