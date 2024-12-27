import { StyleSheet, View } from "react-native";
import PageHeading from "./PageHeading";

export default function GuideToHell() {
  return (
    <View style={styles.container}>
      <PageHeading text="Guide to Hell" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
  },
});
