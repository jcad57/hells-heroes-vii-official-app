import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { BusinessListCarouselProps } from "../../data/types";

export default function BusinessListCarousel({ businessList }: BusinessListCarouselProps) {
    return (
        <View style={styles.carouselContainer}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                {businessList.map((business) => {
                    return (
                        <View style={styles.businessContainer}>
                            <Image
                                style={styles.thumbnail}
                                source={require("../../assets/images/business-list-images/vinal-edge.jpg")}
                            />

                            <View style={styles.textContainer} key={business.id}>
                                <Text style={styles.businessName}>{business.name}</Text>
                                <Text style={styles.businessDescription}>{business.description}</Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        position: "absolute",
        bottom: 0,
        margin: 10,
    },
    businessContainer: {
        flexDirection: "row",
        backgroundColor: "black",
        maxWidth: "85%",
        marginRight: 20,
        borderStyle: "solid",
        borderWidth: 6,
        borderColor: "#622D91",
    },
    thumbnail: {
        width: 80,
        resizeMode: "cover",
    },
    textContainer: {
        padding: 10,
        flexShrink: 1,
    },
    businessName: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
        color: "white",
        fontFamily: "Kanit",
    },
    businessDescription: {
        color: "white",
        fontSize: 16,
        flexShrink: 1,
    },
});
