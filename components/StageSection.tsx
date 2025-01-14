import ScheduleContext from "@/context/ScheduleContext";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Band {
  id: number;
  name: string;
  stage: string;
  time: string;
  filter?: string;
  location: string;
  day: string;
}

interface StageSectionType {
  stage: string;
  filteredScheduleByDay: Band[];
}

export default function StageSection({ stage, filteredScheduleByDay }: StageSectionType) {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("ScheduleContext must be used within a ScheduleProvider");
  }
  const { schedule, addBand } = context;
  const filteredScheduleByStage = filteredScheduleByDay
    .filter((band) => band.stage === stage)
    .sort(function (a, b) {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    });

  return (
    <View style={styles.stageSeperator}>
      <Text style={styles.stageSeperatorText}>{stage}</Text>
      {filteredScheduleByStage.map(
        (band) =>
          band.stage === stage && (
            <Pressable
              style={[
                { backgroundColor: band.filter?.includes("after-parties") ? "#D53631" : "#622D91" },
                styles.bandItem,
              ]}
              key={band.id}
              onPress={() => addBand(band)}>
              <View>
                <Text style={styles.bandName}>{band.name}</Text>
                <Text style={styles.stageText}>
                  {/*  TODO: add styling to the 'time' text so that it stands out */}
                  {band.stage}, <Text>{band.time}</Text>
                </Text>
              </View>
              {schedule.includes(band) && band.filter === "after-parties" && (
                <View>
                  <View>
                    <Text style={styles.afterPartyBandText}>AFTERPARTY</Text>
                  </View>
                </View>
              )}
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
    // backgroundColor: "#622D91",
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
  stageText: {
    color: "#fff",
  },
  afterPartyBandText: {
    color: "#000",
    fontFamily: "Kanit-SemiBold",
    padding: 5,
  },
});
