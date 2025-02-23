import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StageSectionType } from "@/data/types";

import ScheduleContext from "@/context/ScheduleContext";
import BandItem from "./Lineup/BandItem";

export default function StageSection({ stage, filteredScheduleByDay }: StageSectionType) {
    const context = useContext(ScheduleContext);
    if (!context) {
        throw new Error("ScheduleContext must be used within a ScheduleProvider");
    }
    const { schedule, toggleBand } = context;

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

    const filteredScheduleByStage = filteredScheduleByDay
        .filter((band) => band.stage === stage)
        .sort((a, b) => (convertTo24Hour(a.time) ?? 0) - (convertTo24Hour(b.time) ?? 0));

    return (
        <View style={styles.stageSeperator}>
            <Text style={styles.stageSeperatorText}>{stage}</Text>
            {filteredScheduleByStage.map(
                (band) =>
                    band.stage === stage && (
                        <BandItem key={band.id} band={band} toggleBand={toggleBand} schedule={schedule} time={true} />
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

    filterLabelText: {
        color: "#000",
        fontFamily: "Kanit-SemiBold",
    },
});
