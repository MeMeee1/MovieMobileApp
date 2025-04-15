import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import fonts from '@/constant/Fonts';

interface ImageWithTextProps {
  imageSource: any; // Can be a local image (require) or { uri: string }
  text: string;
  showText?:boolean;
}

const ImageWithText = ({ imageSource, text,showText=true }: ImageWithTextProps) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  const imageWidth = width * 0.3;
  const imageHeight = imageWidth * 1.5;

  return (
    <View style={styles.container}>
      <Image
        source={imageSource} // Use imageSource directly
        style={[styles.image, { width: imageWidth, height: imageHeight }]}
        resizeMode="cover"
      />
      {showText &&
        (<Text style={[styles.text, { color: colors.text }]}>{text}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    fontFamily:fonts.medium,
    textAlign: "left",
  },
});

export default ImageWithText;