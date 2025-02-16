import { StyleSheet, View, Image, Text, ActivityIndicator } from "react-native";
import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import MapView, { Callout, LatLng, Marker, Region } from "react-native-maps";
import { BusinessListData } from "../data/types";

import PageHeading from "./PageHeading";
import Loading from "./Loading";
import Button from "./Button";

export default function Map() {
    const [isLoading, setIsLoading] = useState(false);
    const [businessList, setBusinessList] = useState<BusinessListData[]>([]);
    const [region, setRegion] = useState({
        // Initial Region
        latitude: 29.786213265882278,
        longitude: -95.36701106479163,
        latitudeDelta: 0.1,
        longitudeDelta: 0.07,
    });

    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        const fetchBusinessList = async () => {
            setIsLoading(true);
            try {
                const querySnapshot = await getDocs(query(collection(db, "guide-to-hell-business-list")));
                const businessListData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    latitude: parseFloat(doc.data().latitude),
                    longitude: parseFloat(doc.data().longitude),
                }));
                setBusinessList(businessListData);

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching schedule:", error);
                setIsLoading(false);
            }
        };
        fetchBusinessList();
    }, []);

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
