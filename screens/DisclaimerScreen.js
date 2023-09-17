import { StyleSheet, Text, View } from "react-native";

export default function Disclaimer(){
    return(
        <View style={styles.container}> 
            <Text style={styles.heading}>Disclaimer !!!</Text>
            <Text>The reader must take the responsibility to review the listed ingredients before cooking to ensure none of the ingredients causes potential adverse effects to</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        margin:8
    },
    heading:{
        fontSize:24,
        textAlign:'center',
    }


})