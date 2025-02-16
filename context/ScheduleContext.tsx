import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Band {
    id: number;
    name: string;
    location: string;
    day: string;
    stage: string;
    filter?: string;
    time?: string;
}

interface ScheduleContextType {
    schedule: Band[];
    addBand: (band: Band) => void;
    clearSchedule: () => void;
    getSchedule: () => void;
    filterSchedule: (type: string, value: any) => Band[];
}

const ScheduleContext = createContext<ScheduleContextType>({
    schedule: [],
    addBand: () => {},
    clearSchedule: () => {},
    getSchedule: () => {},
    filterSchedule: () => [],
});

export const ScheduleProvider = ({ children }: { children: ReactNode }) => {
    const [schedule, setSchedule] = useState<Band[]>([]);

    useEffect(() => {
        getSchedule();
    }, []);

    const getSchedule = async () => {
        try {
            const storedSchedule = await AsyncStorage.getItem("my-schedule");
            if (storedSchedule) {
                setSchedule(JSON.parse(storedSchedule));
            }
        } catch (error) {
            return error;
        }
    };

    const addBand = async (band: Band) => {
        try {
            const updatedSchedule = schedule.some((b) => b.id === band.id)
                ? schedule.filter((b) => b.id !== band.id)
                : [...schedule, band];
            await AsyncStorage.setItem("my-schedule", JSON.stringify(updatedSchedule));
            setSchedule(updatedSchedule);
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const clearSchedule = async () => {
        try {
            await AsyncStorage.setItem("my-schedule", JSON.stringify([]));
            setSchedule([]);
        } catch (e) {
            // remove error
        }

        console.log("Done.");
    };

    const filterSchedule = (type: string, value: string) => {
        if (type === "all") return schedule;
        if (type === "stage") return schedule.filter((band) => band.stage === value);
        if (type === "day") return schedule.filter((band) => band.day === value);
        return schedule;
    };

    return (
        <ScheduleContext.Provider value={{ schedule, getSchedule, addBand, clearSchedule, filterSchedule }}>
            {children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleContext;
