import { View, Text, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
// import TextRecognition from "@react-native-ml-kit/text-recognition";
import { useLocalSearchParams } from "expo-router";

export default function ConvertTxt() {
  const { uri } = useLocalSearchParams();
  console.log("ConvertTxt", uri);

  //   const scanBusinessCard = async (imageUri) => {
  //     try {
  //       const result = await TextRecognition.recognize(imageUri);
  //       console.log("Recognized text:", result.text);
  //       setRes(result.text);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   useEffect(() => {
  //     if (uri) {
  //       scanBusinessCard(uri);
  //     }
  //   }, [uri]);
  //   //   if (!device) {
  //   //     return <Text>Loading camera...</Text>;
  //   //   }
  return (
    <View style={{ backgroundColor: "pink" }}>
      <Text>ConvertTxt Page into OCR</Text>
      <Image
        source={{ uri }}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height / 4,
        }}
      />
    </View>
  );
}
