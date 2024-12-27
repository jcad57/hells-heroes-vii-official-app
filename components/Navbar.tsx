import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import NavItem from "./NavItem";
import icons from "../scripts/icons";

export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <View style={styles.navbarContainer}>
      <NavItem
        label="SCHEDULE"
        icon={icons.scheduleIcon}
        iconSelected={icons.scheduleIconSelected}
        isSelected={currentTab === "schedule"}
        onPress={() => setCurrentTab("schedule")}
      />
      <NavItem
        label="LINEUP"
        icon={icons.lineupIcon}
        iconSelected={icons.lineupIconSelected}
        isSelected={currentTab === "lineup"}
        onPress={() => setCurrentTab("lineup")}
      />
      <NavItem
        label="HH VII"
        icon={icons.homeIcon}
        iconSelected={icons.homeIconSelected}
        isSelected={currentTab === "home"}
        onPress={() => setCurrentTab("home")}
      />
      <NavItem
        label="GUIDE TO HELL"
        icon={icons.guideToHellIcon}
        iconSelected={icons.guideToHellIconSelected}
        isSelected={currentTab === "guide-to-hell"}
        onPress={() => setCurrentTab("guide-to-hell")}
      />
      <NavItem
        label="MORE"
        icon={icons.moreIcon}
        iconSelected={icons.moreIconSelected}
        isSelected={currentTab === "more"}
        onPress={() => setCurrentTab("more")}
      />
    </View>
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
