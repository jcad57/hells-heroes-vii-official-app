import { ReactNode } from "react";
import { FlatList, ImageSourcePropType } from "react-native";

export interface NewsFeedContextType {
    newsFeed: Array<NewsFeedItems>;
    newsFeedError: boolean;
    isLoading: boolean;
}

export interface BusinessListData {
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export interface AppContainerProps {
    children: ReactNode;
    showLogo?: boolean;
    navigationHeaderText?: string;
    logo?: boolean;
}

export interface BusinessListCarouselProps {
    businessList: BusinessListData[];
    carouselRef: React.RefObject<FlatList>;
}

export interface NewsFeedItems {
    id: string;
    title: string;
    body: string;
    timestamp: string;
}

export interface Band {
    id: number;
    name: string;
    location: string;
    day: string;
    stage: string;
    time: string;
    filter?: string | string[];
}

export interface StageSectionType {
    stage: string;
    filteredScheduleByDay: Band[];
}

export interface PageHeadingProps {
    text: string;
}

export interface NavItemPropType {
    label: string;
    icon: ImageSourcePropType;
    iconSelected: ImageSourcePropType;
    isSelected: boolean;
    onPress: () => void;
}
