import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Logo from "./Logo";
import Navbar from "./Navbar";

export default function AppContainer({ children, showLogo = true, navigationHeaderText = "HELL'S HEROES VII" }) {
  // Get the router to navigate back
  const navigate = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        {navigate.canGoBack() && (
          <Pressable onPress={() => navigate.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <View>
              <Image style={styles.backBtn} source={require("../assets/icons/arrow-back.png")} />
            </View>
          </Pressable>
        )}
        <Text style={styles.navigationText}>{navigationHeaderText}</Text>
      </View>

      <ScrollView>
        {showLogo && <Logo />}
        {children}
      </ScrollView>

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: "100%",
    backgroundColor: "black",
  },
  navigationContainer: {
    minWidth: "100%",
    paddingBlockStart: 60,
    paddingBlockEnd: 10,
    justifyContent: "center",
    backgroundColor: "#101010",
  },
  navigationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  backBtn: {
    position: "absolute",
    left: 20,
    width: 30,
    height: 30,
    paddingBlockEnd: 10,
    zIndex: 5,
  },
});
