import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import SurfPic from "./SurfPic.jpg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={SurfPic} style={styles.SurfPic} />
      <Text>My name is Spencer Parish</Text>
      <Text>I love surfing, hanging with friends, and being stoked 24/7</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  SurfPic: {
    width: 400,
    height: 400,
  },
});
