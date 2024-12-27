import { Pressable, StyleSheet, Text } from "react-native";

export default function FilterButton({ text, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "#622D91",
    borderWidth: 4,
    paddingBlock: 20,
  },
  selected: {
    backgroundColor: "#D53631",
    borderWidth: 4,
    paddingBlock: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
