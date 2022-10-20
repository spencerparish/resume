import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Button,
  View,
  Text,
  ImageBackground,
  Linking,
} from "react-native";
import Bedroom from "./bedroom.jpg";
import Underwater1 from "./Underwater.jpg";
import JumpScarepic from "./hqdefault.jpg";
import Hallway from "./Hallway.jpg";
import Backyard from "./maxresdefault.jpg";
import ScarryDock from "./ScarryDock.jpg";
import LeftRight from "./LeftRight.jpg";
import MexicanJumpScare1 from "./hqdefault-copy.png";
import EnglishJumpScare from "./ferda.png";
import BushPic from "./Camo.png";
import Beachpic from "./2762975111_4031164374_b.jpg";
import Stairwell from "./aazo22hp-900.jpg";
import ScarySurf from "./Scarrysurf.png";
import Sundaze1 from "./Sundazepic.jpg";
import Sundaze2 from "./Sundazepiccopy.png";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Welcome! Chose a path to continue." }}
        />
        <Stack.Screen name="Window?" component={Window1} />
        <Stack.Screen name="Door?" component={Door1} />
        <Stack.Screen name="Walk?" component={Dock} />
        <Stack.Screen name="Wait?" component={JumpScare} />
        <Stack.Screen name="Jump?" component={Underwater} />
        <Stack.Screen name="Leave?" component={Darkness} />
        <Stack.Screen name="Walk" component={Walk} />
        <Stack.Screen name="Left?" component={MexicanJumpScare} />
        <Stack.Screen name="Right?" component={GoRight} />
        <Stack.Screen name="Go Down?" component={ScarryEnglish} />
        <Stack.Screen name="Bush?" component={Bush} />
        <Stack.Screen name="Go Up?" component={Beach} />
        <Stack.Screen name="Go to Beach?" component={Sundaze} />
        <Stack.Screen name="Go Back?" component={ScarrySurf} />
        <Stack.Screen name="Next." component={Next} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Window?"
        onPress={() => navigation.navigate("Window?", { name: "Window1" })}
      />
      <Button
        color="#fff"
        title="Door?"
        onPress={() => navigation.navigate("Door?", { name: "Door1" })}
      />
      <ImageBackground
        source={Bedroom}
        resizeMode="cover"
        style={styles.FriendsPic}
      ></ImageBackground>
    </View>
  );
};

const Window1 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Walk?"
        onPress={() => navigation.navigate("Walk?", { name: "Dock" })}
      />
      <Button
        color="#fff"
        title="Wait?"
        onPress={() => navigation.navigate("Wait?", { name: "JumpScare" })}
      />
      <Image source={Backyard} style={styles.FriendsPic} />
    </View>
  );
};

const Door1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Walk"
        onPress={() => navigation.navigate("Walk", { name: "Walk" })}
      />
      <Image source={Hallway} style={styles.FriendsPic} />
    </View>
  );
};

const Walk = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Left?"
        onPress={() =>
          navigation.navigate("Left?", { name: "MexicanJumpScare" })
        }
      />
      <Button
        color="#fff"
        title="Right?"
        onPress={() => navigation.navigate("Right?", { name: "GoRight" })}
      />
      <Image source={LeftRight} style={styles.ChickenJoe} />
    </View>
  );
};

const GoRight = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Go Down?"
        onPress={() =>
          navigation.navigate("Go Down?", { name: "ScarryEnglish" })
        }
      />
      <Button
        color="#fff"
        title="Go Up?"
        onPress={() => navigation.navigate("Go Up?", { name: "Beach" })}
      />
      <Image source={Stairwell} style={styles.ChickenJoe} />
    </View>
  );
};

const Beach = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Go Back?"
        onPress={() => navigation.navigate("Go Back?", { name: "ScarrySurf" })}
      />
      <Button
        color="#fff"
        title="Go to Beach?"
        onPress={() => navigation.navigate("Go to Beach?", { name: "Sundaze" })}
      />
      <Image source={Beachpic} style={styles.ChickenJoe} />
    </View>
  );
};

const ScarrySurf = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={ScarySurf} style={styles.ChickenJoe} />
      <Text> yoooo sup dude. </Text>
    </View>
  );
};

const Sundaze = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={Sundaze1} style={styles.Hat} />

      <Button
        color="#fff"
        title="Next."
        onPress={() => navigation.navigate("Next.", { name: "Next" })}
      />
    </View>
  );
};

const Next = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          Linking.openURL("https://sundazecalifornia.com");
        }}
      >
        https://sundazecalifornia.com
      </Text>
      <Image source={Sundaze2} style={styles.Hat} />
    </View>
  );
};

const MexicanJumpScare = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={MexicanJumpScare1} style={styles.ChickenJoe} />
      <Text> BU!!! </Text>
    </View>
  );
};

const ScarryEnglish = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={EnglishJumpScare} style={styles.ChickenJoe} />
      <Text> BOO MATE!!! </Text>
    </View>
  );
};

const JumpScare = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={JumpScarepic} style={styles.FriendsPic} />
      <Text> BOO!!! </Text>
    </View>
  );
};

const Dock = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Jump?"
        onPress={() => navigation.navigate("Jump?", { name: "Underwater" })}
      />
      <Button
        color="#fff"
        title="Leave?"
        onPress={() => navigation.navigate("Leave?", { name: "Darkness" })}
      />
      <Image source={ScarryDock} style={styles.FriendsPic} />
    </View>
  );
};

const Underwater = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={Underwater1} style={styles.ChickenJoe} />
      <Text> BOO!!! AHAHAHAHA!!! </Text>
    </View>
  );
};

const Darkness = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#fff"
        title="Bush?"
        onPress={() => navigation.navigate("Bush?", { name: "Bush" })}
      />
      <Button
        color="#fff"
        title="Bedroom?"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={Backyard} style={styles.FriendsPic} />
    </View>
  );
};

const Bush = ({ navigation }) => {
  return (
    <View>
      <Button
        color="#fff"
        title="Back to Homescreen"
        onPress={() => navigation.navigate("home", { name: "home" })}
      />
      <Image source={BushPic} style={styles.ChickenJoe} />
      <Text> HOWDY, BOO!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  FriendsPic: {
    flex: 1,
    justifyContent: "center",
    width: deviceWidth,
  },
  ChickenJoe: {
    width: 700,
    height: 500,
  },
  Hat: {
    flex: 1,
    width: 400,
    height: 300,
  },
  hyperlinkStyle: {
    flex: 0.03,
    backgroundColor: "#fff",
  },
});
