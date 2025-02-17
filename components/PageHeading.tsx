import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

import { PageHeadingProps } from "@/data/types";

export default function PageHeading({ text }: PageHeadingProps) {
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
