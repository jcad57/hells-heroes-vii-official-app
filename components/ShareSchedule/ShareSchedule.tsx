import React from "react";
import { View } from "react-native";

import useShareSchedule from "@/hooks/useShareSchedule";
import RenderScheduleImage from "./RenderScheduleImage";

const ScheduleShare = () => {
    const { shareScheduleData } = useShareSchedule();

    return (
        <View style={{ flex: 1, gap: 10, justifyContent: "space-between", paddingBlock: 10, marginInline: 10 }}>
            {shareScheduleData?.map(
                (scheduleDay, i) => scheduleDay.length > 0 && <RenderScheduleImage key={i} data={scheduleDay} />
            )}
        </View>
    );
};

export default ScheduleShare;
