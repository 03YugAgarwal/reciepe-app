import { Text, View } from "react-native";
import React, { Component, useState } from "react";

import { Card, Button } from "@rneui/themed";

export default function RecipeCard(props) {

  const handleButtonPress = () => {
    console.log(props.id);
  }

  return (
    <Card>
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
    </Card>
  );
}
