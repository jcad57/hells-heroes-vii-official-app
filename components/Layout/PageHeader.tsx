import { Image, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Logo from "../Logo";

export default function PageHeader({ logo = true }) {
    // Get the router to navigate back
    const navigate = useRouter();
    return (
        <View style={styles.navigationContainer}>
            {navigate.canGoBack() && (
                <Pressable onPress={() => navigate.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <View>
                        <Image style={styles.backBtn} source={require("../../assets/icons/arrow-back.png")} />
                    </View>
                </Pressable>
            )}
            <Logo shown={logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    navigationContainer: {
        minWidth: "100%",
        paddingBlockEnd: 5,
        justifyContent: "center",
    },
    navigationText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    backBtn: {
        position: "absolute",
        left: 20,
        top: 20,
        width: 30,
        height: 30,
        paddingBlockEnd: 10,
        zIndex: 5,
    },
});
