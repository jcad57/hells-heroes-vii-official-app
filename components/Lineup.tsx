import { Pressable, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import bands from "@/data/lineup";
import PageHeading from "./PageHeading";
import ScheduleContext from "../context/ScheduleContext";
import Button from "./Button";

interface Band {
    id: number;
    name: string;
    location: string;
    day: string;
    stage: string;
    filter?: string;
    time?: string;
    getSchedule?: () => void;
    filterSchedule?: () => void;
}

const DATA: Band[] = bands;

export default function Lineup() {
    const [filter, setFilter] = useState<string>("all");
    const [filteredBands, setFilteredBands] = useState(DATA);
    const context = useContext(ScheduleContext);

    if (!context) {
        throw new Error("ScheduleContext must be used within a ScheduleProvider");
    }

    // addBand will also check to see if band is already in schedule
    // If so, it will remove the band instead
    const { schedule, addBand, getSchedule } = context;

    useEffect(() => {
        getSchedule();
    }, []);

    function handleSetFilter(filterType: string) {
        setFilter(filterType);
        if (filterType === "all") {
            setFilteredBands(DATA);
            return;
        }
        setFilteredBands(DATA.filter((band) => band.filter && band.filter === filterType));
    }
    console.log(
        schedule.some(
            (band) =>
                band.day === "SATURDAY" &&
                band.id === 2 &&
                band.location === "BERGEN, NORWAY" &&
                band.name === "ABBATH" &&
                band.stage === "DOWNSTAIRS" &&
                band.time === "8:11 PM"
        )
    );

    return (
        <View style={styles.container}>
            <PageHeading text="LINEUP" />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Button
                        type="filter"
                        text="after-parties"
                        onPress={() => handleSetFilter("after-parties")}
                        selected={filter === "after-parties"}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        type="filter"
                        text="all"
                        onPress={() => handleSetFilter("all")}
                        selected={filter === "all"}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        type="filter"
                        text="local"
                        onPress={() => handleSetFilter("local")}
                        selected={filter === "local"}
                    />
                </View>
            </View>
            {filteredBands
                .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })
                .map((band) => (
                    <Pressable key={band.id} onPress={() => addBand(band)}>
                        <View
                            style={[
                                styles.bandItem,
                                {
                                    // Checks if band is on user's schedule to switch highlight on
                                    // Does a second check to see if the band is only playing the afterparty, if so
                                    // highlights in red
                                    backgroundColor: schedule.some((b) => b.name === band.name)
                                        ? band.filter?.includes("after-parties")
                                            ? "#D53631"
                                            : "#622D91"
                                        : "null",
                                },
                            ]}>
                            <View>
                                <Text style={styles.bandName}>{band.name}</Text>
                                <Text style={styles.bandLocation}>{band.location}</Text>
                            </View>
                            {schedule.some((b) => b.name === band.name) && band.filter === "after-parties" && (
                                <View>
                                    <View>
                                        <Text style={styles.afterPartyBandText}>AFTERPARTY</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </Pressable>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
    },
    heading: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#D53631",
        marginBlockEnd: 10,
    },
    bandItem: {
        paddingBlock: 10,
        paddingInline: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bandName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    bandLocation: {
        color: "#fff",
    },
    onMyScheduleContainer: {
        borderWidth: 1,
        borderColor: "#fff",
    },
    afterPartyBandText: {
        color: "#000",
        fontFamily: "Kanit-SemiBold",
        padding: 5,
    },
    onMyScheduleIcon: {
        width: 25,
        height: 25,
    },
});
