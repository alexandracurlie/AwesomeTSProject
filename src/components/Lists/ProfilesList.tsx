import React, {useState} from "react";
import {FlatList} from "react-native";
import {ProfileCard, ProfileCardProps} from "../Cards/ProfileCard";
import {friends} from "../../utilities";

type renderItemProps = {
  item: ProfileCardProps
}

export const ProfilesList = () => {

  const [active, setActive] = useState<number | string>(0)

  const renderItem = ({ item }: renderItemProps) => (
    <ProfileCard name={item.name}
                 lastName={item.lastName}
                 id={item.id}
                 active={active}
                 onPress={() => { setActive(item.id) }}
    />
  )

  return (
    <FlatList data={friends}
              renderItem={renderItem}
              horizontal={true}
              inverted={true}
    />
  )
}
