import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SectionList,
} from "react-native";
import { API_KEY } from "@env";
import { Button, Icon } from "@rneui/themed";

const RecipeScreen = ({ navigation, route }) => {
  const { width } = Dimensions.get("window");

  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

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
    console.log("Handle similar");
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
          {loading && <Text>Loading... Please wait</Text>}
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
                <Button onPress={handleLoadSimilar}>
                  {" "}
                  Load similar recipes?{" "}
                </Button>
              </View>
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
