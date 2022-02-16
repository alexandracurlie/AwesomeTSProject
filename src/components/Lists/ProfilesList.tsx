import React, {useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {CardMini} from "../Cards/CardMini";
import {Avatar} from "../Avatar/Avatar";
import {friends} from "../../utilities";

export const ProfilesList = () => {
  const [active, setActive] = useState<number | string>(0)

  const renderItem = ({ item }: any) => (
    <CardMini title={`${item.name} \n ${item.lastName}`}
              id={item.id}
              active={active}
              onPress={() => { setActive(item.id) }}
              icon={<Avatar userMode={false}/>}
    />
  )

  return (
    <FlatList data={friends}
              renderItem={renderItem}
              horizontal={true}
              inverted={true}
              style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  }
})
