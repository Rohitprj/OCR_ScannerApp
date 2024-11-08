import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";

export default () => {
  const [scannedImage, setScannedImage] = useState();
  const router = useRouter();
  const scanDocument = async () => {
    try {
      const { scannedImages } = await DocumentScanner.scanDocument();

      if (scannedImages && scannedImages.length > 0) {
        const img = scannedImages[0];
        setScannedImage(img);
        console.log("Image Taken");
        console.log(img);
        router.push({ pathname: "/ConvertTxt", params: { uri: img } });
      } else {
        setScannedImage(null);
        console.log("Image null");
      }
    } catch (error) {
      console.error("Document scanning failed", error);
      console.log("Image error");
      setScannedImage(null);
    }
  };

  useEffect(() => {
    scanDocument();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {scannedImage ? (
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
          source={{ uri: scannedImage }}
        />
      ) : (
        <View />
      )}
    </View>
  );
};
