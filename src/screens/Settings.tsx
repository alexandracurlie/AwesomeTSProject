import React from "react";
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Header} from "../components/Header/Header";
import {Card} from "../components/Cards/Card";
import {cardsData} from "../utilities";
import {Colors, ScreenSize} from "../styles";

export const Settings = () => {
  const renderItem = ({item}: any) => <Card title={item.title} icon={item.icon} key={item.id} />

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header content={"Settings"} />
      <FlatList data={cardsData}
                renderItem={renderItem}
                style={styles.list}
                contentContainerStyle={styles.contentContainerStyle}
                numColumns={2}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  contentContainerStyle: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: ScreenSize.width * 100,
  }
});
