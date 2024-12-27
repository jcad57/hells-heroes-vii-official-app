import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable, Alert, ScrollView, Image } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import NewsFeed from "@/components/NewsFeed";
import Lineup from "@/components/Lineup";
import Schedule from "@/components/Schedule";
import GuideToHell from "@/components/GuideToHell";
import More from "@/components/More";

export default function Index() {
  const [currentTab, setCurrentTab] = useState("home");
  const [schedule, setSchedule] = useState([]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Logo />
        {currentTab === "home" && <NewsFeed />}
        {currentTab === "lineup" && <Lineup schedule={schedule} setSchedule={setSchedule} />}
        {currentTab === "schedule" && <Schedule schedule={schedule} setSchedule={setSchedule} />}
        {currentTab === "guide-to-hell" && <GuideToHell />}
        {currentTab === "more" && <More />}
      </ScrollView>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    backgroundColor: "#000",
  },
});
