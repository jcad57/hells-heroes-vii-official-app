import { Pressable, View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";

interface NavItemPropType {
    label: string;
    icon: ImageSourcePropType;
    iconSelected: ImageSourcePropType;
    isSelected: boolean;
    onPress: () => void;
}

export default function NavItem({ label, icon, iconSelected, isSelected, onPress }: NavItemPropType) {
    return (
        <Pressable onPress={onPress}>
            <View style={{ alignItems: "center" }}>
                <Image style={styles.navbarIcon} source={isSelected ? iconSelected : icon} />
                <Text style={[styles.navText, { color: isSelected ? "#D53631" : "#fff" }]}>{label}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    navbarIcon: {
        width: 30,
        height: 30,
    },
    navText: {
        fontSize: 12,
        maxWidth: 65,
        textAlign: "center",
        paddingTop: 5,
    },
});
