import React from "react";
import {StyleSheet} from "react-native";
import {CardMini} from "./CardMini";
import {AddIcon} from "../../images/svg/AddIcon";
import {Colors} from "../../styles";

export const AddCard = () => (
  <CardMini title={"New \n credit card "}
            style={headerComponentStyles}
            id={123}
            icon={<AddIcon color={Colors.white} />} />
)

const headerComponentStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.gray,
  },

  title: {
    color: Colors.gray,
  }
})
