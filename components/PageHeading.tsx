import { StyleSheet, Text, View } from "react-native";

export default function PageHeading({ text }) {
  return <Text style={styles.heading}>{text.toUpperCase()}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#D53631",
    marginBlockEnd: 10,
    paddingInline: 10,
  },
});
