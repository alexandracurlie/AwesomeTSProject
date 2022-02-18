import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {BankCard} from "../Cards/BankCard";
import {cards} from "../../utilities";

export const CardCarousel = () => {
  const carouselRef = useRef();
  const { width } = Dimensions.get('window')

  const renderItem = ({item, index}: any) => {
    const onSwap = () => {
      // @ts-ignore
      carouselRef.current.scrollToIndex(index)
    }
    return <BankCard backgroundColor={item.backgroundColor}
                     cardNumber={item.cardNumber}
                     expires={item.expires}
                     cardHolder={item.cardHolder}
                     onSwap={onSwap}
                     key={item.cardNumber} />
  }

  return (
    <View style={styles.header}>
      <Carousel itemContainerStyle={styles.carouselItem}
                data={cards}
                renderItem={renderItem}
                separatorWidth={0}
                ref={carouselRef}
                initialIndex={1}
                inActiveOpacity={0.6}
                itemWidth={width-80} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    aspectRatio: 1.8,
  },

  carouselItem: {
    justifyContent: 'center',
    padding: 10,
  },
})
