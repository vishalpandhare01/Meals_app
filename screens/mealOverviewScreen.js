import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItems from "../component/mealIteam";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (catgory) => catgory.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  function renderMealIteam(itemData) {
    const mealsItemData = {
      id: itemData.item.id,
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
