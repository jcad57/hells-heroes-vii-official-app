import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useRef, useState } from "react";
import MapView, { Callout, LatLng, Marker, Region } from "react-native-maps";
import { BusinessListData } from "../../data/types";
import { useFetchBusinessList } from "@/hooks/useFetchBusinessList";

import BusinessListCarousel from "./BusinessListCarousel";
import PageHeading from "../PageHeading";

export default function Map() {
    const { businessList, isLoading } = useFetchBusinessList();

    const [region, setRegion] = useState({
        // Initial Region
        latitude: 29.786213265882278,
        longitude: -95.36701106479163,
        latitudeDelta: 0.1,
        longitudeDelta: 0.07,
    });

    const mapRef = useRef<MapView>(null);

    function handleMarkerPress(marker: BusinessListData) {
        setRegion({
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    }

    return (
        <>
            <PageHeading text="guide to hell" />
            <View style={{ flex: 1 }}>
                {!isLoading ? (
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={region}
                        region={region}
                        mapType="mutedStandard">
                        {businessList.map((marker) => {
                            return (
                                <Marker
                                    key={marker.id}
                                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                    onSelect={() => handleMarkerPress(marker)}>
                                    <Callout tooltip={true}>
                                        <View style={styles.tooltipContainer}>
                                            <Text style={styles.markerName}>{marker.name}</Text>
                                            <Text style={styles.markerDescription}>{marker.description}</Text>
                                        </View>
                                    </Callout>
                                </Marker>
                            );
                        })}
                    </MapView>
                ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                    </View>
                )}
                <BusinessListCarousel businessList={businessList} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    tooltipContainer: {
        transform: "translateY(-40%)",
        width: 200,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },
    markerName: {
        fontSize: 22,
        fontFamily: "Kanit",
    },
    markerDescription: {
        fontSize: 16,
        fontWeight: "bold",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
