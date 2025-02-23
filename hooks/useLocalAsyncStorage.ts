import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLocalAsyncStorage() {
    const setStorage = async (key: string, value: object) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // saving error
            console.error(e);
        }
    };

    const getStorage = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);

            if (jsonValue !== null) {
                return jsonValue;
            }
        } catch (e) {
            console.error("error");
        }
    };

    return { setStorage, getStorage };
}
