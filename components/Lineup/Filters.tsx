import { StyleSheet, View } from "react-native";
import Button from "../Button";

export default function Filters({
    filter,
    handleSetFilter,
}: {
    filter: string;
    handleSetFilter: (filter: string) => void;
}) {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={styles.btnContainer}>
                <Button
                    type="filter"
                    text="pre/after-parties"
                    onPress={() => handleSetFilter("pre-after-parties")}
                    selected={filter.includes("pre-after-parties")}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button type="filter" text="all" onPress={() => handleSetFilter("all")} selected={filter === "all"} />
            </View>
            <View style={styles.btnContainer}>
                <Button
                    type="filter"
                    text="texas bands"
                    onPress={() => handleSetFilter("local")}
                    selected={filter === "local"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
    },
});
