import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "row",
    backgroundColor: "pink",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    // borderWidth:1,
    // borderColor:"red",
  },
  headerText: {
    width: "100%",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
});
const AppHeader = () => {
  const navigation:any = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="menu-sharp"
        size={24}
        color="black"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={styles.headerText}>Cố lên nào</Text>
    </View>
  );
};

export default AppHeader;
