import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItems from "../component/mealIteam";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealIteam(itemData) {
    const mealsItemData = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      duration: itemData.item.duration,
    };
    return <MealItems {...mealsItemData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(iteam) => iteam.id}
        renderItem={renderMealIteam}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
