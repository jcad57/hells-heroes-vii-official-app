import * as MediaLibrary from "expo-media-library";
import { useContext, useEffect, useRef, useState } from "react";
import { Band } from "@/data/types";
import ViewShot, { captureRef } from "react-native-view-shot";
import { Alert, Linking } from "react-native";

import ScheduleContext from "@/context/ScheduleContext";

export default function useShareSchedule() {
    const { filterSchedule } = useContext(ScheduleContext);
    const [shareScheduleData, setShareScheduleData] = useState<{ day: string; bands: Band[]; fontSize: number }[][]>(
        []
    );
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const scheduleAllDays = [
            [...filterSchedule("day", "WEDNESDAY")],
            [...filterSchedule("day", "THURSDAY")],
            [...filterSchedule("day", "FRIDAY")],
            [...filterSchedule("day", "SATURDAY")],
        ];

        setShareScheduleData(scheduleAllDays);
    }, []);


    const viewShot = useRef<ViewShot>(null);

    function setFontSize(array: Band[]) {
        // If length of schedule is greater than 8, set font size to 10
        // If length of schedule is greater than 11, set font size to 10
        // else set to 14
        return array.length > 8 ? (array.length > 11 ? 10 : 10) : 14;
    }
    const captureAndShare = async () => {
        try {
            const uri = await captureRef(viewShot, { format: "png", quality: 1.0 });

            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();

            if (status !== "granted") {
                if (!canAskAgain) {
                    Alert.alert(
                        "Permission Required",
                        "Media Library access is required to save images. Please enable it in settings.",
                        [
                            { text: "Cancel", style: "cancel" },
                            { text: "Open Settings", onPress: () => Linking.openSettings() },
                        ]
                    );
                    return;
                }
                await MediaLibrary.requestPermissionsAsync();
            }

            if (status === "granted") {
                Alert.alert("Image saved!");
                MediaLibrary.saveToLibraryAsync(uri);
            }
        } catch (error) {
            console.error("Error sharing schedule:", error);
        }
    };

    const convertTo24Hour = (time: string) => {
        if (time) {
            const timeParts = time.match(/\d+/g);
            if (!timeParts) return 0; // return if null
            let [hours, minutes] = timeParts.map(Number);
            const period = time.slice(-2); // Extract AM/PM

            if (period === "PM" && hours !== 12) hours += 12; // Convert PM times (except 12 PM)
            if (period === "AM" && hours === 12) hours = 0; // Convert 12 AM to 00

            let totalMinutes = hours * 60 + minutes;

            // If the time is between 12:00 AM and 5:00 AM, treat it as part of the "next day"
            if (totalMinutes < 300) totalMinutes += 24 * 60; // Shift early morning times to be "after" 11 PM

            return totalMinutes;
        }
    };
      


    return { shareScheduleData, isLoaded, viewShot, setFontSize, captureAndShare, convertTo24Hour, setIsLoaded };
}
