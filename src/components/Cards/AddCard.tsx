import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {CardMini} from "./CardMini";
import {ModalForm} from "../Modals/ModalForm";
import {AddIcon} from "../../images/svg/AddIcon";
import {Colors} from "../../styles";

export const AddCard = () =>{
  const [modalForm, setModalForm] = useState<boolean>(false)

  const toggleModalForm = () => {
    setModalForm(!modalForm)
  }

  return (
    <View>
      <CardMini title={"New \n credit card"}
                style={headerComponentStyles}
                id={123}
                icon={<AddIcon color={Colors.white} />}
                onPress={toggleModalForm}
      />
      <ModalForm visible={modalForm}
                 onPress={toggleModalForm}
      />
    </View>
  )
}

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
