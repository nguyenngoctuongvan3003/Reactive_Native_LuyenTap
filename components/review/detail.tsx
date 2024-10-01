import { Text, View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: "vanvuive",
  },
});
const DetailScreen = () => {
  return (
    <View>
      <Text style={styles.review}>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
