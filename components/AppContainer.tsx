import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Logo from "./Logo";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
  showLogo?: boolean;
  navigationHeaderText?: string;
}

export default function AppContainer({
  children,
  showHeader = true,
  navigationHeaderText = "HELL'S HEROES VII",
}: AppContainerProps) {
  // Get the router to navigate back
  const navigate = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navigationContainer}>
          {navigate.canGoBack() && (
            <Pressable onPress={() => navigate.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <View>
                <Image style={styles.backBtn} source={require("../assets/icons/arrow-back.png")} />
              </View>
            </Pressable>
          )}
          <Logo />
        </View>
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
    paddingTop: 60,
  },
  navigationContainer: {
    minWidth: "100%",
    paddingBlockEnd: 5,
    justifyContent: "center",
    backgroundColor: "#000",
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
    top: 20,
    width: 30,
    height: 30,
    paddingBlockEnd: 10,
    zIndex: 5,
  },
});
