import { Stack } from "expo-router";
import { ScheduleProvider } from "../context/ScheduleContext";
import { CurrentTabProvider } from "@/context/CurrentTabContext";
import { NewsFeedProvider } from "@/context/NewsFeedContext";

export default function RootLayout() {
    return (
        <ScheduleProvider>
            <NewsFeedProvider>
                <CurrentTabProvider>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                </CurrentTabProvider>
            </NewsFeedProvider>
        </ScheduleProvider>
    );
}
