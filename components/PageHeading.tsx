import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function PageHeading({ text }) {
  const [fontsLoaded] = useFonts({
    "Kanit-SemiBold": require("../assets/fonts/Kanit-SemiBold.ttf"),
  });
  return <Text style={styles.heading}>{text.toUpperCase()}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#D53631",
    marginBlockEnd: 10,
    paddingInline: 10,
    fontFamily: "Kanit-SemiBold",
  },
});
