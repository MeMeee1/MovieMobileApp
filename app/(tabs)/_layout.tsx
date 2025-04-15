import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import CustomTabBar from '@/components/TabNavigation/CustomTabBar';
import { StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
export default function TabLayout() {
    const { colors } = useTheme();

  return (
    
     
        <Tabs
        screenOptions={{
            headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} theme={colors} />}
        >
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="search" options={{ title: 'Search' }} />
            <Tabs.Screen name="wishlist" options={{ title: 'Wishlist' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    
  );
}
