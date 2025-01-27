import { StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import MapView, { LatLng, Marker, Region } from "react-native-maps";

import PageHeading from "./PageHeading";

const TEMPMARKERS = [
    {
        id: "1",
        name: "Hell's Heroes HQ",
        description: "The home of Hell's Heroes",
        location: { latitude: 29.786213265882278, longitude: -95.36701106479163 },
    },
];

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

interface BusinessListData {
    id: string;
    name: string;
    description: string;
    location: LatLng;
}

export default function GuideToHell() {
    const [region, setRegion] = useState(initialRegion);
    const [isLoading, setIsLoading] = useState(false);
    const [businessList, setBusinessList] = useState(TEMPMARKERS);

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
                    location: doc.data().location,
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

    function handleMarkerPress({ marker }: any) {
        setRegion(marker.location);
    }

    return (
        <View style={styles.container}>
            <PageHeading text="Guide to Hell" />
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={initialRegion}
                region={region}
                mapType="mutedStandard">
                {businessList.map((marker) => {
                    return (
                        <Marker
                            key={marker.name}
                            coordinate={{ latitude: marker.location.latitude, longitude: marker.location.longitude }}
                            title={marker.name}
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
