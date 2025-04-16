import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../Button';
import { Colors } from '@/constant/Colors';
import fonts from '@/constant/Fonts';

interface CardItem {
  imgUrl: string;
  title: string;
  body: string;
}

interface CarouselCardItemProps {
  item: CardItem;
  index: number;
  currentIndex: number;
  totalItems: number;
}

const CarouselCardItem = ({ item, index, currentIndex, totalItems }: CarouselCardItemProps) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
 const dotColor = colors.background === 'rgb(1, 1, 1)' ? Colors.white : Colors.gray;

 
 const inverseColor = colors.text === "rgb(229, 229, 231)" ? Colors.black : Colors.white;
  
  const imageHeight = width * 1.2; 
  const dotSize = width * 0.02;

  return (
    <View style={[styles.container, { width }]}>
      {/* Image with gradient overlay */}
      <View style={[styles.imageContainer, { height: imageHeight }]}>
        <Image
          source={typeof item.imgUrl === 'string' ? { uri: item.imgUrl } : item.imgUrl}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', colors.background]}
          locations={[0.5, 1]}
          style={styles.gradient}
        />

        {/* Options text ("My list" and "Discover") */}
        <View style={styles.optionsContainer}>
          <Text style={[styles.optionsTxt, { color: colors.text }]}>My list</Text>
          <Text style={[styles.optionsTxt, { color: colors.text }]}>Discover</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="+ Wishlist"
          buttonColor={Colors.gray} // Semi-transparent white to match the design
          textColor={Colors.white}
          // buttonStyle={{ height: buttonHeight, width: width * 0.4, borderRadius: 20 }}
        />
        <CustomButton
          title="Details"
          buttonColor= {Colors.gold}// Gold color to match the design
          textColor= {inverseColor} 
          
        />
      </View>

      {/* Dots indicator */}
      <View style={styles.dotsContainer}>
        {Array.from({ length: totalItems }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === currentIndex ? Colors.gold : dotColor, // Gold for active, semi-transparent for inactive
                width: dotSize,
                height: dotSize,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    
    overflow: 'hidden',
   
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%', 
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 30, // Positioned higher to match the design
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 2,
  },
  optionsTxt: {
    fontSize: 18,
    fontFamily:fonts.regular,
    paddingHorizontal: 15,
    opacity: 0.9,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  dot: {
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default CarouselCardItem;