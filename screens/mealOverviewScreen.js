import { StyleSheet, Text, View } from 'react-native'
import {MEALS} from '../data/dummy-data'

export default function MealsOverviewScreen(){
    return<View style={styles.container}>
        <Text>MEals MealsOverview Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }


})