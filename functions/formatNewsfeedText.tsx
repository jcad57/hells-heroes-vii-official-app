import { StyleSheet, Text } from "react-native";
import openPostLink from "./openPostLink";

// Regex to match URLs in text
const urlRegex = /(https?:\/\/[^\s]+)/g;

export default function formatBodyText(text: string) {
    // Split the text into parts based on the URL regex
    return text.split(urlRegex).map((part, i) => {
        // If the part is a URL, render it as a link
        return urlRegex.test(part) ? (
            <Text key={i} style={styles.linkText} onPress={() => openPostLink(part)}>
                {part}
            </Text>
        ) : (
            part
        );
    });
}

const styles = StyleSheet.create({
    linkText: {
        color: "rgb(250, 80, 53)",
    },
});
