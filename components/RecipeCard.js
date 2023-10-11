import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React, { Component, useState } from "react";

export default function RecipeCard(props) {
  const handleButtonPress = () => {
    props.navigation.navigate("Recipe", { id: props.id });
  };

  return (
    <TouchableWithoutFeedback onPress={handleButtonPress} >
      <View
        style={{
          width: "48%",
          height: 200,
          backgroundColor: "#fff",
          margin: 2,
        }}
      >
        <Image
          source={{ uri: props.image }}
          alt={props.title}
          style={{ width: "100%", height: 150 }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
