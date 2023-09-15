import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetials from "../component/MealDetials";
import Subtitle from "../component/mealDetial/subtitle";
import List from "../component/mealDetial/list";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../component/iconbutton";

export default function MealDetialsscreen({ route }) {
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const mealsData = MEALS.find((meal) => meal.id === mealId);

  function headerButtonHndler() {
    navigation.navigate('mealCatgories')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonHndler}
          icon={"home"}
          color={"white"}
        />
      ), // <Button title="tap me" />
    });
  }, [navigation, headerButtonHndler]);

  return (
    <ScrollView style={styles.rooContainer}>
      <Image style={styles.image} source={{ uri: mealsData.imageUrl }} />
      <Text style={styles.title}>{mealsData.title}</Text>
      <View></View>
      <MealDetials
        duration={mealsData.duration}
        complexity={mealsData.complexity}
        affordability={mealsData.affordability}
        style={styles}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List mealsData={mealsData.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List mealsData={mealsData.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rooContainer: {
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
