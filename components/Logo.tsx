import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return <Image style={styles.logo} source={require("../assets/images/hhvii-logo.png")} />;
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    width: 214,
    height: 96,
    resizeMode: "contain",
    marginBlockEnd: 25,
  },
});
