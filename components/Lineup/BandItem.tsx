import { Band } from "@/data/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BandItem({
    band,
    toggleBand,
    schedule,
    time = false,
}: {
    band: Band;
    toggleBand: (band: Band) => void;
    schedule: Band[];
    time: boolean;
}) {
    return (
        <Pressable key={band.id} onPress={() => toggleBand(band)}>
            <View
                style={[
                    styles.bandItem,
                    {
                        // Checks if band is on user's schedule to switch highlight on
                        // Does a second check to see if the band is only playing the after-party/pre-party, if so
                        // highlights in red
                        backgroundColor: schedule.some((b) => b.name === band.name)
                            ? band.filter?.includes("after-parties") || band.filter?.includes("pre-parties")
                                ? "#43136e"
                                : "#622D91"
                            : "null",
                    },
                ]}>
                <View>
                    <Text style={styles.bandName}>{band.name}</Text>
                    <Text style={styles.bandLocation}>{band.location}</Text>
                </View>
                <View>
                    {time && <Text style={styles.timeText}>{band.time}</Text>}
                    {(band.filter?.includes("after-parties") || band.filter?.includes("pre-parties")) && (
                        <Text style={styles.filterLabelText}>
                            {band.filter === "after-parties" ? "AFTER-PARTY" : "PRE-PARTY"}
                        </Text>
                    )}
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    bandItem: {
        paddingBlock: 12,
        paddingInline: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#622D91",
    },
    bandName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    bandLocation: {
        color: "#fff",
    },
    filterLabelText: {
        fontFamily: "Kanit-SemiBold",
        color: "#D53631",
    },
    timeText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "flex-end",
    },
});
