import { Text, View, StyleSheet } from "react-native";
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";
//font
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';



SplashScreen.preventAutoHideAsync();



const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (

    // <View>
    //   <HomeScreen />
    //   <DetailScreen />
    //   <AboutScreen />
    // </View>

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="review-detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
