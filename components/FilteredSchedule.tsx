import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Logo from "./Logo";
import StageSection from "./StageSection";
import Button from "./Button";

import ScheduleContext from "@/context/ScheduleContext";

export default function FilteredSchedule({ day }) {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error("ScheduleContext must be used within a ScheduleProvider");
  }

  const { filterSchedule } = context;
  const filteredScheduleByDay = filterSchedule("day", day);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filteredScheduleByDay.length > 0 ? (
        <View>
          {filteredScheduleByDay.filter((band: Object) => band.stage === "DOWNSTAIRS").length > 0 && (
            <StageSection stage="DOWNSTAIRS" filteredScheduleByDay={filteredScheduleByDay} />
          )}
          {filteredScheduleByDay.filter((band: Object) => band.stage === "UPSTAIRS").length > 0 && (
            <StageSection stage="UPSTAIRS" filteredScheduleByDay={filteredScheduleByDay} />
          )}
          {filteredScheduleByDay.filter((band: Object) => band.stage === "LAWN").length > 0 && (
            <StageSection stage="LAWN" filteredScheduleByDay={filteredScheduleByDay} />
          )}
        </View>
      ) : (
        <View style={styles.emptyScheduleContainer}>
          <Text style={styles.emptyScheduleText}>No bands selected for this day!</Text>
          <Text style={styles.emptyScheduleText}>
            Check out the lineup and click on a band to add it to your schedule.
          </Text>
        </View>
      )}
    </ScrollView>
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
  container: {
    minWidth: "100%",
  },
  emptyScheduleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBlockStart: 50,
    gap: 10,
  },
  emptyScheduleText: {
    color: "#fff",
    fontSize: 18,
    maxWidth: 300,
    textAlign: "center",
    fontStyle: "italic",
  },
});
