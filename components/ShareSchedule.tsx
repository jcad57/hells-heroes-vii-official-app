import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import React, { useContext, useRef } from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import ViewShot, { captureRef } from "react-native-view-shot";

import ScheduleContext from "@/context/ScheduleContext";
import Button from "./Button";

const bgimage = require("../assets/images/schedule-share-bg.jpg");
const ScheduleShare = () => {
    const { schedule, filterSchedule } = useContext(ScheduleContext);

    const thursdayViewShot = useRef<ViewShot>(null);
    const fridayViewShot = useRef<ViewShot>(null);
    const saturdayViewShot = useRef<ViewShot>(null);

    const thursdayBands = filterSchedule("day", "THURSDAY");
    const fridayBands = filterSchedule("day", "FRIDAY");
    const saturdayBands = filterSchedule("day", "SATURDAY");

    const captureAndShare = async () => {
        const uris = [];
        try {
            // Capture the screenshot of the schedule view
            if (thursdayBands.length > 0) {
                if (!thursdayViewShot.current) {
                    throw new Error("viewShotRef is null");
                }
                const thursdayUri = await captureRef(thursdayViewShot, { format: "png", quality: 1.0 });

                // Save to device storage (needed before sharing)
                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status !== "granted") {
                    throw new Error("Permission to access media library is denid");
                }
                uris.push(thursdayUri);

                // Share the image
                // await Sharing.shareAsync(thursdayUri);
            }
            if (fridayBands.length > 0) {
                if (!fridayViewShot.current) {
                    throw new Error("viewShotRef is null");
                }
                const fridayUri = await captureRef(fridayViewShot, { format: "png", quality: 1.0 });

                // Save to device storage (needed before sharing)
                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status !== "granted") {
                    throw new Error("Permission to access media library is denid");
                }
                uris.push(fridayUri);

                // Share the image
                // await Sharing.shareAsync(fridayUri);
            }
            if (saturdayBands.length > 0) {
                if (!saturdayViewShot.current) {
                    throw new Error("viewShotRef is null");
                }
                const saturdayUri = await captureRef(saturdayViewShot, { format: "png", quality: 1.0 });

                // Save to device storage (needed before sharing)
                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status !== "granted") {
                    throw new Error("Permission to access media library is denid");
                }

                uris.push(saturdayUri);
                // Share the image
                // await Sharing.shareAsync(saturdayUri);
            }

            for (const imageURI of uris) {
                await MediaLibrary.createAssetAsync(imageURI);
            }
        } catch (error) {
            console.error("Error sharing schedule:", error);
        }
    };

    return (
        <View style={{ flex: 1, gap: 10, justifyContent: "space-between", paddingBlock: 10, marginInline: 10 }}>
            {/* Capture this View */}
            {thursdayBands.length > 0 && (
                <ViewShot ref={fridayViewShot} options={{ format: "png", quality: 0.9 }}>
                    <ImageBackground source={bgimage} style={styles.background}>
                        <View style={styles.scheduleContainer}>
                            <Text style={styles.imageHeader}>THURSDAY</Text>
                            {thursdayBands.map((band, index) => (
                                <View style={styles.eventContainer}>
                                    <Text
                                        key={band.name}
                                        style={[styles.eventText, thursdayBands.length > 8 && { fontSize: 10 }]}>
                                        {band.time} - {band.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </ImageBackground>
                </ViewShot>
            )}

            {/* Capture this View */}
            {fridayBands.length > 0 && (
                <ViewShot ref={saturdayViewShot} options={{ format: "png", quality: 0.9 }}>
                    <ImageBackground source={bgimage} style={styles.background}>
                        <View style={styles.scheduleContainer}>
                            <Text style={styles.imageHeader}>FRIDAY</Text>
                            {fridayBands.map((band, index) => (
                                <View style={styles.eventContainer}>
                                    <Text
                                        key={band.name}
                                        style={[styles.eventText, fridayBands.length > 8 && { fontSize: 10 }]}>
                                        {band.time} - {band.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </ImageBackground>
                </ViewShot>
            )}

            {/* Capture this View */}
            {saturdayBands.length > 0 && (
                <ViewShot ref={thursdayViewShot} options={{ format: "png", quality: 0.9 }}>
                    <ImageBackground source={bgimage} style={styles.background}>
                        <View style={styles.scheduleContainer}>
                            <Text style={styles.imageHeader}>SATURDAY</Text>
                            {saturdayBands.map((band, index) => (
                                <View style={styles.eventContainer}>
                                    <Text
                                        key={band.name}
                                        style={[styles.eventText, saturdayBands.length > 8 && { fontSize: 10 }]}>
                                        {band.time} - {band.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </ImageBackground>
                </ViewShot>
            )}

            {/* Share Button */}
            <TouchableOpacity>
                <Button type="primary" text="Share image" onPress={captureAndShare} />
            </TouchableOpacity>
        </View>
    );
};

export default ScheduleShare;

const styles = StyleSheet.create({
    scheduleContainer: {
        padding: 20,
        marginBlockStart: 70,
    },
    eventContainer: {},
    background: {
        textAlign: "center",
        width: "100%",
        height: 400,
        // justifyContent: "center",
    },
    eventText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Kanit",
        fontSize: 14,
        marginVertical: 4,
    },
    imageHeader: {
        textAlign: "center",
        color: "#D53631",
        fontFamily: "Kanit",
        fontSize: 24,
    },
});
