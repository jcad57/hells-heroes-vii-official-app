import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import PageHeading from "./PageHeading";
import Button from "./Button";
import Map from "./Map";

export default function GuideToHell() {
    return (
        <View style={styles.container}>
            <Map />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: "100%",
        height: 500,
    },
});
