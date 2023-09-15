import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CatogorysScreen from "./screens/catgorys";
import { NavigationContainer } from "@react-navigation/native"; //install  npm i --save name_of_module
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //installl
import MealsOverviewScreen from "./screens/mealOverviewScreen";
import MealDetialsscreen from "./screens/MealDetialsscreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#cccccc" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="mealCatgories"
            component={CatogorysScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {title:catId};
            // }}
          />
           <Stack.Screen
            name="MealDetial"
            component={MealDetialsscreen}
            // options={{headerRight:()=>{
            //   return <Button title="Tap me" onPress={} />
            // }}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
