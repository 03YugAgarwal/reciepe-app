import React from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";
import RecipeCard from "../components/RecipeCard";

const DUMMY = [
    {
      id: 782585,
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      imageType: "jpg",
      title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    },
    {
      id: 716426,
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      imageType: "jpg",
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    },
    {
      id: 715497,
      image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
      imageType: "jpg",
      title: "Berry Banana Breakfast Smoothie",
    },
    {
      id: 715415,
      image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
      imageType: "jpg",
      title: "Red Lentil Soup with Chicken and Turnips",
    },
    {
      id: 716406,
      image: "https://spoonacular.com/recipeImages/716406-312x231.jpg",
      imageType: "jpg",
      title: "Asparagus and Pea Soup: Real Convenience Food",
    },
    {
      id: 644387,
      image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      imageType: "jpg",
      title: "Garlicky Kale",
    },
    {
      id: 715446,
      image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
      imageType: "jpg",
      title: "Slow Cooker Beef Stew",
    },
    {
      id: 782601,
      image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
      imageType: "jpg",
      title: "Red Kidney Bean Jambalaya",
    },
    {
      id: 795751,
      image: "https://spoonacular.com/recipeImages/795751-312x231.jpg",
      imageType: "jpg",
      title: "Chicken Fajita Stuffed Bell Pepper",
    },
    {
      id: 766453,
      image: "https://spoonacular.com/recipeImages/766453-312x231.jpg",
      imageType: "jpg",
      title: "Hummus and Za'atar",
    },
  ]

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      {DUMMY.map((item) => {
        return (
          <RecipeCard
            image={item.image}
            title={item.title}
            key={item.id}
            id={item.id}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;
