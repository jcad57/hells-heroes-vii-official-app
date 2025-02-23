import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { AppContainerProps } from "@/data/types";
import { Platform } from "react-native";

import Navbar from "../Navbar";
import PageHeader from "./PageHeader";

export default function AppContainer({
    logo,
    children,
    navigationHeaderText = "HELL'S HEROES VII",
}: AppContainerProps) {
    return (
        <ImageBackground source={require("../../assets/images/app-bg-image.jpg")} style={styles.bgImage}>
            <View style={[styles.container, { paddingTop: Platform.OS === "ios" ? 56 : 40 }]}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <PageHeader logo={logo} />
                    {children}
                </ScrollView>
                <Navbar />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        minWidth: "100%",

        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
});
