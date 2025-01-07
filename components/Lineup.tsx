import { Pressable, StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";

import bands from "@/scripts/lineup";
import PageHeading from "./PageHeading";
import ScheduleContext from "../context/ScheduleContext";

interface Band {
  id: number;
  name: string;
  location: string;
  day: string;
  stage: string;
}

const DATA: Band[] = bands;

export default function Lineup() {
  const [filter, setFilter] = useState<string>("all");
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error("ScheduleContext must be used within a ScheduleProvider");
  }

  // addBand will also check to see if band is already in schedule
  // If so, it will remove the band instead
  const { schedule, addBand } = context;

  return (
    <View style={styles.container}>
      <PageHeading text="LINEUP" />
      {DATA.map((band) => (
        <Pressable key={band.id} onPress={() => addBand(band)}>
          <View style={[styles.bandItem, { backgroundColor: schedule.includes(band) ? "#622D91" : "" }]}>
            <Text style={styles.bandName}>{band.name}</Text>
            <Text style={styles.bandLocation}>{band.location}</Text>
          </View>
        </Pressable>
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
  bandItem: {
    paddingBlock: 10,
    paddingInline: 10,
  },
  bandName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bandLocation: {
    color: "#fff",
  },
});
