import { Text, View } from "react-native";
import CarouselCards from "@/components/Carousel/CarouselCards";
import { useTheme } from '@react-navigation/native';

export default function Search() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{color: colors.text}}>Search Panel</Text>
    </View>
  );
}