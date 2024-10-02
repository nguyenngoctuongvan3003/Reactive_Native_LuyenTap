import { StyleSheet, Text, View } from "react-native"
import { globalStyle } from "../../utils/const"

const styles=StyleSheet.create({
    about:{
        fontSize:30
    }
})
const AboutScreen =()=>{
    return(
        <View>
            <Text style={[styles.about,globalStyle.globalFont]}>AboutScreen</Text>
        </View>
    )
}

export default AboutScreen;