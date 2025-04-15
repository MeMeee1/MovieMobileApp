import React from 'react';
import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ImageWithText from './MovieItem';
import Images from '@/constant/Images'; // Import your Images constants
import { Colors } from '@/constant/Colors';
import fonts from '@/constant/Fonts';

const MovieCategory = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const data = [
    { id: 'Marvel Studio', content: ['Hawkeye', 'Thor: Love and Thunder', 'Wanda Vision', 'Moana'], enableText:true },
    { id: 'Best Selling', content: ['Moana', 'How To Train Your Dragon', 'Girl Boss'], enableText:false},
  ];

  // Map movie titles to image sources
  const movieImages: { [key: string]: any } = {
    'Moana': Images.moana,
    'How To Train Your Dragon': Images.dragon,
    'Girl Boss': Images.glass_dome,
   
    'Hawkeye': Images.moana,
    'Thor: Love and Thunder': Images.dragon, 
    'Wanda Vision': Images.glass_dome,
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            {/* Header: Category title on the left, "See more" on the right */}
            <View style={styles.header}>
              <Text style={[styles.categoryTitle, { color: colors.text }]}>
                {item.id}
              </Text>
              <Text style={[styles.seeMore]}>
                See more
              </Text>
            </View>

            {/* Horizontal list of movies */}
            <FlatList
              data={item.content}
              renderItem={({ item: movie }) => (
                <ImageWithText
                  imageSource={movieImages[movie]} // Use local image source
                  text={movie}
                  showText = {item.enableText}
                />
              )}
              keyExtractor={(movie, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.movieList}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  categoryContainer: {
    marginVertical: 10,
    marginBottom:20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    
  },
  categoryTitle: {
    marginBottom:5,
    fontSize: 18,
    fontFamily:fonts.medium

  },
  seeMore: {
    fontSize: 14,
    fontFamily:fonts.regular,
    color:Colors.gold,
  },
  movieList: {
    paddingHorizontal: 10,
  },
});

export default MovieCategory;