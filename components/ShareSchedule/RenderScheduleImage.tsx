import * as MediaLibrary from "expo-media-library";
import {
    ActivityIndicator,
    Alert,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ViewShot, { captureRef } from "react-native-view-shot";
import { useEffect, useRef, useState } from "react";

import Button from "../Button";
import Loader from "../Loader";
import { Band } from "@/data/types";

const BG_IMAGE = require("../../assets/images/schedule-share-bg-reduced.jpg");

export default function RenderScheduleImage({ data }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const viewShot = useRef<ViewShot>(null);

    function setFontSize(array: Band[]) {
        console.log(array);
        return array.length > 8 ? (array.length > 11 ? 10 : 10) : 14;
    }
    const captureAndShare = async () => {
        try {
            const uri = await captureRef(viewShot, { format: "png", quality: 1.0 });

            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();

            if (status !== "granted") {
                if (!canAskAgain) {
                    Alert.alert(
                        "Permission Required",
                        "Media Library access is required to save images. Please enable it in settings.",
                        [
                            { text: "Cancel", style: "cancel" },
                            { text: "Open Settings", onPress: () => Linking.openSettings() },
                        ]
                    );
                    return;
                }
                await MediaLibrary.requestPermissionsAsync();
            }

            if (status === "granted") {
                Alert.alert("Image saved!");
                MediaLibrary.saveToLibraryAsync(uri);
            }
        } catch (error) {
            console.error("Error sharing schedule:", error);
        }
    };

    const convertTo24Hour = (time: string) => {
        if (time) {
            const timeParts = time.match(/\d+/g);
            if (!timeParts) return 0; // return if null
            let [hours, minutes] = timeParts.map(Number);
            const period = time.slice(-2); // Extract AM/PM

            if (period === "PM" && hours !== 12) hours += 12; // Convert PM times (except 12 PM)
            if (period === "AM" && hours === 12) hours = 0; // Convert 12 AM to 00

            let totalMinutes = hours * 60 + minutes;

            // If the time is between 12:00 AM and 5:00 AM, treat it as part of the "next day"
            if (totalMinutes < 300) totalMinutes += 24 * 60; // Shift early morning times to be "after" 11 PM

            return totalMinutes;
        }
    };

    const sortedSchedule = data.sort(
        (a: string, b: string) => (convertTo24Hour(a.time) ?? 0) - (convertTo24Hour(b.time) ?? 0)
    );

    return (
        <>
            <ViewShot ref={viewShot} options={{ format: "png", quality: 0.9 }}>
                <ImageBackground
                    onLoadEnd={() => {
                        setIsLoaded(true);
                    }}
                    source={BG_IMAGE}
                    style={styles.background}>
                    <Loader loaded={isLoaded}>
                        <View style={styles.scheduleContainer}>
                            <Text style={styles.imageHeader}>{data[0].day}</Text>
                            <View style={[data.length > 10 && { flexWrap: "wrap", columnGap: 20, maxHeight: 230 }]}>
                                {sortedSchedule.map((band: Band) => (
                                    <View key={band.name}>
                                        <Text
                                            key={band.day}
                                            style={[styles.eventText, { fontSize: setFontSize(sortedSchedule) }]}>
                                            <Text style={styles.highlight}>{band.time}</Text> - {band.name}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </Loader>
                </ImageBackground>
            </ViewShot>

            {/* Share Button */}
            <TouchableOpacity>
                <Button type="primary" text="Save image" onPress={captureAndShare} />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    scheduleContainer: {
        padding: 20,
        marginBlockStart: 70,
        // marginInline: "auto",
    },
    background: {
        textAlign: "center",
        width: "100%",
        height: 400,
    },
    eventText: {
        textAlign: "left",
        color: "#fff",
        fontFamily: "Kanit",
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 4,
    },
    imageHeader: {
        textAlign: "center",
        color: "#D53631",
        fontFamily: "Kanit",
        fontSize: 24,
    },
    highlight: {
        color: "#B770F5",
    },
});
