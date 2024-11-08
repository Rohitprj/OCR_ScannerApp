import { Pressable, View } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function index() {
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Link
        href={{
          pathname: "/DocScanner",
        }}
        style={{
          borderWidth: 1,
          padding: 18,
          width: 68,
          borderRadius: 60,
          backgroundColor: "lightgrey",
        }}
      >
        <FontAwesome name="camera" size={28} color="grey" />
      </Link>
    </View>
  );
}
