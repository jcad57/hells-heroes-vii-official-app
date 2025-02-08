import useLocalAsyncStorage from "@/hooks/useLocalAsyncStorage";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Band {
    id: number;
    name: string;
    location: string;
    day: string;
    stage: string;
}

interface ScheduleContextType {
    schedule: Band[];
    addBand: (band: Band) => void;
    clearSchedule: () => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export const ScheduleProvider = ({ children }: { children: ReactNode }) => {
    const [schedule, setSchedule] = useState<Band[]>([]);
    const { getStorage, setStorage } = useLocalAsyncStorage();

    const addBand = async (band: Band) => {
        // setSchedule((prevSchedule) =>
        const currentSchedule = await getStorage("user-schedule");
        if (!currentSchedule) {
            setStorage("user-schedule", band);
            console.log("added " + { ...band });
        }
        // else
        // {const updatedSchedule = currentSchedule.includes(band)
        //         ? currentSchedule.filter((b) => b.id !== band.id)
        //         : [...newSchedule, band];
        //     setStorage("user-schedule", updatedSchedule);
        //     setSchedule(updatedSchedule);}
        // }
        // );
    };

    const clearSchedule = async () => {
        await setStorage("user-schedule", []);
    };

    const filterSchedule = (type, value) => {
        if (type === "all") return schedule;
        if (type === "stage") return schedule.filter((band) => band.stage === value);
        if (type === "day") return schedule.filter((band) => band.day === value);
        return schedule;
    };

    return (
        <ScheduleContext.Provider value={{ schedule, addBand, clearSchedule, filterSchedule }}>
            {children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleContext;
