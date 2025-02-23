import ScheduleContext from "@/context/ScheduleContext";
import { useContext, useEffect, useState } from "react";
import { Band } from "@/data/types";

export default function useShareSchedule() {
    const { filterSchedule } = useContext(ScheduleContext);
    const [shareScheduleData, setShareScheduleData] = useState<{ day: string; bands: Band[]; fontSize: number }[][]>(
        []
    );

    function setFontSize(array: Band[]) {
        return array.length > 8 ? (array.length > 11 ? 8 : 10) : 14;
    }

    useEffect(() => {
        const scheduleAllDays = [
            [...filterSchedule("day", "WEDNESDAY")],
            [...filterSchedule("day", "THURSDAY")],
            [...filterSchedule("day", "FRIDAY")],
            [...filterSchedule("day", "SATURDAY")],
        ];

        setShareScheduleData(scheduleAllDays);
    }, []);

    return { shareScheduleData };
}
