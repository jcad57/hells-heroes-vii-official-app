import { StyleSheet, Text, View } from "react-native";

export default function GuideToHell() {
    return (
        <View style={styles.container}>
            <Text style={{ color: "#fff" }}>Coming Soon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 500,
    },
});
