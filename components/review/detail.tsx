import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import starIcon from "../../assets/images/star.png";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
  reviewText: {
    // color:"white",
    fontSize: 25,
    fontFamily: OPENSANS_REGULAR,
    padding: 15,
  },
});

import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList> = useRoute();
  return (
    // <ImageBackground source={require("../../assets/images/react-native.png")} style={{flex:1}}>
    <View>
      <Text style={styles.reviewText}>Id:{route.params?.id}</Text>
      <Text style={styles.reviewText}>Tiêu đề:{route.params?.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.reviewText}>Rating:{route.params?.star}</Text>
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
      </View>

      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
    // </ImageBackground>
  );
};

export default DetailScreen;
