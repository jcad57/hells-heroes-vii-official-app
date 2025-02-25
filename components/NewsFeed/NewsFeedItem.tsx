import { StyleSheet, Text, View } from "react-native";
import { NewsFeedItems } from "@/data/types";

import formatBodyText from "@/functions/formatNewsfeedText";

export default function NewsFeedItem({ newsItem }: { newsItem: NewsFeedItems }) {
    return (
        <View style={styles.newsItemContainer}>
            <Text style={styles.timeStamp}>{newsItem.timestamp}</Text>
            <Text style={styles.title}>{newsItem.title}</Text>
            <Text style={styles.body}>{formatBodyText(newsItem.body)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
