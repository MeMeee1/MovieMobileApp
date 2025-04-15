import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native'; // Import the useTheme hook
import { Colors } from '@/constant/Colors';
import fonts from '@/constant/Fonts';

const icons = {
  index: 'home',
  search: 'search',
  wishlist: 'bookmark',
  profile: 'user',
};

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme(); // Get the current theme colors
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          backgroundColor: colors.background, // Use theme background color
        },
      ]}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const iconName = icons[route.name as keyof typeof icons];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tab}>
            <FontAwesome
              name={iconName as any}
              size={24}
              color={isFocused ? Colors.gold : colors.text} // Adjust icon color
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? Colors.gold : colors.text, // Adjust text color
                },
              ]}
            >
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   
    paddingTop: 10,
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    fontFamily: fonts.medium
  },
});
