import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {Card} from "./BankCard/Card";
import {cards} from "./BankCard/utilities";

export const CardCarousel = () => {
  const carouselRef = useRef();
  const { width } = Dimensions.get('window')

  const renderItem = ({item, index}: any) => {

    const onSwap = () => {
      // @ts-ignore
      carouselRef.current.scrollToIndex(index)
    }
    return <Card backgroundColor={item.backgroundColor}
                cardNumber={item.cardNumber}
                expires={item.expires}
                cardHolder={item.cardHolder}
                onSwap={onSwap}
          />
    }

  return (
    <View style={styles.container}>
      <Carousel itemContainerStyle={styles.carouselItem}
                data={cards}
                renderItem={renderItem}
                separatorWidth={0}
                ref={carouselRef}
                initialIndex={1}
                inActiveOpacity={0.6}
                itemWidth={width-80}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1.8,
  },

  carouselItem: {
    justifyContent: 'center',
    padding: 10,
  },
})