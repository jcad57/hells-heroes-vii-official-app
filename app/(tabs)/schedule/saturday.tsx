import { StyleSheet, Text } from "react-native";

import FilteredSchedule from "@/components/FilteredSchedule";
import AppContainer from "@/components/AppContainer";

export default function Saturday() {
  return (
    <AppContainer>
      <Text style={styles.heading}>SATURDAY, MARCH 21ST</Text>
      <FilteredSchedule day="SATURDAY" />
    </AppContainer>
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
});
