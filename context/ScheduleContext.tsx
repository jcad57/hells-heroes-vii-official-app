import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useState, ReactNode } from "react";

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

  const addBand = (band: Band) => {
    setSchedule((prevSchedule) =>
      prevSchedule.includes(band) ? prevSchedule.filter((b) => b.id !== band.id) : [...prevSchedule, band]
    );
  };

  const clearSchedule = () => {
    setSchedule([]);
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
