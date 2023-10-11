import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { API_KEY } from "@env";

import HomeScreen from "./Screens/HomeScreen";
import RecipeScreen from "./Screens/RecipeScreen";
import IngredientScreen from "./Screens/IngredientScreen";
import SearchScreen from "./Screens/SearchScreen";
import SearchIngredients from './Screens/SearchIngredients'

import { Icon } from "@rneui/themed";

const Stack = createStackNavigator();
const StackIngredient = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
function StackNavigationIngredients() {
  return (
    <StackIngredient.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackIngredient.Screen name="HomePage" component={IngredientScreen} />
      <StackIngredient.Screen name="Recipe" component={RecipeScreen} />
      <StackIngredient.Screen name="Search" component={SearchIngredients} />
    </StackIngredient.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="RecipeHome"
        component={StackNavigation}
        options={{
          tabBarLabel: "Recipe",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="knife" type="material-community"  />;
          },
        }}
      />
      <Tab.Screen
        name="Ingredients"
        component={StackNavigationIngredients}
        options={{
          tabBarLabel: "Menu-Items",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="fruit-watermelon" type="material-community" />;
          },
        }}
      />

    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
