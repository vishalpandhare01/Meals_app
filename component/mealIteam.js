import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default function MealItems({
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}//android
        // style for ios
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detials}>
            <Text style={styles.detialItem}>{duration}</Text>
            <Text style={styles.detialItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detialItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4, //shadow in android
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible", //platform wise style
  },
  innserContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
  buttonPressed:{
    opacity:0.5,
  },
});
