import { Text, View, StyleSheet, Button } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
});

import { NavigationProp, useNavigation } from "@react-navigation/native";
const DetailScreen = () => {
const navigation: NavigationProp<RootStackParamList>= useNavigation();
  return (
    <View>
      <Text style={styles.review}>DetailScreen a</Text>
      <Button title="Go Home" onPress={()=>navigation.navigate("Home")}></Button>
    </View>
  );
};

export default DetailScreen;
