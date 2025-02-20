import { Linking, StyleSheet, View } from "react-native";
import PageHeading from "./PageHeading";
import Button from "./Button";
import { Link } from "expo-router";

const TICKET_URL = "https://www.ticketmaster.com/hell's-heroes-tickets/artist/3018376";
const TICKET_UPG_URL = "https://bit.ly/4jQIPho";
const MERCH_URL = "https://www.musicfestivalwizard.com/festivals/hells-heroes-festival-2025/";

const WOMH_URL = "https://whiteoakmusichall.com/";
const WOMH_INSTAGRAM_URL = "https://www.instagram.com/whiteoakmh/";
const WOMH_X_URL = "https://x.com/WhiteOakMH";

const HH_INSTAGRAM_URL = "https://www.instagram.com/hellsheroes/";
const HH_FACEBOOK_URL = "https://www.facebook.com/hellsheroesfest/";

const INSTA_ICON_PATH = require("../assets/icons/socials/instagram-white-icon.png");
const FB_ICON_PATH = require("../assets/icons/socials/facebook-white-icon.png");
const X_ICON_PATH = require("../assets/icons/socials/x-white-icon.png");

export default function More() {
    function handlePress(url: string) {
        Linking.openURL(url).catch((err) => alert("An error occurred"));
    }

    return (
        <View>
            <PageHeading text="Links" />
            <View style={styles.container}>
                <Button type="primary" text="Tickets & Upgrades" onPress={() => handlePress(TICKET_URL)} />
                <Button type="primary" text="Official Merch" onPress={() => handlePress(MERCH_URL)} />
                {/* <Button type="primary" text="Website" onPress={() => handlePress(TICKETLINK)} /> */}
                <Button type="primary" text="Venue Information" onPress={() => handlePress(WOMH_URL)} />
                <Link href="/(tabs)/local" asChild>
                    <Button type="primary" text="Local Food & drinks" />
                </Link>

                <PageHeading text="Socials" />

                <Button
                    type="primary"
                    imgUrl={INSTA_ICON_PATH}
                    text="@hellsheroes"
                    onPress={() => handlePress(HH_INSTAGRAM_URL)}
                />
                <Button
                    type="primary"
                    imgUrl={INSTA_ICON_PATH}
                    text="@whiteoakmh"
                    onPress={() => handlePress(WOMH_INSTAGRAM_URL)}
                />
                <Button
                    type="primary"
                    imgUrl={FB_ICON_PATH}
                    text="@hellsherosfest"
                    onPress={() => handlePress(HH_FACEBOOK_URL)}
                />
                <Button
                    type="primary"
                    imgUrl={X_ICON_PATH}
                    text="@hellsherosfest"
                    onPress={() => handlePress(WOMH_X_URL)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
    },
});
