import { ScrollView, StyleSheet, Text, View } from "react-native";
import PageHeading from "./PageHeading";

const newsFeed = [
  {
    id: 1,
    timeStamp: "2 hours ago",
    title: "Lineup Announcement",
    body: "🎶🔥 Big news, festival fam! We've just added [Band Name] and [Artist Name] to this year’s lineup! Get ready for an unforgettable weekend of music, vibes, and memories. \n\nTickets are still available: \n\n#MusicFestival #LiveMusic #FestivalUpdates",
  },
  {
    id: 2,
    timeStamp: "6 hours ago",
    title: "Weather Advisory",
    body: "☀️🌧️ Stay prepared, festival-goers! The forecast for this weekend shows sunny skies during the day but cooler temps in the evening.\n\n✅ Bring sunscreen, shades, and layers to stay comfy.\n\nStay hydrated and ready to dance the night away!",
  },
  {
    id: 3,
    timeStamp: "3/12/25 - 4:45pm",
    title: "Lineup Announcement",
    body: "Big news, festival fam! We've just added [Band Name] and [Artist Name] to this year’s lineup! Get ready for an unforgettable weekend of music, vibes, and memories. \n\nTickets are still available: \n\n#MusicFestival #LiveMusic #FestivalUpdates",
  },
];

export default function NewsFeed() {
  return (
    <View>
      <PageHeading text="NEWS" />
      <View style={styles.container}>
        {newsFeed.map((newsItem) => (
          <View style={styles.newsItemContainer} key={newsItem.id}>
            <Text style={styles.timeStamp}>{newsItem.timeStamp}</Text>
            <Text style={styles.title}>{newsItem.title}</Text>
            <Text style={styles.body}>{newsItem.body}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingInline: 10,
  },
  newsItemContainer: {
    backgroundColor: "#2B2B2B",
    padding: 12,
    borderRadius: 6,
  },
  timeStamp: {
    color: "#FEA1A1",
    marginBlockEnd: 5,
    fontStyle: "italic",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  body: {
    fontSize: 16,
    color: "#FFF",
    marginBlock: 10,
  },
});
