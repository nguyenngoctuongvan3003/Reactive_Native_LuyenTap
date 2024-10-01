import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./components/flexBox";
import EvilIcons from "@expo/vector-icons/EvilIcons";
interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [toDo, setToDo] = useState("");
  const [listToDo, setListToDo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!toDo) {
      Alert.alert("Lỗi input to do", "To do không được null", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    setListToDo([...listToDo, { id: randomInteger(2, 2000000), name: toDo }]);
    setToDo("");
  };
  const deleteToDo = (id: number) => {
      const newToDos = listToDo.filter((item) => item.id !== id);
      setListToDo(newToDos);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Hehehe</Text>

        {/* form  */}
        <View style={styles.form}>
          <TextInput
            value={toDo}
            style={styles.toDoInput}
            onChangeText={(value) => setToDo(value)}
          />
          <Button title="Add to do" onPress={handleAddTodo} />
        </View>

        {/* list to do  */}
        <View style={styles.toDo}>
          <FlatList
            data={listToDo}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  
                >
                  <View style={styles.groupToDo}>
                    <Text style={styles.toDoItem}>{item.name}</Text>
                    <EvilIcons name="close" size={24} color="black" onPress={() => deleteToDo(item.id)} />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
// dùng vòng map để tạo ra 1 array mới mà không làm thay đổi giá trị của biến ban đầu
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "red",
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "orange",
    fontSize: 40,
    // flex:1
  },
  form: {
    // flex:2
    marginBottom: 30,
  },
  toDo: {
    flex: 1,
   
  },
  list: {
    padding: 30,
    backgroundColor: "pink",
    marginBottom: 30,
  },
  toDoInput: {
    borderWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  toDoItem: {
    fontSize: 30,
    
  },
  groupToDo: {
    flexDirection: "row",
    alignItems:"center" ,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom:15,
    justifyContent:"space-between",
    padding:15,
    marginHorizontal:10
  }
});
