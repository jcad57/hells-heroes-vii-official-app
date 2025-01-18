import { Linking, StyleSheet, Text, View } from "react-native";

import PageHeading from "./PageHeading";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface NewsFeedItems {
  id: string;
  title: string;
  body: string;
  timestamp: string;
}

export default function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState<NewsFeedItems[]>([]);
  const [newsFeedError, setNewsFeedError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(query(collection(db, "newsfeed-items")));
        const newsFeedData = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            body: doc.data().body,
            timestamp: doc.data().timestamp,
          }))
          .sort((a, b) => {
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
          });

        setNewsFeed(newsFeedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setNewsFeedError(true);
        setIsLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  // Check post body text for links and convert to active links
  // and open using openPostLink
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  function formatBodyText(text: string) {
    return text.split(urlRegex).map((part, i) => {
      return urlRegex.test(part) ? (
        <Text key={i} style={styles.linkText} onPress={() => openPostLink(part)}>
          {part}
        </Text>
      ) : (
        part
      );
    });
  }

  function openPostLink(link: string) {
    Linking.openURL(link.toString()).catch((err) => alert("An error occurred"));
  }

  return (
    <View>
      <PageHeading text="NEWS" />
      <View style={styles.container}>
        {newsFeedError && <Text>Error fetching NewsFeed...</Text>}
        {isLoading && (
          <View style={{ flex: 1, width: "100%" }}>
            <Text style={{ color: "#D53631", fontWeight: "bold", textAlign: "center" }}>Loading NewsFeed...</Text>
          </View>
        )}
        {!newsFeedError &&
          newsFeed.map((newsItem) => (
            <View style={styles.newsItemContainer} key={newsItem.id}>
              <Text style={styles.timeStamp}>{newsItem.timestamp}</Text>
              <Text style={styles.title}>{newsItem.title}</Text>
              <Text style={styles.body}>{formatBodyText(newsItem.body)}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
  linkText: {
    color: "rgb(250, 80, 53)",
  },
});
