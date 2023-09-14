import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatogorysScreen from "./screens/catgorys";
import { NavigationContainer } from "@react-navigation/native"; //install  npm i --save name_of_module
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //installl
import MealsOverviewScreen from "./screens/mealOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mealCatgories" component={CatogorysScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
