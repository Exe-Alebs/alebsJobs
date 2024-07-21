import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'home',
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require('../assets/fonts/NunitoSans_10pt-Bold.ttf'),
    NunitoRegular: require('../assets/fonts/NunitoSans_10pt-Regular.ttf'),
    NutitoMedium: require('../assets/fonts/NunitoSans_10pt-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
