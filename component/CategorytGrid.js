import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";


export default function CatogoryGridTie({ title, color ,onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({pressed}) => [
            styles.buttonStyle,
            pressed ? styles.buttonPressed : null
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const d = Dimensions;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,


    elevation: 4, //shadow in android
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible", //platform wise style
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed:{
    opacity:0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
