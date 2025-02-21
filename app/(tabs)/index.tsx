import { useContext, useEffect, useRef } from "react";

import CurrentTabContext from "@/context/CurrentTabContext";

import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Lineup from "@/components/Lineup/Lineup";
import Schedule from "@/components/Schedule";
import GuideToHell from "@/components/GuideToHell/GuideToHell";
import More from "@/components/More";
import AppContainer from "@/components/Layout/AppContainer";

export default function Index() {
    const context = useContext(CurrentTabContext);
    if (!context) {
        alert("CurrentTabContext must be used within a ScheduleProvider");
        return undefined;
    }
    const { currentTab } = context;

    return (
        <AppContainer>
            {currentTab === "home" && <NewsFeed />}
            {currentTab === "lineup" && <Lineup />}
            {currentTab === "schedule" && <Schedule />}
            {currentTab === "guide-to-hell" && <GuideToHell />}
            {currentTab === "more" && <More />}
        </AppContainer>
    );
}
