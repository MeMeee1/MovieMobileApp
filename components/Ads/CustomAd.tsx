import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomButton from '../Button';
import { Colors } from '@/constant/Colors';
import Images from '@/constant/Images'; // Import the Images constant
import fonts from '@/constant/Fonts';

export default function CustomAd() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const imageHeight = width * 0.5; 

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={Images.ads_icon} 
        style={[styles.image, { height: imageHeight }]}
        resizeMode="cover"
      />
      <Text style={[styles.header, { color: colors.text }]}>
        Black friday is here
      </Text>
      <Text style={[styles.description, { color: colors.text }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sociis pulvinar auctor nibh nibh iaculis id.
      </Text>
      <CustomButton
        title="Check details"
        buttonColor={Colors.gold}
        textColor={Colors.black}
  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
  
  },
  image: {
    width: '100%',
    borderRadius: 2,
    overflow: 'hidden',
  },
  header: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontFamily:fonts.semiBold
     
  },
  description: {
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.8,
    fontFamily:fonts.regular

  },
  
});