import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BusinessListCarouselProps, BusinessListData } from "../../data/types";
import { Linking } from "react-native";

export default function BusinessListCarousel({ businessList, carouselRef }: BusinessListCarouselProps) {
    const flatListItemWidth = Dimensions.get("screen").width * 0.9 - 16;

    function openDirections(business: BusinessListData) {
        const { latitude, longitude, name } = business;
        const url = Platform.select({
            ios: `maps://?daddr=${latitude},${longitude}&dirflg=d`,
            android: `geo:${latitude},${longitude}?q=${latitude},${longitude}(${encodeURIComponent(name)})`,
        });

        if (url) {
            Linking.openURL(url).catch((err) => console.error("Error opening maps", err));
        }
    }

    return (
        <View style={styles.carouselContainer}>
            <FlatList
                data={businessList}
                ref={carouselRef}
                horizontal
                pagingEnabled
                snapToInterval={flatListItemWidth + 16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => openDirections(item)}>
                        <View style={[styles.itemContainer, { maxWidth: flatListItemWidth }]} key={item.id}>
                            <Image
                                style={styles.thumbnail}
                                source={require("../../assets/images/business-list-images/vinal-edge.jpg")}
                            />
                            <View style={styles.textContainer}>
                                <View>
                                    <Text style={styles.businessName}>{item.name}</Text>
                                    <Text style={styles.businessDescription}>{item.description}</Text>
                                </View>
                                <View>
                                    <Text style={styles.businessDirections}>TAP FOR DIRECTIONS</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        position: "absolute",
        bottom: 10,
        left: 0,
    },
    itemContainer: {
        backgroundColor: "black",
        // Remove if you want border:
        // borderStyle: "solid",
        // borderWidth: 5,
        // borderColor: "#622D91",
        borderRadius: 30,
        flexDirection: "row",
        marginInline: 8,
        height: "100%",
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.75)",
    },
    thumbnail: {
        width: 80,
        resizeMode: "cover",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    textContainer: {
        paddingInline: 17,
        paddingBlock: 8,
        flexShrink: 1,
        justifyContent: "space-between",
    },
    businessName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#D53631",
        fontFamily: "Kanit",
    },
    businessDescription: {
        fontStyle: "italic",
        color: "white",
        fontSize: 16,
        flexShrink: 1,
        marginBottom: 10,
    },
    businessDirections: {
        color: "#FFD700",
        fontWeight: "bold",
        paddingBottom: 5,
    },
});
