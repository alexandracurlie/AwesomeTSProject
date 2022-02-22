import React from "react";
import {Modal, StyleSheet, Text, View} from "react-native";
import {Button} from "../Buttons/Button";
import {Colors, Fonts, ScreenSize, Shadows} from "../../styles";

type Props = {
  visible: boolean,
  onPress: () => void,
  content: string,
}

export const ModalInfo = ({visible, onPress, content}: Props) => (
  <Modal visible={visible} transparent={true} animationType={"slide"}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Your money<Text style={styles.amount}> $ {content} </Text>is gone</Text>
        <Button size={"small"} title={"Alright"} onPress={onPress} />
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: ScreenSize.width * 67,
    height: ScreenSize.height * 22,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.gray_box,
    backgroundColor: Colors.background,
    ...Shadows.modal,
  },

  text: {
    textAlign: "center",
    fontFamily: Fonts.font,
    fontWeight: "500",
    fontSize: 16,
    color: Colors.black_light,
    marginBottom: 25,
  },

  amount: {
    color: Colors.pink_negative,
    fontWeight: "700",
  }
})
