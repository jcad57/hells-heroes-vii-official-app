import { StyleSheet, Text } from "react-native";

import FilteredSchedule from "@/components/FilteredSchedule";
import AppContainer from "@/components/Layout/AppContainer";

export default function Wednesday() {
    return (
        <AppContainer>
            <Text style={styles.heading}>WEDNESDAY, MARCH 19TH</Text>
            <Text style={styles.subheading}>(PRE-PARTIES)</Text>
            <FilteredSchedule day="WEDNESDAY" />
        </AppContainer>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBlockEnd: 10,
        textAlign: "center",
    },
    subheading: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBlockEnd: 10,
        textAlign: "center",
    },
});
