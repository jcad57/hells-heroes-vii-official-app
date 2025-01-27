import { StyleSheet, View, Image, Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import MapView, { Callout, LatLng, Marker, Region } from "react-native-maps";
import image from "../assets/images/business-list-images/vinal-edge.jpg"

import PageHeading from "./PageHeading";

const TEMPMARKERS = [
    {
        id: "1",
        name: "Hell's Heroes HQ",
        description: "The home of Hell's Heroes",
         "latitude": 29.786213265882278, 
         "longitude": -95.36701106479163 ,
    },
];

const initialRegion: Region = {
    latitude: 29.786213265882278,
    longitude: -95.36701106479163,
    latitudeDelta: 0.1,
    longitudeDelta: 0.07,
};

interface BusinessListData {
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
}

export default function GuideToHell() {
    const [region, setRegion] = useState(initialRegion);
    const [isLoading, setIsLoading] = useState(false);
    const [businessList, setBusinessList] = useState<BusinessListData[]>([]);

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

    function handleMarkerPress({ marker }: any) {
        console.log(marker);
        setRegion({latitude: marker.latitude, longitude: marker.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
    }

    useEffect(() => {
        console.log('BusinessList state updated:', businessList);
      }, [businessList]);

    return (
        <View style={styles.container}>
            <PageHeading text="Guide to Hell" />
            {businessList.length > 0 && <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={initialRegion}
                region={region}
                mapType="mutedStandard">
                {businessList?.map((marker) => {
                    return (
                        <Marker
                            key={marker.id}
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            title={marker.name}
                            description={marker.description}
                            // image={require("../assets/images/business-list-images/vinal-edge.jpg")}
                            // onSelect={() => handleMarkerPress(marker)}
                        >
                            <Callout >
                                <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
            <Image style={{ width: 150, height: 100, resizeMode: "contain"}}
              source={{
                uri: ("https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/houston/heights/vinal-edge-records/on-the-grid-bucanans-1-9_299006722e285f47655d17d1c9136337.jpg"),
              }}
            />
            <Text>{marker.name}</Text>
            <Text>{marker.description}</Text>
          </View>
          </Callout>
            </Marker>
                    );
                })}
            </MapView>}
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
