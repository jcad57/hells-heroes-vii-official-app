import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";

import CurrentTabContext, { CurrentTabProvider } from "@/context/CurrentTabContext";

import NavItem from "./NavItem";
import icons from "../data/icons";

export default function Navbar() {
  const context = useContext(CurrentTabContext);
  if (!context) {
    throw new Error("CurrentTabContext must be used within a ScheduleProvider");
  }
  const { currentTab, setCurrentTab } = context;
  const navigate = useRouter();

  function handlePress(tab) {
    setCurrentTab(tab);
    if (navigate.canGoBack()) navigate.back();
  }
  return (
    <CurrentTabProvider>
      <View style={styles.navbarContainer}>
        <NavItem
          label="SCHEDULE"
          icon={icons.scheduleIcon}
          iconSelected={icons.scheduleIconSelected}
          isSelected={currentTab === "schedule"}
          onPress={() => handlePress("schedule")}
        />
        <NavItem
          label="LINEUP"
          icon={icons.lineupIcon}
          iconSelected={icons.lineupIconSelected}
          isSelected={currentTab === "lineup"}
          onPress={() => handlePress("lineup")}
        />
        <NavItem
          label="HH VII"
          icon={icons.homeIcon}
          iconSelected={icons.homeIconSelected}
          isSelected={currentTab === "home"}
          onPress={() => handlePress("home")}
        />
        <NavItem
          label="GUIDE TO HELL"
          icon={icons.guideToHellIcon}
          iconSelected={icons.guideToHellIconSelected}
          isSelected={currentTab === "guide-to-hell"}
          onPress={() => handlePress("guide-to-hell")}
        />
        <NavItem
          label="MORE"
          icon={icons.moreIcon}
          iconSelected={icons.moreIconSelected}
          isSelected={currentTab === "more"}
          onPress={() => handlePress("more")}
        />
      </View>
    </CurrentTabProvider>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "#141414",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    paddingInline: 20,
    paddingTop: 10,
  },
});
