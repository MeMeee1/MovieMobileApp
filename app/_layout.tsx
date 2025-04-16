import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createContext, useContext, useState } from 'react';
import { useFonts } from '@/constant/Fonts';
// Create a theme context
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {}
});

export default function RootLayout() {
  const [isDark, setIsDark] = useState(false);
  const fontsLoaded = useFonts(); // Call the hook to get the boolean

  // Wait for fonts to load before rendering the app
  if (!fontsLoaded) {
    return null; // Or you can return a loading screen here
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme: () => setIsDark(!isDark),
      }}
    >
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <Layout />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  const { dark } = useTheme();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false 
          }} 
        />
      </Stack>
    </>
  );
}

// Export the theme hook for use in components
export function useAppTheme() {
  return useContext(ThemeContext);
}