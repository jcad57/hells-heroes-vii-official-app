import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useContext } from "react";

import PageHeading from "../PageHeading";

import NewsFeedContext from "@/context/NewsFeedContext";
import NewsFeedItem from "./NewsFeedItem";

export default function NewsFeed() {
    const context = useContext(NewsFeedContext);
    if (!context) {
        alert("NewsFeedContext must be used within a NewsFeedProvider");
        return null;
    }
    const { newsFeed, newsFeedError, isLoading } = context;

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
                    newsFeed.map((newsItem) => <NewsFeedItem newsItem={newsItem} key={newsItem.id} />)}
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
    loading: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
