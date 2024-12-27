import { Linking, StyleSheet, View } from "react-native";
import PageHeading from "./PageHeading";
import Button from "./Button";
import { useCallback } from "react";

const TICKETLINK = "https://www.ticketmaster.com/hell's-heroes-tickets/artist/3018376";
const MERCHLINK = "https://www.musicfestivalwizard.com/festivals/hells-heroes-festival-2025/";
const VENUELINK = "https://whiteoakmusichall.com/";
const INSTALINK = "https://www.instagram.com/hellsheroes/";
const FACEBOOKLINK = "https://www.facebook.com/hellsheroesfest/";

export default function More() {
  function handlePress(url: string) {
    Linking.openURL(url).catch((err) => alert("An error occurred"));
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <PageHeading text="Links" />
        <Button type="primary" text="Tickets & Upgrades" onPress={() => handlePress(TICKETLINK)} />
        <Button type="primary" text="Official Merch" onPress={() => handlePress(MERCHLINK)} />
        <Button type="primary" text="Website" onPress={() => handlePress(TICKETLINK)} />
        <Button type="primary" text="Venue Information" onPress={() => handlePress(VENUELINK)} />
      </View>
      <PageHeading text="Socials" />
      <View style={styles.contentContainer}>
        <Button type="primary" text="@hellsheroes" onPress={() => handlePress(INSTALINK)} />
        <Button type="primary" text="@hellsheroes" onPress={() => handlePress(FACEBOOKLINK)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    paddingInline: 10,
  },
  contentContainer: {
    marginBlockEnd: 40,
  },
});
