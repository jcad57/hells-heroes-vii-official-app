import React from "react";
import { StyleSheet, Text, GestureResponderEvent, TouchableHighlight, Image, ImageSourcePropType } from "react-native";

interface ButtonProps {
    type: "primary" | "secondary" | "filter";
    text: string;
    selected?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    imgUrl?: ImageSourcePropType;
}

const Button = React.forwardRef<unknown, ButtonProps>(({ type, text, onPress, selected, imgUrl }, ref) => {
    if (type === "primary" || type === "secondary") {
        return (
            <TouchableHighlight
                style={type === "primary" ? styles.buttonPrimary : styles.buttonSecondary}
                underlayColor={type === "primary" ? "#622D91" : "#B8110B"}
                onPress={onPress}>
                <>
                    {imgUrl && <Image style={styles.btnIcon} source={imgUrl} />}
                    <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
                </>
            </TouchableHighlight>
        );
    } else if (type === "filter") {
        return (
            <TouchableHighlight
                onPress={onPress}
                style={[styles.buttonPrimary, styles.filterButton, selected && styles.filterSelected]}>
                <Text style={[styles.buttonText, styles.filterButtonText]}>{text.toUpperCase()}</Text>
            </TouchableHighlight>
        );
    } else {
        return null;
    }
});

const styles = StyleSheet.create({
    buttonPrimary: {
        position: "relative",
        borderColor: "#622D91",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 4,
        paddingBlock: 20,
        marginBlock: 5,
        marginInline: 10,
    },
    buttonSecondary: {
        position: "relative",
        backgroundColor: "#D53631",
        borderWidth: 4,
        borderColor: "#D53631",
        paddingBlock: 20,
        marginInline: 10,
    },
    filterButton: {
        flex: 1,
        justifyContent: "center",
        paddingBlock: 10,
        marginInline: 5,
    },
    filterSelected: {
        backgroundColor: "#622D91",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    filterButtonText: {
        fontSize: 16,
    },
    btnIcon: {
        position: "absolute",
        backgroundColor: "transparent",
        top: "55%",
        left: 20,
        width: 35,
        height: 35,
    },
});

export default Button;
