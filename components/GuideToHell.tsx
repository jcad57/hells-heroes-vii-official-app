import { StyleSheet, View } from "react-native";

import MapView from "react-native-maps";
import PageHeading from "./PageHeading";

export default function GuideToHell() {
  return (
    <View style={styles.container}>
      <PageHeading text="Guide to Hell" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 29.749907,
          longitude: -95.3701,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: 400,
  },
  map: {
    width: "100%",
    height: "100%",
    // minHeight: "100%",
  },
});
