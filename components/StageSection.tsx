import ScheduleContext from "@/context/ScheduleContext";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StageSection({ stage, filteredScheduleByDay }) {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("ScheduleContext must be used within a ScheduleProvider");
  }
  const { schedule, addBand, filteredSchedule } = context;
  const filteredScheduleByStage = filteredScheduleByDay.filter((band) => band.stage === stage);
  return (
    <View style={styles.stageSeperator}>
      <Text style={styles.stageSeperatorText}>{stage}</Text>
      {filteredScheduleByStage.map(
        (band) =>
          band.stage === stage && (
            <Pressable style={styles.bandItem} key={band.id} onPress={() => addBand(band)}>
              <Text style={styles.bandName}>{band.name}</Text>
              <Text style={styles.stageText}>{band.stage}</Text>
            </Pressable>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#622D91",
    // marginBottom: 5,
  },
  bandName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  stageText: {
    color: "#fff",
  },
});
