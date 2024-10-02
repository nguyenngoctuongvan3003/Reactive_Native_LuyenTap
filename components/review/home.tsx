import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IReview {
  id: number;
  title: string;
  star: number;
}
const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList>= useNavigation();
  const [review, setReview] = useState<IReview[]>([
    { id: 1, title: "React Native", star: 5 },
    { id: 2, title: "dung loi nua", star: 5 },
  ]);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Review List:</Text>
      <View>
        <FlatList
          data={review}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate("review-detail",item)}>
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* <Button
        title="View Detail"
        onPress={() => navigation.navigate("review-detail")}
      ></Button> */}
    </View>
  );
};

export default HomeScreen;

const styles=StyleSheet.create({
    reviewItem:{
        padding:15,
        backgroundColor:"#ccc",
        margin:15
    }
})