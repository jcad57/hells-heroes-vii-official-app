import { Image, StyleSheet, Text, View } from "react-native";

import PageHeading from "./PageHeading";
import Button from "./Button";

export default function GuideToHellIntro({ setIntro }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headingTop}>YOU MAY ALL GO TO HELL</Text>
            <Text style={[styles.headingTop, styles.headingBottom]}> BUT I WILL GO TO TEXAS</Text>
            <Text style={styles.subHeading}>
                Welcome to Houston! Check out some of our favorite local businesses while you're here.
            </Text>
            <Image style={styles.icon} source={require("../assets/icons/rock.png")} />
            <Button type="primary" text="continue" onPress={() => setIntro(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: "center",
        gap: 20,
    },
    headingTop: {
        fontSize: 34,
        fontFamily: "Kanit",
        color: "#D53631",
        lineHeight: 35,
        textAlign: "center",
    },
    headingBottom: {
        fontSize: 28,
    },
    subHeading: {
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "Kanit",
        fontSize: 24,
        textAlign: "center",
    },
    icon: {
        marginInline: "auto",
        marginBlock: 20,
        width: 100,
        height: 100,
    },
});
