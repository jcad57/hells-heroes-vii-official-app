import { Alert, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { useContext } from "react";

import Button from "./Button";
import PageHeading from "./PageHeading";
import ScheduleContext from "@/context/ScheduleContext";

export default function Schedule() {
    const context = useContext(ScheduleContext);
    if (!context) {
        alert("ScheduleContext must be used within a ScheduleProvider");
    }
    const { schedule, clearSchedule } = context;

    function handleClearSchedule() {
        Alert.alert("Confirmation", "Are you sure you want to clear your schedule?", [
            {
                text: "No",
            },
            {
                text: "Yes",
                onPress: () => clearSchedule(),
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <PageHeading text="SCHEDULE" />
            <View style={{ marginBlockEnd: 35 }}>
                <Link href="/(tabs)/schedule/wednesday" asChild>
                    <Button type="primary" text="wednesday, march 19th" />
                </Link>
                <Link href="/(tabs)/schedule/thursday" asChild>
                    <Button type="primary" text="thursday, march 20th" />
                </Link>
                <Link href="/(tabs)/schedule/friday" asChild>
                    <Button type="primary" text="friday, march 21st" />
                </Link>
                <Link href="/(tabs)/schedule/saturday" asChild>
                    <Button type="primary" text="saturday, march 22nd" />
                </Link>
            </View>
            {schedule?.length > 0 && (
                <View>
                    <Link href="/(tabs)/schedule/share" asChild>
                        <Button type="primary" text="Share Schedule" />
                    </Link>
                    <Button type="secondary" text="clear schedule" onPress={() => handleClearSchedule()} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
    },
    bandItem: {
        paddingBlock: 10,
        paddingInline: 10,
        backgroundColor: "#622D91",
    },
    bandName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    stageText: {
        color: "#fff",
    },
    stageSeperator: {
        width: "100%",
        paddingBlock: 3,
    },
    stageSeperatorText: {
        color: "#D53631",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
    shareScheduleText: {
        color: "#fff",
        textAlign: "center",
        padding: 10,
        fontSize: 18,
    },
    shareScheduleButton: {
        width: "100%",
    },
});
