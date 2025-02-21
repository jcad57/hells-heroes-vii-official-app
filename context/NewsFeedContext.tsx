import React, { createContext, ReactNode } from "react";
import { NewsFeedItems } from "@/data/types";
import useFetchNewsfeed from "@/hooks/useFetchNewsfeed";

export interface NewsFeedContextType {
    newsFeed: Array<NewsFeedItems>;
    newsFeedError: boolean;
    isLoading: boolean;
}

const NewsFeedContext = createContext<NewsFeedContextType | null>(null);

export const NewsFeedProvider = ({ children }: { children: ReactNode }) => {
    const { newsFeed, newsFeedError, isLoading } = useFetchNewsfeed();

    return (
        <NewsFeedContext.Provider value={{ newsFeed, newsFeedError, isLoading } as NewsFeedContextType}>
            {children}
        </NewsFeedContext.Provider>
    );
};

export default NewsFeedContext;
