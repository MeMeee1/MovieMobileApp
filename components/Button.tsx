import { Colors } from '@/constant/Colors';
import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import fonts from '@/constant/Fonts';
interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  buttonColor?: string;
  textColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonColor = Colors.black, // Default blue color
  textColor = Colors.white,    // Default white text
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: buttonColor, opacity: pressed ? 0.8 : 1 },
        buttonStyle,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 17,
    paddingHorizontal: "13%",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 16,
    fontFamily:fonts.medium,
    
  },
});

export default CustomButton;