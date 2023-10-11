import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import RecipeCard from "../components/RecipeCard";

import { API_KEY } from "@env";

const SearchScreen = ({ navigation, route }) => {
  const [txt, chgTxt] = React.useState(null);

  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);

  const handleSearch = () => {
    navigation.navigate("Search", { id: data });
  };

  React.useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${route.params.id}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
  }, []);

  const renderItem = ({ item }) => {
    return (
      <RecipeCard
        image={item.image}
        title={item.title}
        id={item.id}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          height: 40,
          marginTop: 45,
          marginBottom: 15,
        }}
        >
        <TextInput
          onChangeText={chgTxt}
          value={txt}
          placeholder="Search"
          style={styles.input}
          />
        <Button
          title="Search"
          onPress={handleSearch}
          color="#000"
          style={{
              marginTop: 45,
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: "30%",
            }}
            />
      </View>
      {isLoading && <Text>Loading, please wait</Text>}
      {!isLoading && (
          <FlatList
          data={data.menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Display two columns
          />
          )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
});

export default SearchScreen;
