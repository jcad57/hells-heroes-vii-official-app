import { Pressable, StyleSheet, Text, View } from "react-native";
import StageSection from "./StageSection";
import Button from "./Button";
import PageHeading from "./PageHeading";
import { useState } from "react";

export default function Schedule({ schedule, setSchedule }) {
  // const [showSchedule, setShowSchedule] = useState(false);
  return (
    <View style={styles.container}>
      <PageHeading text="SCHEDULE" />
      {/* {!showSchedule && (
        <View>
          <Button type="primary" text="thursday, march 20th" onPress={() => setShowSchedule(true)} />
          <Button type="primary" text="friday, march 21st" onPress={() => setShowSchedule(true)} />
          <Button type="primary" text="saturday, march 22nd" onPress={() => setShowSchedule(true)} />
        </View>
      )} */}
      {schedule.length > 0 ? (
        <View>
          {schedule.filter((band) => band.stage === "DOWNSTAIRS").length > 0 && (
            <StageSection stage="DOWNSTAIRS" schedule={schedule} setSchedule={setSchedule} />
          )}
          {schedule.filter((band) => band.stage === "UPSTAIRS").length > 0 && (
            <StageSection stage="UPSTAIRS" schedule={schedule} setSchedule={setSchedule} />
          )}
          {schedule.filter((band) => band.stage === "LAWN").length > 0 && (
            <StageSection stage="LAWN" schedule={schedule} setSchedule={setSchedule} />
          )}
          <View style={styles.buttonContainer}>
            <Button type="primary" text="Share Schedule" onPress={() => alert("Schedule shared!")} />
            <Button type="secondary" text="Clear Schedule" onPress={() => setSchedule([])} />
          </View>
        </View>
      ) : (
        <View style={styles.emptyScheduleContainer}>
          <Text style={styles.emptyScheduleText}>No bands selected</Text>
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
  emptyScheduleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyScheduleText: {
    color: "#fff",
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
  buttonContainer: {
    marginInline: 20,
    marginBlock: 20,
  },
});
