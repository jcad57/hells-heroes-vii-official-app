import { StyleSheet, Text } from "react-native";

import FilteredSchedule from "@/components/FilteredSchedule";
import AppContainer from "@/components/Layout/AppContainer";

export default function Friday() {
    return (
        <AppContainer>
            <Text style={styles.heading}>FRIDAY, MARCH 21ST</Text>
            <FilteredSchedule day="FRIDAY" />
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
});
