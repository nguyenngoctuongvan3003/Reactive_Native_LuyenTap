import { Text, View, StyleSheet } from "react-native";
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";
//font
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";
//drawerNavigation
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
//Stacknavigation
import { NavigationContainer } from "@react-navigation/native"; //drawer hay stack đều dùng
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./components/navigation/app.navigation";

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
  const Drawer = createDrawerNavigator();
  return (
    // <View>
    //   <HomeScreen />
    //   <DetailScreen />
    //   <AboutScreen />
    // </View>

    <NavigationContainer>
      <AppNavigation/>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Trang chủ' }} />
        <Stack.Screen name="review-detail" component={DetailScreen} options={{ title: 'Chi tiết review' }}/>
      </Stack.Navigator> */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="about" component={AboutScreen} options={{title:"Thông tin"}} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
