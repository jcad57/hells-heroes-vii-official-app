import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import React, { useContext, useRef } from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import ViewShot from "react-native-view-shot";

import ScheduleContext from "@/context/ScheduleContext";
import Button from "./Button";

const bgimage = require("../assets/images/schedule-share-bg.jpg");
const ScheduleShare = () => {
    const { schedule } = useContext(ScheduleContext);
    const viewShotRef = useRef(null);

    const captureAndShare = async () => {
        try {
            // Capture the screenshot of the schedule view
            const uri = await viewShotRef.current.capture();

            // Save to device storage (needed before sharing)
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                await MediaLibrary.saveToLibraryAsync(uri);
            }

            // Share the image
            await Sharing.shareAsync(uri);
        } catch (error) {
            console.error("Error sharing schedule:", error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "space-between", paddingBlock: 10, marginInline: 10 }}>
            {/* Capture this View */}
            <ViewShot ref={viewShotRef} options={{ format: "png", quality: 0.9 }}>
                <ImageBackground source={bgimage} style={styles.background}>
                    <View style={styles.scheduleContainer}>
                        <Text style={styles.imageHeader}>FRIDAY</Text>
                        {schedule.map((band, index) => (
                            <View style={styles.eventContainer}>
                                <Text key={index} style={styles.eventText}>
                                    {band.time} - {band.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </ViewShot>

            {/* Share Button */}
            <TouchableOpacity onPress={captureAndShare}>
                <Button type="primary" text="Share Schedule" onPress={captureAndShare} />
            </TouchableOpacity>
        </View>
    );
};

export default ScheduleShare;

const styles = StyleSheet.create({
    scheduleContainer: { padding: 20 },
    background: {
        textAlign: "center",
        width: "100%",
        height: 400,
        justifyContent: "center",
    },
    eventText: {
        color: "#fff",
        fontFamily: "Kanit",
        fontSize: 14,
        marginVertical: 4,
    },
    imageHeader: {
        color: "#D53631",
        fontFamily: "Kanit",
        fontSize: 24,
    },
});
