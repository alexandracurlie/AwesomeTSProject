import React from "react";
import {Modal, StyleSheet, View} from "react-native";
import {Button} from "../Buttons/Button";
import {TextInput} from "react-native-paper";
import {Colors, Fonts, ScreenSize, Shadows} from "../../styles";

type Props = {
  visible: boolean,
  onPress: () => void,
}

export const ModalForm = ({visible, onPress}: Props) => (
  <Modal visible={visible} transparent={true} animationType={"slide"}>
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput label={"Card number"}
                   mode={"outlined"}
                   style={[styles.input, styles.large]}
                   placeholderTextColor={Colors.gray}
                   selectionColor={Colors.purple}
                   outlineColor={Colors.gray_light} />

        <TextInput  label={"Expires"}
                    mode={"outlined"}
                    style={[styles.input, styles.medium]}
                    placeholderTextColor={Colors.gray}
                    selectionColor={Colors.purple}
                    outlineColor={Colors.gray_light} />

        <TextInput  label={"CVC"}
                    mode={"outlined"}
                    style={[styles.input, styles.medium]}
                    placeholderTextColor={Colors.gray}
                    selectionColor={Colors.purple}
                    outlineColor={Colors.gray_light} />

        <TextInput label={"Card holder"}
                   mode={"outlined"}
                   style={[styles.input, styles.large]}
                   placeholderTextColor={Colors.gray}
                   selectionColor={Colors.purple}
                   outlineColor={Colors.gray_light} />

        <View style={styles.btn}>
          <Button size={"large"} title={"Confirm"} onPress={onPress} />
        </View>
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
    width: ScreenSize.width * 85,
    height: ScreenSize.height * 35,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.gray_box,
    backgroundColor: Colors.background,
    ...Shadows.modal,
  },

  input: {
    height: 40,
    marginVertical: 5,
    backgroundColor: Colors.background,
    fontFamily: Fonts.font,
  },

  btn: {
    width: "100%",
    marginVertical: 20,
  },

  large: {
    width: "100%",
  },

  medium: {
    width: "45%",
  }
})
