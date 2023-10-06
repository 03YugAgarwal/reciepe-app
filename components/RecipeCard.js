import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React, { Component, useState } from "react";

import { Card, Button } from "@rneui/themed";

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
        {/* <Card style={{ width: "50%" }}>
        <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: props.image,
        }}
        />
        <Card.Title>{props.title}</Card.Title>
        <Button
        title="View Recipe"
        buttonStyle={{
            borderColor: "rgba(78, 116, 289, 1)",
          }}
          type="outline"
          raised
          titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
          onPress={handleButtonPress}
          />
        </Card> */}
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
