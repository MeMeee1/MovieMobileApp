import { View, Button } from "react-native";
import CarouselCards from "@/components/Carousel/CarouselCards";
import { useTheme } from '@react-navigation/native';
import { useAppTheme } from '../_layout'; // Import our custom theme hook

export default function Profile() {
  const { colors } = useTheme();
  const { toggleTheme, isDark } = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
        padding: 20,
      }}
    >
      <Button 
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        onPress={toggleTheme}
      />
    
    </View>
  );
}