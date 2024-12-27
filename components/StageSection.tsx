import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StageSection({ stage, schedule, setSchedule }) {
  return (
    <View style={styles.stageSeperator}>
      <Text style={styles.stageSeperatorText}>{stage}</Text>
      {schedule.map(
        (band) =>
          band.stage === stage && (
            <Pressable
              style={styles.bandItem}
              key={band.id}
              onPress={() => setSchedule(schedule.filter((b) => b !== band))}>
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
