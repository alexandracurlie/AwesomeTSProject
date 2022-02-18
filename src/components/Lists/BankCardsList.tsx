import React, {useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {BankCardProps, cardsShort} from "../../utilities";
import {BankCardSmall} from "../Cards/BankCardSmall";
import {AddCard} from "../Cards/AddCard";

type renderItemProps = {
  item: BankCardProps
}

export const BankCardsList = () => {
  const [active, setActive] = useState<number | string>(0)

  const renderItem = ({ item }: renderItemProps) => (
    <BankCardSmall cardNumber={item.cardNumber}
                   amount={item.amount}
                   active={active}
                   id={item.id}
                   onPress={() => { setActive(item.id) }} />
  )

  return (
    <FlatList data={cardsShort}
              renderItem={renderItem}
              horizontal={true}
              ListHeaderComponent={AddCard}
              inverted={true}
              style={styles.container}
              keyExtractor={(item => `${item.id}`)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  }
})
