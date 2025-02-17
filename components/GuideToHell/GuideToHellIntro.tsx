import { Image, StyleSheet, Text, View } from "react-native";

import Button from "../Button";
import useLocalAsyncStorage from "@/hooks/useLocalAsyncStorage";

interface GuideToHellPropTypes {
    setIntro: (value: boolean) => void;
}

export default function GuideToHellIntro({ setIntro }: GuideToHellPropTypes) {
    const { setStorage } = useLocalAsyncStorage();

    return (
        <View style={styles.container}>
            <Text style={styles.headingTop}>YOU MAY ALL GO TO HELL AND I WILL GO TO TEXAS</Text>
            <Text style={styles.subHeading}>
                Welcome to Houston! Check out some of our favorite local businesses while you're here.
            </Text>
            <Image style={styles.icon} source={require("../../assets/icons/rock.png")} />
            <Button
                type="primary"
                text="lets go!"
                onPress={() => {
                    setStorage("showGuideToHellInto", { showIntro: false });
                    setIntro(false);
                }}
            />
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
        fontSize: 34,
    },
    subHeading: {
        color: "rgba(255, 255, 255, 0.8)",
        paddingInline: 20,
        fontFamily: "Kanit",
        fontSize: 20,
        textAlign: "center",
    },
    icon: {
        marginInline: "auto",
        marginBlock: 20,
        width: 100,
        height: 100,
    },
});
