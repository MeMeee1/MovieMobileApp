import React from 'react';
import { Text, View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CarouselCards from '@/components/Carousel/CarouselCards';
import { Colors } from '@/constant/Colors';
import MovieCategory from '@/components/MovieCategory/MovieCategory';
import CustomAd from '@/components/Ads/CustomAd';


export default function Index() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
 

  // Define sections for the FlatList
  const sections = [
    { type: 'carousel', component: <CarouselCards /> },
    { type: 'movieCategory', component: <MovieCategory /> },
    { type: 'customAd', component: <CustomAd /> },
  ];

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isAtBottom =
      contentOffset.y + layoutMeasurement.height >= contentSize.height - 50 ||
      contentSize.height <= layoutMeasurement.height;


  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <View style={styles.section}>
            {item.component}
          </View>
        )}
        keyExtractor={(item, index) => item.type + index}
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20, // Add padding to ensure content isn’t cut off
  },
  section: {
    width: '100%',
  },
});