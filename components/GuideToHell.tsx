import { StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";

import PageHeading from "./PageHeading";

const TEMPMARKERS = [
  {
    id: 2,
    title: "White Oak Music Hall",
    description: "A pretty cool music venue with a hot Senior Marketing Director",
    location: { latitude: 29.786213265882278, longitude: -95.36701106479163 },
  },
  {
    id: 3,
    title: "Chick-fil-A",
    description: "Gross AF",
    location: { latitude: 29.775518150360003, longitude: -95.38087943169278 },
  },
];

interface InitialRegion {
  latitude: Number;
  longitude: Number;
  latitudeDelta: Number;
  longitudeDelta: Number;
}

const initialRegion: Region = {
  latitude: 29.786213265882278,
  longitude: -95.36701106479163,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const newRegion = {
  latitude: 27.786213265882278,
  longitude: -94.36701106479163,
};

export default function GuideToHell() {
  const [region, setRegion] = useState(initialRegion);
  const mapRef = useRef<MapView>(null);

  function handleMarkerPress(marker) {
    setRegion(marker.location);
  }
  return (
    <View style={styles.container}>
      <PageHeading text="Guide to Hell" />
      <MapView ref={mapRef} style={styles.map} initialRegion={initialRegion} region={region} mapType="mutedStandard">
        {TEMPMARKERS.map((marker) => {
          return (
            <Marker
              key={marker.id}
              coordinate={marker.location}
              title={marker.title}
              description={marker.description}
              onSelect={() => handleMarkerPress(marker)}
            />
          );
        })}
      </MapView>
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
