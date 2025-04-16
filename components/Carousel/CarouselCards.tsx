import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import CarouselCardItem from './CarouselCardItem';
import data from '@/data/data';
import { useTheme } from '@react-navigation/native';

const CarouselCards = () => {
  const carouselRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const updateCurrentIndex = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        ref={carouselRef}
        data={data}
        renderItem={({ item, index }) => (
          <CarouselCardItem
            item={item}
            index={index}
            currentIndex={currentIndex}
            totalItems={data.length}
          />
        )}
        horizontal
        pagingEnabled
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={updateCurrentIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CarouselCards;