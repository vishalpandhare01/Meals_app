import { StyleSheet, Text ,View } from "react-native";

export default function MealDetials({duration,complexity,affordability,style}) {
  return (
    <View style={[styles.detials,style]}>
      <Text style={[styles.detialItem]}>{duration}</Text>
      <Text style={[styles.detialItem]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detialItem]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    detials: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
      detialItem: {
        marginHorizontal: 4,
        fontSize: 12,
      },
     
})
