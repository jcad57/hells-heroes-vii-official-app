import ScheduleContext from "@/context/ScheduleContext";
import { useContext, useEffect, useRef, useState } from "react";
import ViewShot, { captureRef } from "react-native-view-shot";

export default function useShareSchedule() {
    const { schedule, filterSchedule } = useContext(ScheduleContext);

    const thursdayBands = filterSchedule("day", "THURSDAY");
    const fridayBands = filterSchedule("day", "FRIDAY");
    const saturdayBands = filterSchedule("day", "SATURDAY");

    const [uris, setUris] = useState<string[]>([]);


    const captureScreen = async (thursdayViewShot = null, fridayViewShot = null, saturdayViewShot = null) => {
        try {
          if (thursdayBands.length > 0){
            try {
                if (!thursdayViewShot.current) {
                                throw new Error("viewShotRef is null");
                            }
                            const thursdayUri = await captureRef(thursdayViewShot, { format: "png", quality: 1.0 });
            }
          }
        }
    };

    const shareSchedule = async () => {};
}
