import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useLocalAsyncStorage() {
    const setStorage = async (key: string, value: object) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            // saving error
        }
    };

    // const setSchedule = async (value: object) => {
    //     try {
    //         const jsonValue = JSON.stringify(value);
    //         await AsyncStorage.setItem(key, jsonValue);
    //     } catch (e) {
    //         // saving error
    //     }
    // };

    const getStorage = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);

            if (jsonValue !== null) {
                // value previously stored
                // console.log(JSON.parse(jsonValue));
                return jsonValue;
            }
        } catch (e) {
            // error reading value
            console.log("error");
        }
    };

    return { setStorage, getStorage };
}
