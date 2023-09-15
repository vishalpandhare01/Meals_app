import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CatogorysScreen from "./screens/catgorys";
import { NavigationContainer } from "@react-navigation/native"; //install  npm i --save name_of_module
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //installl
import MealsOverviewScreen from "./screens/mealOverviewScreen";
import MealDetialsscreen from "./screens/MealDetialsscreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Disclaimer from "./screens/DisclaimerScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#cccccc" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CatogorysScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Disclaimer" component={Disclaimer} />
    </Drawer.Navigator>
  );
}

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
            name="Drawer"
            component={DrawerNavigatior}
            options={{
              // title: "All Categories",
              headerShown: false,
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
