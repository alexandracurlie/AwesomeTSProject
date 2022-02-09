import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Title} from "../Title/Title";
import {Colors, Fonts} from "../../styles";

type SectionProps = {
  title: string,
  btn?: string,
  children: any,
}

export const Section = ({title, btn, children}: SectionProps) => (
  <View style={styles.container}>
    <View style={styles.container_title}>
      <Title title={title} />
      {btn &&
          <Pressable>
            <Text style={styles.btn}>{btn}</Text>
          </Pressable>
      }
    </View>
    {children}
  </View>
)


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  container_title: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    fontFamily: Fonts.font,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.purple,
  }
})
