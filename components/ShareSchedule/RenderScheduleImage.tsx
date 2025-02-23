import * as MediaLibrary from "expo-media-library";
import {
    Alert,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ViewShot, { captureRef } from "react-native-view-shot";
import {  useRef, useState } from "react";

import { Band } from "@/data/types";

import Button from "../Button";
import Loader from "../Loader";
import useShareSchedule from "@/hooks/useShareSchedule";

const BG_IMAGE = require("../../assets/images/schedule-share-bg-reduced.jpg");

export default function RenderScheduleImage({data}) {
    const {isLoaded, viewShot, setFontSize, captureAndShare, convertTo24Hour, setIsLoaded} = useShareSchedule();
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
