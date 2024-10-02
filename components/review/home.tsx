import { Button, Text, View } from "react-native"

const HomeScreen =(props:any)=>{
    const {navigation}=props;
    return(
        <View>
            <Text>Home screen</Text>
            <Button title="View Detail" onPress={()=>navigation.navigate("review-detail")}></Button>
        </View>
    )
}

export default HomeScreen;