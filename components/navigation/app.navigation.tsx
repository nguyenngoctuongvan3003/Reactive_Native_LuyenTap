import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      {/* screenOptions={{headerShown:false}}> */}
    
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header:()=><AppHeader/> }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Chi tiết review" }}
      />
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="Home1"
        component={HomeLayout}
        options={{ title: "Trang chủ", header:()=><></>}}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "Thông tin",header:()=><AppHeader/> }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
