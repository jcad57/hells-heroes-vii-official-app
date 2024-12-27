import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ type, text, onPress }) {
  return (
    <Pressable style={type === "primary" ? styles.buttonPrimary : styles.buttonSecondary} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    borderColor: "#622D91",
    borderWidth: 4,
    paddingBlock: 20,
    marginBlock: 5,
  },
  buttonSecondary: {
    backgroundColor: "#D53631",
    borderWidth: 4,
    borderColor: "#D53631",
    paddingBlock: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
