import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Schedule() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}>
      <Link href="./">Home</Link>
    </View>
  );
}
