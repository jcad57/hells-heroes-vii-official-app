import { StyleSheet, Text, View } from "react-native";
import Map from "./Map";
import GuideToHellIntro from "./GuideToHellIntro";
import { useState } from "react";

export default function GuideToHell() {
    const [intro, setIntro] = useState(true);

    return <View style={styles.container}>{intro ? <GuideToHellIntro setIntro={setIntro} /> : <Map />}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: "100%",
        height: 500,
    },
});
