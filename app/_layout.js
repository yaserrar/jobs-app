import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );

  // return <Stack />;
};

export default Layout;
