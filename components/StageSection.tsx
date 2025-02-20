import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StageSectionType } from "@/data/types";

import ScheduleContext from "@/context/ScheduleContext";

export default function StageSection({ stage, filteredScheduleByDay }: StageSectionType) {
    const context = useContext(ScheduleContext);
    if (!context) {
        throw new Error("ScheduleContext must be used within a ScheduleProvider");
    }
    const { schedule, addBand } = context;

    const convertTo24Hour = (time) => {
        let [hours, minutes] = time.match(/\d+/g).map(Number);
        const period = time.slice(-2); // Extract AM/PM

        if (period === "PM" && hours !== 12) hours += 12; // Convert PM times (except 12 PM)
        if (period === "AM" && hours === 12) hours = 0; // Convert 12 AM to 00

        let totalMinutes = hours * 60 + minutes;

        // If the time is between 12:00 AM and 5:00 AM, treat it as part of the "next day"
        if (totalMinutes < 300) totalMinutes += 24 * 60; // Shift early morning times to be "after" 11 PM

        return totalMinutes;
    };

    const filteredScheduleByStage = filteredScheduleByDay
        .filter((band) => band.stage === stage)
        .sort((a, b) => convertTo24Hour(a.time) - convertTo24Hour(b.time));

    return (
        <View style={styles.stageSeperator}>
            <Text style={styles.stageSeperatorText}>{stage}</Text>
            {filteredScheduleByStage.map(
                (band) =>
                    band.stage === stage && (
                        <Pressable style={styles.bandItem} key={band.id} onPress={() => addBand(band)}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <View>
                                    <Text style={styles.bandName}>{band.name} </Text>
                                    <Text style={styles.stageText}>{band.location}</Text>
                                </View>
                                <View>
                                    <Text style={styles.timeText}>{band.time}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    stageSeperator: {
        marginVertical: 10,
    },
    stageSeperatorText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#D53631",
        textAlign: "center",
    },
    bandItem: {
        backgroundColor: "#622D91",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    bandName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    stageText: {
        color: "#fff",
    },
    timeText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "flex-end",
    },
    filterLabelText: {
        color: "#000",
        fontFamily: "Kanit-SemiBold",
    },
});
