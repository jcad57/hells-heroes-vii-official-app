import { StyleSheet, Text, View } from "react-native";

import AppContainer from "@/components/Layout/AppContainer";
import ShareSchedule from "@/components/ShareSchedule";

export default function Friday() {
    return (
        <AppContainer logo={false}>
            <ShareSchedule />
        </AppContainer>
    );
}
