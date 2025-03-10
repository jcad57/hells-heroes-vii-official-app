import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

import Map from "../../components/GuideToHell/Map";
import GuideToHellIntro from "../../components/GuideToHell/GuideToHellIntro";
import useLocalAsyncStorage from "@/hooks/useLocalAsyncStorage";
import AppContainer from "@/components/Layout/AppContainer";

export default function GuideToHell() {
    const { setStorage, getStorage } = useLocalAsyncStorage();
    const [loading, setLoading] = useState(true);
    const [intro, setIntro] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Need to reset for testing?
        // setIntro(true);
        // setStorage("showGuideToHellInto", { showIntro: true });

        getStorage("showGuideToHellInto").then((value) => {
            if (value) {
                const parsedValue = JSON.parse(value);
                setIntro(parsedValue.showIntro);
            }
        });
        setLoading(false);
    }, []);

    return (
        <AppContainer>
            <View style={styles.container}>
                {loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                    </View>
                ) : intro ? (
                    <GuideToHellIntro setIntro={setIntro} />
                ) : (
                    <Map />
                )}
            </View>
        </AppContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: "100%",
        height: 500,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
