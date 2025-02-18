import { FlatList, ImageSourcePropType } from "react-native";

export interface BusinessListData {
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
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
    stage: string;
    time: string;
    filter?: string;
    location: string;
    day: string;
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
