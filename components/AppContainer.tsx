import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { AppContainerProps } from "@/data/types";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function AppContainer({
    logo,
    children,
    navigationHeaderText = "HELL'S HEROES VII",
}: AppContainerProps) {
    // Get the router to navigate back
    const navigate = useRouter();

    return (
        <ImageBackground source={require("../assets/images/app-bg-image.jpg")} style={styles.bgImage}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.navigationContainer}>
                        {navigate.canGoBack() && (
                            <Pressable
                                onPress={() => navigate.back()}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                <View>
                                    <Image style={styles.backBtn} source={require("../assets/icons/arrow-back.png")} />
                                </View>
                            </Pressable>
                        )}
                        <Logo shown={logo} />
                    </View>
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
        paddingTop: 60,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
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
