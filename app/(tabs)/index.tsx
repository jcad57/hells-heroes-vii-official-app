import { useContext } from "react";

import CurrentTabContext, { CurrentTabProvider } from "@/context/CurrentTabContext";

import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import NewsFeed from "@/components/NewsFeed";
import Lineup from "@/components/Lineup";
import Schedule from "@/components/Schedule";
import GuideToHell from "@/components/GuideToHell";
import More from "@/components/More";
import AppContainer from "@/components/AppContainer";

export default function Index() {
  const context = useContext(CurrentTabContext);
  if (!context) alert("CurrentTabContext must be used within a ScheduleProvider");
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
