import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // flexDirection:"row",
    // flexDirection:"column-reverse"
    // flexWrap: tu xuong dong neu khong du cho
    justifyContent:"center", //can giua hang ngang web
    // justifyContent:"space-between" //sat le hon space-around
    // alignItems:"center",
    borderWidth:1,
    borderColor:"red",
    flex:1 //lay ca chieu cao cua dien thoai
  },
  item1: {
    backgroundColor: "violet",
    padding: 30,
    // width:50,
    // height:50
  },
  item2: {
    backgroundColor: "orange",
    padding: 30,
    // height:100
    
  },
  item3: {
    backgroundColor: "cyan",
    padding: 30,
  },
  item4: {
    backgroundColor: "green",
    padding: 30,
    // width:50,
    // height:200
  },
});
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item 1</Text>
      </View>

      <View style={styles.item2}>
        <Text>item 2</Text>
      </View>

      <View style={styles.item3}>
        <Text>item 3</Text>
      </View>

      <View style={styles.item4}>
        <Text>item 4</Text>
      </View>
    </View>
  );
};
export default FlexBox;
