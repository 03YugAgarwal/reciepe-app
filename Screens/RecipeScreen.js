import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";
import { API_KEY } from "@env";
import { Button, Icon } from "@rneui/themed";
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

const RecipeScreen = ({ navigation, route }) => {
  const { width } = Dimensions.get("window");

  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  const [loadSimilar, setLoadSimilar] = useState(null)
  const [loadSimilarLoading, setLoadSimilarLoading] = useState(false)


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLoadSimilar = () => {
    setLoadSimilarLoading(true)
    fetch(`https://api.spoonacular.com/recipes/${route.params.id}/similar?apiKey=${API_KEY}&number=10`)
    .then((response) => response.json())
    .then((json) => {
      setLoadSimilar(json);
      console.log(json);
    })
    .catch((error) => console.error(error));
  };

  return (
    <SectionList
      sections={[
        {
          data: [null], // You can include additional sections here if needed
        },
      ]}
      renderItem={({ item }) => (
        <View style={styles.container}>
          {loading && (
            <Text
              style={{
                marginTop: 100,
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Loading... Please wait
            </Text>
          )}
          {!loading && (
            <View>
              <Image
                source={{ uri: recipe.image }}
                alt={recipe.title}
                style={{ width: width, height: 200 }}
                resizeMode="cover"
              />
              <Text style={styles.title}>{recipe.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.iconText}>
                  <Icon name="timer" />
                  <Text style={styles.texticon}>
                    {recipe.readyInMinutes} minutes
                  </Text>
                </View>
                <View style={styles.iconText}>
                  <Icon name="fastfood" />
                  <Text style={styles.texticon}>
                    {recipe.servings} servings
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderRadius: 64,
                      fontSize: 24,
                      padding: 10,
                    }}
                  >
                    {recipe.healthScore}
                  </Text>
                  <Text style={{ padding: 10 }}>Health Score</Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderRadius: 64,
                      fontSize: 24,
                      padding: 10,
                    }}
                  >
                    {Math.round(recipe.pricePerServing)}
                  </Text>
                  <Text style={{ padding: 10 }}>Price / Serving</Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      borderWidth: 1,
                      borderRadius: 64,
                      fontSize: 24,
                      padding: 10,
                    }}
                  >
                    {Math.round(recipe.spoonacularScore)}
                  </Text>
                  <Text style={{ paddingLeft: 10, paddingTop: 10 }}>
                    Spoonacular
                  </Text>
                  <Text style={{ margin: 0 }}>Score</Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Ingredients
              </Text>
              {recipe.extendedIngredients.map((item, index) => (
                <Text key={index} style={{ marginVertical: 5, margin: 10 }}>
                  {" "}
                  - {item.original}
                </Text>
              ))}
              {!recipe.instructions && (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text>No instructions found! Try again later.</Text>
                </View>
              )}
              {recipe.instructions && (
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: 20,
                    }}
                  >
                    Instructions
                  </Text>
                  <Text style={{ margin: 10, textAlign: "center" }}>
                    {recipe.instructions}
                  </Text>
                </View>
              )}
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <Button onPress={handleLoadSimilar} disabled={loadSimilarLoading}>
                  {" "}
                  Load similar recipes?{" "}
                </Button>
              </View>
              {loadSimilar && <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FlatList
                  data={loadSimilar}
                  renderItem={({ item }) => {
                    return (
                      <RecipeCard
                        image={"../assets/placedholder.jpg"}
                        title={item.title}
                        id={item.id}
                        navigation={navigation}
                      />
                    );
                  }}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={2} 
                />
              </View>}
            </View>
          )}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  iconText: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
  },
  texticon: {
    marginLeft: 10,
  },
});

export default RecipeScreen;
