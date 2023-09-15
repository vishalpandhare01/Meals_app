import { StyleSheet ,View ,Text } from "react-native";

export default function Subtitle({children}) {
  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        color: "#e2b497",
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:24,
        marginVertical:4,
        padding: 6,
      }
})