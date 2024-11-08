import React, { useRef, useState } from "react";
import {
  Image,
  View,
  Dimensions,
  StyleSheet,
  Text,
  PanResponder,
  Animated,
  Button,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import * as ImageManipulator from "expo-image-manipulator";
import Card from "../assets/images/Card.jpg";

export default function DisplayCapturedImage() {
  const { uri } = useLocalSearchParams();

  if (!Card) {
    return <Text>No image to display</Text>;
  }
  const [cropArea, setCropArea] = useState({
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });
  const cropAreaRef = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const windowWidth = Dimensions.get("window").width;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        cropAreaRef.setValue({
          x: gestureState.moveX,
          y: gestureState.moveY,
        });
      },
      onPanResponderRelease: (e, gestureState) => {
        setCropArea({
          ...cropArea,
          x: gestureState.moveX,
          y: gestureState.moveY,
        });
      },
    })
  ).current;

  const cropImage = async () => {
    try {
      const croppedImage = await ImageManipulator.manipulateAsync(
        imageUri,
        [
          {
            crop: {
              originX: cropArea.x,
              originY: cropArea.y,
              width: cropArea.width,
              height: cropArea.height,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );
      console.log("Cropped image:", croppedImage.uri);
    } catch (error) {
      console.log("Error cropping image:", error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={Card}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          resizeMode: "contain",
        }}
      />
      <Animated.View
        style={[
          styles.cropArea,
          {
            width: cropArea.width,
            height: cropArea.height,
            transform: [
              { translateX: cropAreaRef.x },
              { translateY: cropAreaRef.y },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      />

      <Button title="Crop Image" onPress={cropImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  cropArea: {
    borderColor: "red",
    borderWidth: 2,
    position: "absolute",
  },
});
