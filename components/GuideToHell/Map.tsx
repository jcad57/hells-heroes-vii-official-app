import { StyleSheet, View, Text, ActivityIndicator, FlatList, Platform, Linking } from "react-native";
import { useRef, useState } from "react";
import MapView, { Callout, LatLng, Marker, Region } from "react-native-maps";
import { BusinessListData } from "../../data/types";
import { useFetchBusinessList } from "@/hooks/useFetchBusinessList";

import BusinessListCarousel from "./BusinessListCarousel";
import PageHeading from "../PageHeading";

export default function Map() {
    const { businessList, isLoading } = useFetchBusinessList();
    const carouselRef = useRef<FlatList>(null);
    const mapRef = useRef<MapView>(null);

    const [region, setRegion] = useState({
        // Initial Region
        latitude: 29.750076,
        longitude: -95.369312,
        latitudeDelta: 0.2,
        longitudeDelta: 0.07,
    });

    function handleMarkerPress(marker: BusinessListData, index: number) {
        setRegion({
            latitude: marker.latitude - 0.01,
            longitude: marker.longitude,
            latitudeDelta: marker.latitudeDelta,
            longitudeDelta: marker.longitudeDelta,
        });
        carouselRef.current?.scrollToIndex({ index });
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
                        {businessList.map((marker, index) => {
                            return (
                                <Marker
                                    key={marker.id}
                                    coordinate={{
                                        latitude: marker.latitude,
                                        longitude: marker.longitude,
                                        latitudeDelta: region.latitudeDelta,
                                        longitudeDelta: region.longitudeDelta,
                                    }}
                                    onSelect={() => handleMarkerPress(marker, index)}
                                />
                            );
                        })}
                    </MapView>
                ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                    </View>
                )}
                <BusinessListCarousel businessList={businessList} carouselRef={carouselRef} />
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
