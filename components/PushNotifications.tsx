import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { useEffect, useState } from "react";

export const PushNotifications = () => {
    const [permissions, setPermissions] = useState({});

    useEffect(() => {
        const type = "notification";
        PushNotificationIOS.addEventListener(type, onRemoteNotification);
        return () => {
            PushNotificationIOS.removeEventListener(type);
        };
    });

    const onRemoteNotification = (notification: any) => {
        const isClicked = notification.getData().userInteraction === 1;

        if (isClicked) {
            // Navigate user to another screen
        } else {
            // Do something else with push notification
        }
        // Use the appropriate result based on what you needed to do for this notification
        const result = PushNotificationIOS.FetchResult.NoData;
        notification.finish(result);
    };
};
