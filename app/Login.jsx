import { View, Text, Dimensions, TextInput, Button } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  function LoginHandle() {}
  return (
    <View style={{ padding: 20, gap: 20 }}>
      <View>
        <View>
          <Text style={{ fontSize: 26, fontWeight: 600 }}>User Name</Text>
        </View>
        <View
          style={{
            width: Dimensions.get("screen").width - 42,
            backgroundColor: "#d7d9db",
            borderRadius: 50,
            padding: 10,
            borderWidth: 1,
            borderColor: "#d7d9db",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={22} color="grey" />
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "500",
              borderWidth: 1,
              borderColor: "#d7d9db",
              height: 30,
              width: 230,
            }}
            placeholderTextColor="grey"
            placeholder="Search...."
          />
        </View>
      </View>
      <View>
        <View>
          <Text style={{ fontSize: 26, fontWeight: 600 }}>Password</Text>
        </View>
        <View
          style={{
            width: Dimensions.get("screen").width - 42,
            backgroundColor: "#d7d9db",
            borderRadius: 50,
            padding: 10,
            borderWidth: 1,
            borderColor: "#d7d9db",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={22} color="grey" />
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "500",
              borderWidth: 1,
              borderColor: "#d7d9db",
              height: 30,
              width: 230,
            }}
            placeholderTextColor="grey"
            placeholder="Search...."
          />
        </View>
      </View>

      <Button title="Login" />
      <Button title="Register" />
    </View>
  );
}
