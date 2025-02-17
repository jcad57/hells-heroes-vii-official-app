import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import formatBodyText from "../functions/formatNewsfeedText";

import PageHeading from "./PageHeading";
import useFetchNewsfeed from "@/hooks/useFetchNewsfeed";

export default function NewsFeed() {
    const { newsFeed, newsFeedError, isLoading } = useFetchNewsfeed();

    return (
        <>
            <PageHeading text="NEWS" />

            <View style={styles.container}>
                {newsFeedError && <Text>Error fetching NewsFeed...</Text>}
                {isLoading && (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                    </View>
                )}
                {!newsFeedError &&
                    newsFeed.length > 1 &&
                    newsFeed.map((newsItem) => (
                        <View style={styles.newsItemContainer} key={newsItem.id}>
                            <Text style={styles.timeStamp}>{newsItem.timestamp}</Text>
                            <Text style={styles.title}>{newsItem.title}</Text>
                            <Text style={styles.body}>{formatBodyText(newsItem.body)}</Text>
                        </View>
                    ))}
                {newsFeed.length === 0 && <Text>No news yet...</Text>}
            </View>
        </>
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
    loading: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
