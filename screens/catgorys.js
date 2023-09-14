import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatogoryGridTie from "../component/CategorytGrid";





export default function CatogorysScreen({ navigation }) {
  function renderCatigoryItem(itemData) {
    function pressModuler() {
      console.log("presss");
      navigation.navigate("MealsOverview")
    }
    return (
      <CatogoryGridTie
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressModuler}
      />
    );
  }


  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCatigoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
