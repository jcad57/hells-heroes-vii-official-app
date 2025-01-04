import React from "react";
import { StyleSheet, Text, GestureResponderEvent, TouchableHighlight } from "react-native";

interface ButtonProps {
  type: "primary" | "secondary";
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ type, text, onPress }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <TouchableHighlight
      style={type === "primary" ? styles.buttonPrimary : styles.buttonSecondary}
      underlayColor={type === "primary" ? "#622D91" : "#B8110B"}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    borderColor: "#622D91",
    borderWidth: 4,
    paddingBlock: 20,
    marginBlock: 5,
    marginInline: 10,
  },
  buttonSecondary: {
    backgroundColor: "#D53631",
    borderWidth: 4,
    borderColor: "#D53631",
    paddingBlock: 20,
    marginInline: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
