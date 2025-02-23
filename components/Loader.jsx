import { ActivityIndicator } from "react-native";

export default function Loader({ children, loaded }) {
    return <>{loaded ? children : <ActivityIndicator />}</>;
}
