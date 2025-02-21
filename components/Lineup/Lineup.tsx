import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";

import useLineupFilter from "@/hooks/useLineupFilter";

import PageHeading from "../PageHeading";
import ScheduleContext from "../../context/ScheduleContext";
import Filters from "./Filters";
import BandItem from "./BandItem";

export default function Lineup() {
    const context = useContext(ScheduleContext);

    if (!context) {
        throw new Error("ScheduleContext must be used within a ScheduleProvider");
    }

    const { schedule, toggleBand, getSchedule } = context;
    const { filter, filteredBands, handleSetFilter } = useLineupFilter();

    return (
        <View style={styles.container}>
            <PageHeading text="LINEUP" />
            <Filters filter={filter} handleSetFilter={handleSetFilter} />
            {filteredBands
                .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })
                .map((band) => (
                    <BandItem key={band.id} band={band} toggleBand={toggleBand} schedule={schedule} />
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

    onMyScheduleContainer: {
        borderWidth: 1,
        borderColor: "#fff",
    },

    onMyScheduleIcon: {
        width: 25,
        height: 25,
    },
});
