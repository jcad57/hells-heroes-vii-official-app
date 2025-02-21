import { Band } from "@/data/types";
import { useState } from "react";
import bands from "@/data/lineup";

const DATA: Band[] = bands;

export default function useLineupFilter() {
    const [filter, setFilter] = useState<string>("all");
    const [filteredBands, setFilteredBands] = useState(DATA);
    function handleSetFilter(filterType: string) {
        setFilter(filterType);
        if (filterType.includes("all")) {
            setFilteredBands(DATA);
            return;
        } else if (filterType === "pre-after-parties") {
            setFilteredBands(
                DATA.filter((band) => band.filter?.includes("after-parties") || band.filter?.includes("pre-parties"))
            );
            return;
        } else setFilteredBands(DATA.filter((band) => band.filter?.includes(filterType)));
    }

    return { filter, filteredBands, handleSetFilter };
}
