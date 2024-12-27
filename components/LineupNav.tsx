import { View, StyleSheet, Text } from "react-native";

import FilterButton from "./FilterButton";

export default function LineupNav({ filter, setFilter }) {
  return (
    <View style={styles.nav}>
      <FilterButton text="After Parties" onPress={() => setFilter("after-parties")} />
      <FilterButton text="All" onPress={() => setFilter("all")} />
      <FilterButton text="Local" onPress={() => setFilter("local")} />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    width: "100%",
  },
});
