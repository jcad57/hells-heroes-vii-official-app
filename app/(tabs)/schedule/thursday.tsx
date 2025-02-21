import { StyleSheet, Text } from "react-native";

import FilteredSchedule from "@/components/FilteredSchedule";
import AppContainer from "@/components/Layout/AppContainer";

export default function Thursday() {
    return (
        <AppContainer>
            <Text style={styles.heading}>THURSDAY, MARCH 20TH</Text>
            <FilteredSchedule day="THURSDAY" />
        </AppContainer>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBlock: 10,
        textAlign: "center",
    },
});
