import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TextInput} from 'react-native-paper';
import {Colors, Fonts} from "../../../styles";
import {Button} from "../../Buttons/Button";
import {ModalInfo} from "../../Modals/ModalInfo";
import {Schema} from "../../../utilities";

export const TransactionForm = () => {
  const [modalInfo, setModalInfo] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [state, setState] = useState({amount: "", description: "", } )

  const toggleModalInfo = () => {
    setModalInfo(!modalInfo)
  }

  const onTextChange = (value: any) => {
    setState(prevState => ({...prevState, amount: value}))

    if (Schema.amount(value)) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <TextInput mode={"outlined"}
                   label={"Amount"}
                   left={<TextInput.Affix text={"$"} textStyle={styles.text} />}
                   style={styles.input}
                   selectionColor={Colors.purple}
                   outlineColor={Colors.gray_light}
                   placeholderTextColor={Colors.gray}
                   value={state.amount}
                   keyboardType={"decimal-pad"}
                   onChangeText={onTextChange}
                   error={error} />

        <TextInput mode={"outlined"}
                   label={"Description (optional)"}
                   style={styles.input}
                   placeholderTextColor={Colors.gray}
                   selectionColor={Colors.purple}
                   outlineColor={Colors.gray_light}
                   value={state.description}
                   onChangeText={(value) => setState(prevState => ({...prevState, description: value}))} />
      </View>

      <View style={styles.margin}>
        <Button size={"large"} title={"Confirm"} disabled={error} onPress={toggleModalInfo}/>
      </View>

      <ModalInfo visible={modalInfo}
                 onPress={toggleModalInfo}
                 content={state.amount} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  margin: {
    marginVertical: 10,
  },

  input: {
    marginBottom: 10,
    backgroundColor: Colors.background,
    fontFamily: Fonts.font,
  },

  text: {
    paddingLeft: 20,
    fontFamily: Fonts.font,
    fontSize: 18,
    color: Colors.gray_light,
  },
})
