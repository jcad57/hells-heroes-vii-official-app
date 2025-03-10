import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Logo({ shown = true }) {
    return shown && <Image style={styles.logo} source={require("../assets/images/hhvii-logo.png")} />;
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: "center",
        width: 214,
        height: 96,
        resizeMode: "contain",
        marginBlockEnd: 20,
    },
});
