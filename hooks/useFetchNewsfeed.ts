import { useEffect, useState } from "react";
import { NewsFeedItems } from "@/data/types";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function useFetchNewsfeed() {
    const [newsFeed, setNewsFeed] = useState<NewsFeedItems[]>([]);
    const [newsFeedError, setNewsFeedError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
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
        fetchNews();
    }, []);

    return { newsFeed, newsFeedError, isLoading };
}
