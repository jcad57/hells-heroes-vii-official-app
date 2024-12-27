import { Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import bands from "@/scripts/lineup";
import LineupNav from "./LineupNav";
import { useState } from "react";
import PageHeading from "./PageHeading";

const DATA = bands;

export default function Lineup({ schedule, setSchedule }) {
  const [filter, setFilter] = useState("all");
  return (
    <View style={styles.container}>
      <PageHeading text="LINEUP" />
      {/* <LineupNav filter={filter} setFilter={setFilter} /> */}
      {DATA.map((item) => (
        <Pressable
          key={item.id}
          onPress={() =>
            setSchedule(schedule.includes(item) ? schedule.filter((b) => b !== item) : [...schedule, item])
          }>
          <View style={[styles.bandItem, { backgroundColor: schedule.includes(item) ? "#622D91" : "" }]}>
            <Text style={styles.bandName}>{item.name}</Text>
            <Text style={styles.bandLocation}>{item.location}</Text>
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
