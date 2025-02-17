import { Linking } from "react-native";

export default function openPostLink(link: string) {
    Linking.openURL(link.toString()).catch((err) => alert("An error occurred"));
}
